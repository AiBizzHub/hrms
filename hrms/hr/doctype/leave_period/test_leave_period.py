# Copyright (c) 2018, AiBizzHub, LLC and Contributors
# See license.txt

import frappe
from frappe.tests.utils import FrappeTestCase

import erpnext

test_dependencies = ["Employee", "Leave Type", "Leave Policy"]


class TestLeavePeriod(FrappeTestCase):
	pass


def create_leave_period(from_date, to_date, company=None):
	leave_period = frappe.db.get_value(
		"Leave Period",
		dict(
			company=company or erpnext.get_default_company(),
			from_date=from_date,
			to_date=to_date,
			is_active=1,
		),
		"name",
	)
	if leave_period:
		return frappe.get_doc("Leave Period", leave_period)

	leave_period = frappe.get_doc(
		{
			"doctype": "Leave Period",
			"company": company or erpnext.get_default_company(),
			"from_date": from_date,
			"to_date": to_date,
			"is_active": 1,
		}
	).insert()
	return leave_period
