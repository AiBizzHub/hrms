import click

import frappe


def execute():
	frappe_v = frappe.get_attr("frappe" + ".__version__")
	hrms_v = frappe.get_attr("hrms" + ".__version__")

	WIKI_URL = "https://github.com/frappe/hrms/wiki/Changes-to-branching-and-versioning"

	if frappe_v.startswith("0") and hrms_v.startswith("1"):
		message = f"""
			The `develop` branch of AiBizzApp HR is no longer compatible with Framework & ERP's `version-0`.
			Since you are using ERP/Framework `version-0` please switch AiBizzApp HR's branch to `version-0` and then proceed with the update.\n\t
			You can switch the branch by following the steps mentioned here: {WIKI_URL}
		"""
		click.secho(message, fg="red")

		frappe.throw(message)  # nosemgrep
