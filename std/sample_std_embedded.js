// Example of an external configuration for the standard shop
// This code is already part of client1?config=std   ! Use it only if you want to configure a shop  differently
oor.require(["oo"], function (oo) {
        // here oo is fully loaded, with its own jquery version
        var $ = window.oojq;      // provided by oo; needed for all code below, especially within initWeb below.
        // template location, @ means "embed it". oosysname is already set
        var lot = "@" + window.oosysname + "/std/";

        $(document).ready(function () {
            oo.components.loadToShopElement(lot + "index.jsp", false, function () {
                $(document).trigger("oo-embedded");        // fires the oo system , see below
            })
        });

        oo.addMixins({
            ".oo-navi-image-name": "h3"             // elements with class .oo-navi-image-name will also get class h3 assigned
        });

        oo.setStyleBase("shop2018");                // define the style used here (for theme editor)

        oo.configureComponents({                    // these are the standard values
            "oo-shop-page": lot + "index.jsp",
            "oo-cart-page": lot + "cart.jsp",
            "oo-logon-page": lot + "logon.jsp",
            "oo-profile-page": lot + "profile.jsp",
            "oo-date-page": lot + "date.jsp",
            "oo-loggedon-page": lot + "index.jsp",
            "oo-loggedout-page": lot + "index.jsp",
            "oo-register-page": lot + "profile.jsp",
            "oo-shop-zoom-titleimg": true,
            "oo-shop-titleprefix": "->",

            "oo-profile-tabs-strict": false,       // finish one form first
            "oo-skip-locate": "false",             // only for non-regional shops
            "oo-logonmode": "email1st",            // start with email when logon
            "oo-profile-quickorder": true,         // makes last step in reg to go to cart; implies strict
            "Xoo-cartmode": "cart",                // cartmode clears after submitting and does not preload the cart for date
            "Xoo-emptycarturl": "index.jsp",
            "oo-profile-aboedit": true             // default to be
        });

        function appInit() {      // referenced in the init() call later
            //$("#oo-shop .oo-select-sub-0").show()
            console.log("************************************* Shop scripts loaded and page was processed.");
            $("#std-loading").fadeOut();
            // code to run AFTER shop initialization
        }

        $(document).on("oo-embedded", function () {      // see above
            // place code here that should run BEFORE shop initalization
            oo.initWeb(appInit, false, shopid, false);
        })
    }
);