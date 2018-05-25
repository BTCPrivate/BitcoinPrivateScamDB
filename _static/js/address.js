window.addEventListener("load", function() {
    $.getJSON("https://explorer.btcprivate.org/address/" + $("h1").html(), function(data) {
        $("#balance").html((Math.round(data.result / (10e17) * 100000) / 100000) + ' BTCP');
        $.getJSON("https://api.coinmarketcap.com/v1/ticker/bitcoin-private/?convert=USD", function(val) {
            $("#value").html((Math.round((data.result / (10e17)) * val[0].price_usd * 100) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "$ (" + Math.round(val[0].price_usd * 100) / 100 + " USD/BTCP)");
        });
    });
});
