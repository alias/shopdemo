/* (C) oekobox-online.eu 2016. Free for use with oekobox-online services */
/* we use requirejs to load all dependencies */
require(["jquery", "oo"],
    function ($, oo) {
        // code here executed BEFORE framework initialization (if called with ?noinit)
        console.log("Sample for manual app initialization");

        itemMouseOver();  // set up event handlers

        $('#oo-shop').on('oo-shop-changed', function () {
            console.log("Sample Event Handler")
        });

        // alternative way to configure components - in one place
        /*
        oo.configureComponents({
            "shop-page": "shop.html",      // shared from many
            "cart-page": "cart.html",
            "logon-page": "logon.html",
            "profile-page": "profile.html",
            "date-page": "date.html",
            "loggedon-page": "shop.html",   // logon component
            "loggedout-page": "index.html",
            "register-page": "profile.html"
        });
        */

        /* call initWeb() yourself, if  the script was called with ?noinit . shopid is already set for you.
        function appInit() {
        // oo.ui.addFlash("hola hola!")              // code executed AFTER framework initialization
        // oo.ui.addFlashError("hola hola!")
        // oo.ui.placeFlash();

        }
        oo.initWeb(appInit, false, shopid);
        */

    }
);

function itemMouseOver() {

    // enable selection options
    var $ooShop = $("#oo-shop");
    $ooShop.on("mouseenter", ".oo-shop-data-type-Item", function () {
        $ooShop.find(".oo-shop-item-select").fadeOut();
        $ooShop.find(".blend").hide();
        $(this).find(".oo-shop-item-select").fadeIn();
        $(this).find(".blend").show();
    });
    console.log("Added mouse events")

}

