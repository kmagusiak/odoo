/** @odoo-module **/

    import { _t } from "@web/core/l10n/translation";
    import wTourUtils from "@website/js/tours/tour_utils";

    import { markup } from "@odoo/owl";

    wTourUtils.registerWebsitePreviewTour("blog", {
        url: "/",
    }, () => [{
        trigger: "body:not(:has(#o_new_content_menu_choices)) .o_new_content_container > a",
        content: _t("Click here to add new content to your website."),
        consumeVisibleOnly: true,
        position: 'bottom',
        run: "click",
    }, {
        trigger: 'a[data-module-xml-id="base.module_website_blog"]',
        content: _t("Select this menu item to create a new blog post."),
        position: "bottom",
        run: "click",
    }, {
        trigger: 'div[name="name"] input',
        content: _t("Enter your post's title"),
        position: "bottom",
        run: "edit Test",
    }, {
        trigger: "button.o_form_button_save",
        extra_trigger: 'div.o_field_widget[name="blog_id"]',
        content: _t("Select the blog you want to add the post to."),
        // Without demo data (and probably in most user cases) there is only
        // one blog so this step would not be needed and would block the tour.
        // We keep the step with "auto: true", so that the main python test
        // still works but never display this to the user anymore. We suppose
        // the user does not need guidance once that modal is opened. Note: if
        // you run the tour via your console without demo data, the tour will
        // thus fail as this will be considered.
        auto: true,
        run: "click",
    }, {
        trigger: ":iframe h1[data-oe-expression=\"blog_post.name\"]",
        extra_trigger: "#oe_snippets.o_loaded",
        content: _t("Edit your title, the subtitle is optional."),
        position: "top",
        run: "editor Test",
    }, {
        trigger: "we-button[data-background]:eq(0)",
        extra_trigger: `:iframe #wrap h1[data-oe-expression="blog_post.name"]:not(:contains(''))`,
        content: markup(_t("Set a blog post <b>cover</b>.")),
        position: "top",
        run: "click",
    }, {
        trigger: ".o_select_media_dialog .o_we_search",
        content: _t("Search for an image. (eg: type \"business\")"),
        position: "top",
        run() {},
    }, {
        trigger: ".o_select_media_dialog .o_existing_attachment_cell:first img",
        extra_trigger: '.modal:has(.o_existing_attachment_cell:first)',
        content: _t("Choose an image from the library."),
        position: "top",
        run: "click",
    }, {
        trigger: ":iframe #o_wblog_post_content p",
        content: markup(_t("<b>Write your story here.</b> Use the top toolbar to style your text: add an image or table, set bold or italic, etc. Drag and drop building blocks for more graphical blogs.")),
        position: "top",
        run: "editor Blog content",
    },
    ...wTourUtils.clickOnSave(),
    {
        trigger: ".o_menu_systray_item.o_mobile_preview > a",
        content: markup(_t("Use this icon to preview your blog post on <b>mobile devices</b>.")),
        position: "bottom",
        run: "click",
    }, {
        trigger: ".o_menu_systray_item.o_mobile_preview > a",
        extra_trigger: '.o_website_preview.o_is_mobile',
        content: _t("Once you have reviewed the content on mobile, you can switch back to the normal view by clicking here again"),
        position: "right",
        run: "click",
    }, {
        trigger: '.o_menu_systray_item a:contains("Unpublished")',
        extra_trigger: ":iframe body:not(.editor_enable)",
        position: "bottom",
        content: markup(_t("<b>Publish your blog post</b> to make it visible to your visitors.")),
        run: "click",
    }, {
        trigger: '.o_menu_systray_item a:contains("Published")',
        auto: true,
        isCheck: true,
    }
]);
