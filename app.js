/* (C) oekobox-online.eu 2016. Free for use with oekobox-online services */
/* we use requirejs to load all dependencies */

/* Example to add more js code , see the accordeon code below and in  shop.html   */
requirejs.config({
    paths: {
        "acc" : "../../s7/js/jquery-ui_acc.min",
        //"jquery1": "//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min"
    }
});

require(["jquery", "oo" /*, "acc" */ ],
    function ($, oo) {
        // code here executed BEFORE framework initialization (if called with ?noinit)
        console.log("Sample for manual app initialization!");

        /* see above: use the library code here
        $("#accordion").accordion({
          active: 2
        });
        */
        oo.configureComponents({
            // global settings (they have effect on more than one component)
            "oo-logonmode": "normal",       // normal: ask for tour first, email1st: ask for email first
            "oo-skip-locate": false,        // if true, never ask for a tour, assign the configure new-customer-tour
            // component specific settings
            "oo-profile-tabs-strict": true  // if true, allow forward-stepping upon register only if a form is valid
        });
        
        // alternative way to configure components - in one place. See the reference for possible values.
        /*
        oo.configureComponents({
            "oo-shop-page": "shop.html",      // shared from many , if a map is used, thats the default
            "oo-cart-page": "cart.html",
            "oo-logon-page": "logon.html",
            "oo-profile-page": "profile.html",
            "oo-date-page": "date.html",
            "oo-loggedon-page": "shop.html",   // logon component
            "oo-loggedout-page": "index.html",
            "oo-register-page": "profile.html"
        });
        */

        /*
        // example configuration for shop-page mapping: define a navigationLevel-to-page mapping here. Whenever
        // the components want to display another navigation level, the'll check this map first.
        oo.configureComponents({
            "oo-shop-page": "shop.html"        // default shop page if no mapping fires
        });
        oo.configureShopPageMap({              // mappings
            // entity:entityid, target path - first match ist taken
            'Group:66': "shop1.html",
            'Group:68': "shop2.html"
        });
        */

        /* call initWeb() yourself, ONLY if the script was called with ?noinit . shopid is already set for you.
        function appInit() {
        // oo.ui.addFlash("hola hola!")              // code executed AFTER framework initialization
        // oo.ui.addFlashError("hola hola!")
        // oo.ui.placeFlash();

        }
        oo.initWeb(appInit, false, shopid);
        */

    }
);


