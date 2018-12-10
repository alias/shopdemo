// this can be used to adjust the location of the dependencies
// (add oly whats needed; it will override the default)
// use this to hook into the boostrap process

require(["jquery", "oo"],
    function ($, oo) {


          oo.addMixins({
            ".oo-navi-image-name": "h3"        // to use bootstrap sizes
          });

          oo.setStyleBase("shop2018");         // define the style used here

          oo.configureComponents({
            "oo-shop-page": "index.jsp",
            "oo-cart-page": "cart.jsp",
            "oo-logon-page": "logon.jsp",
            "oo-profile-page": "profile.jsp",
            "oo-date-page": "date.jsp",
            "oo-loggedon-page": "index.jsp",
            "oo-loggedout-page": "index.jsp",
            "oo-register-page": "profile.jsp",
            "oo-shop-zoom-titleimg": true ,
              "oo-shop-titleprefix": "->",

              "oo-profile-tabs-strict": false,       // finish one form first
              "oo-skip-locate": "false",             // only for non-regional shops
              "oo-logonmode": "email1st",            // start with email when logon
              "oo-profile-quickorder": true,         // makes last step in reg to go to cart; implies strict
              "Xoo-cartmode": "cart" ,               // cartmode clears after submitting and does not preload the cart for date
              "Xoo-emptycarturl": "index.jsp",
              "oo-profile-aboedit": true             // default to be
        });

        function appInit() {      // referenced in the init() call later
            //$("#oo-shop .oo-select-sub-0").show()
            console.log("************************************* Shop scripts loaded and page was processed.");
            $("#std-loading").fadeOut();
            // code to run AFTER shop initialization
        }
        // place code here that should run BEFORE shop initalization
        oo.initWeb(appInit, false, shopid,false);
    }
);