# -*- coding: utf-8 -*-
from odoo import models, fields, api


class PosOrder(models.Model):
    _inherit = "pos.order"

    employee_id = fields.Many2one('hr.employee', string="Cashier", help="The employee who uses the cash register.")
    cashier = fields.Char(string="Cashier name", compute="_compute_cashier", store=True)

    @api.depends('employee_id', 'user_id')
    def _compute_cashier(self):
        for order in self:
            if order.employee_id:
                order.cashier = order.employee_id.name
            else:
                order.cashier = order.employee_id.name
