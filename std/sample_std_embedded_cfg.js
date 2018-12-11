// Example of an external followup code for the standard shop
// add code here that relies on the oo system being loaded an ready
oor.require(["oo"], function (oo) {
        console.log("oo library is loaded now, Version " + oo.VERSION);
        var $ = window.oojq;     // here we must use oo's jquery - because the event will be sent there
        $(document).on("oo-embedded-loaded", function() {
            // oo did process the page
            console.log("got embedded-is-loaded signal!")
        });
        $(document).on("oo-loaded", function() {
            // oo did process the page
            console.log("got sys-is-loaded signal!")
        })
    }
);