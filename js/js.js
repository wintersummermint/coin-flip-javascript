$(document).ready(function() {
    $.preloadImages = function() {
        for (var i = 0; i < arguments.length; i++) {
            $("<img />").attr("src", arguments[i]);
        }
    }

    $.preloadImages("http://www.coinnews.net/wp-content/uploads/2015/03/2015-W-Proof-Roosevelt-Silver-Dime-Obverse.jpg", "http://www.coinnews.net/wp-content/uploads/2015/03/2015-P-Reverse-Proof-Roosevelt-Silver-Dime-Reverse.jpg");
    $('h1').addClass('animated fadeInDown');

    function flipMe() {
        var flip = ["heads", "tails"];
        var side = flip[Math.floor(Math.random() * flip.length)];

        if (side == "heads") {
            setTimeout(function(){
                $("#regTitle").html("You Got " + side).addClass('animated pulse');
            },800);
            $('h1').addClass('animated pulse');
            $(".image").html('<img class="heads" src="http://www.coinnews.net/wp-content/uploads/2015/03/2015-W-Proof-Roosevelt-Silver-Dime-Obverse.jpg"/>');
            $('.heads').addClass('animated flip');
        } else {
            setTimeout(function(){
                $("#regTitle").html("You Got " + side);
            },800);
            $('h1').addClass('animated pulse');
            $(".image").html('<img class="tails" src="http://www.coinnews.net/wp-content/uploads/2015/03/2015-P-Reverse-Proof-Roosevelt-Silver-Dime-Reverse.jpg"/>');
            $('.tails').addClass('animated flip');
        }
    }

    $(".butts").click(flipMe);
});
