// Copyright (c) 2019, AiBizzHub, LLC and Contributors
// License: GNU General Public License v3. See license.txt

// render
frappe.listview_settings["Leave Allocation"] = {
	get_indicator: function (doc) {
		if (doc.status === "Expired") {
			return [__("Expired"), "gray", "expired, =, 1"];
		}
	},
};