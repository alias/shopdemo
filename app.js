/* we use requirejs to load all dependencies */

// start configuration
var shop_main_pane = 'shop.html?path=';  // must be  relative page. If a page , add ?path=   // todo automatic


require(["jquery", "oo"],
    function ($, oo) {
        console.log("app init man")

        itemMouseOver();  // set up event handlers

        $('BDDY').on('oo-navi-changed', function() {
                       console.log("on navi")
                   });
        /*
        function appInit() {
           // oo.ui.addFlash("hola hola!")
           // oo.ui.addFlashError("hola hola!")
           // oo.ui.placeFlash();

        }
        */

       // oo.init(null, null, appInit, false, shopid, shop_main_pane);

    }
);

function itemMouseOver() {

    // enable selection options
    var $ooShop = $("#oo-shop");
    $ooShop.on("mouseenter", ".oo-shop-item-type-Item", function () {
        $ooShop.find(".oo-shop-item-select").fadeOut();
        $ooShop.find(".blend").hide();
        $(this).find(".oo-shop-item-select").fadeIn();
        $(this).find(".blend").show();
    });
    console.log("Added mouse events")

}

