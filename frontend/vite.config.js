const { defineConfig } = require("vite");
const vue = require("@vitejs/plugin-vue");
const { VitePWA } = require("vite-plugin-pwa");
const path = require("path");
const fs = require("fs");

module.exports = defineConfig(async () => {
  const frappeui = await import("frappe-ui/vite").then((module) => module.default);

  return {
    server: {
      port: 8080,
      proxy: getProxyOptions(),
    },
    plugins: [
      vue(),
      frappeui(),
      VitePWA({
        registerType: "autoUpdate",
        strategies: "injectManifest",
        injectRegister: null,
        devOptions: {
          enabled: true,
        },
        manifest: {
          display: "standalone",
          name: "AiBizzApp HR",
          short_name: "AiBizzApp HR",
          start_url: "/hrms",
          description: "Everyday HR & Payroll operations at your fingertips",
          theme_color: "#ffffff",
          icons: [
            {
              src: "/assets/hrms/manifest/manifest-icon-192.maskable.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/assets/hrms/manifest/manifest-icon-192.maskable.png",
              sizes: "192x192",
              type: "image/png",
              purpose: "maskable",
            },
            {
              src: "/assets/hrms/manifest/manifest-icon-512.maskable.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any",
            },
            {
              src: "/assets/hrms/manifest/manifest-icon-512.maskable.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "maskable",
            },
          ],
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    build: {
      outDir: "../hrms/public/frontend",
      emptyOutDir: true,
      target: "es2015",
      commonjsOptions: {
        include: [/tailwind.config.js/, /node_modules/],
      },
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: {
            "frappe-ui": ["frappe-ui"],
          },
        },
      },
    },
    optimizeDeps: {
      include: [
        "frappe-ui > feather-icons",
        "showdown",
        "tailwind.config.js",
        "engine.io-client",
      ],
    },
  };
});

function getProxyOptions() {
  const config = getCommonSiteConfig();
  const webserver_port = config ? config.webserver_port : 8000;
  if (!config) {
    console.log("No common_site_config.json found, using default port 8000");
  }
  return {
    "^/(app|login|api|assets|files|private)": {
      target: `http://127.0.0.1:${webserver_port}`,
      ws: true,
      router: function (req) {
        const site_name = req.headers.host.split(":")[0];
        console.log(`Proxying ${req.url} to ${site_name}:${webserver_port}`);
        return `http://${site_name}:${webserver_port}`;
      },
    },
  };
}

function getCommonSiteConfig() {
  let currentDir = path.resolve(".");
  while (currentDir !== "/") {
    if (
      fs.existsSync(path.join(currentDir, "sites")) &&
      fs.existsSync(path.join(currentDir, "apps"))
    ) {
      let configPath = path.join(currentDir, "sites", "common_site_config.json");
      if (fs.existsSync(configPath)) {
        return JSON.parse(fs.readFileSync(configPath));
      }
      return null;
    }
    currentDir = path.resolve(currentDir, "..");
  }
  return null;
}
