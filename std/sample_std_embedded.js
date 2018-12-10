// this can be used to adjust the location of the dependencies
// (add oly whats needed; it will override the default)
// use this to hook into the boostrap process
// This code is already part of client1?config=std   ! Use it only if you want to configure a shop  differently
require(["jquery", "oo"],
    function ($, oo) {

        // template location, @ means "embed it"
        var lot = "@https://oekobox-online.com/v3/shop/SYSNAME/std/";

        $(document).ready(function() {
            oo.components.loadToShopElement(lot + "index.jsp", false, function () {
                $(document).trigger("oo-embedded");        // fires the oo system , see below
            })
        });

        oo.addMixins({
            ".oo-navi-image-name": "h3"        // to use bootstrap sizes
        });

        oo.setStyleBase("shop2018");         // define the style used here

        oo.configureComponents({             // @ means in-place loading to hard coded #-shop-embedded
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