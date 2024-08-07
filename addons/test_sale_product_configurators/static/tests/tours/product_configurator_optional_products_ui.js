/** @odoo-module **/

import { registry } from "@web/core/registry";
import { stepUtils } from "@web_tour/tour_service/tour_utils";

registry.category("web_tour.tours").add('sale_product_configurator_optional_products_tour', {
    url: '/web',
    test: true,
    steps: () => [stepUtils.showAppsMenuItem(), {
    trigger: '.o_app[data-menu-xmlid="sale.sale_menu_root"]',
    run: "click",
}, 
{
    trigger: ".o_sale_order",
},
{
    trigger: '.o_list_button_add',
    run: "click",
}, {
    trigger: '.o_required_modifier[name=partner_id] input',
    run: "edit Tajine Saucisse",
}, {
    isActive: ["auto"],
    trigger: '.ui-menu-item > a:contains("Tajine Saucisse")',
    run: "click",
}, {
    trigger: 'a:contains("Add a product")',
    run: "click",
}, {
    trigger: 'div[name="product_template_id"] input',
    run: "edit Custo",
}, {
    trigger: 'ul.ui-autocomplete a:contains("Customizable Desk (TEST)")',
    run: "click",
}, {
    trigger: 'tr:has(div[name="o_sale_product_configurator_name"]:contains("Office Chair Black")) button:has(i.fa-plus)',
    run: "click",
}, {
    trigger: 'tr:has(div[name="o_sale_product_configurator_name"]:contains("Customizable Desk")) button:has(i.fa-plus)',
    run: "click",
}, {
    trigger: 'tr:has(div[name="o_sale_product_configurator_name"]:contains("Chair floor protection")) button:has(i.fa-plus)',
    run: "click",
}, {
    trigger: 'tr:has(div[name="o_sale_product_configurator_name"]:contains("Conference Chair")) button:has(i.fa-plus)',
    run: "click",
}, {
    trigger: 'tr:has(div[name="o_sale_product_configurator_name"]:contains("Conference Chair")) a:contains("Remove")',
    run: "click",
}, {
    trigger: 'tr:has(div[name="o_sale_product_configurator_name"]:contains("Conference Chair")) button:has(i.fa-plus)',
    run: "click",
}, {
    trigger: ".modal button:contains(Confirm)",
    in_modal: false,
    run: "click",
}, 
{
    trigger: ".modal-title:contains(Warning for Conference Chair (TEST))",
},
{
    trigger: '.o-default-button',
    run: "click",
}, {
    trigger: 'tr:has(td.o_data_cell:contains("Customizable Desk")) td.o_data_cell:contains("2.0")',
}, {
    trigger: 'tr:has(td.o_data_cell:contains("Office Chair Black")) td.o_data_cell:contains("1.0")',
}, {
    trigger: 'tr:has(td.o_data_cell:contains("Conference Chair")) td.o_data_cell:contains("1.0")',
}, {
    trigger: 'tr:has(td.o_data_cell:contains("Chair floor protection")) td.o_data_cell:contains("1.0")',
}, ...stepUtils.saveForm()
]});
