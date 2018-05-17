var app = app || {};


app.Animation = (function () {
    var t = TweenMax;
    var tl1 = new TimelineMax();
    var tl2 = new TimelineMax();

    var device = document.getElementById('device');
    var legal = document.getElementById('legal');
    var kernel1 = document.getElementById('kernel1');
    var kernel2 = document.getElementById('kernel2');
    var kernel3 = document.getElementById('kernel3');
    var kernel4 = document.getElementById('kernel4');

    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    var txt3 = document.getElementById('txt3');
    var txt4 = document.getElementById('txt4');

    var light = document.getElementById('light');
    var cta = document.getElementById('cta');
    var buttonExit = document.getElementById('button-exit');


    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        // DO NOT EDIT: reveals banner once loaded
        t.set(banner, {opacity: 1});

        buttonExit.addEventListener('mouseover', function () {
            TweenMax.to(light, .5, {x:-260});
        });

        buttonExit.addEventListener('mouseout', function () {
            TweenMax.set(light, {x:130});
        });



    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {
        tl1.from(device, 1, {x: -80, y: 150, ease: Cubic.easeIn})

            .from(kernel1, 1, {y: -100, rotation: -90, ease: Cubic.easeIn},"+=.2")
            .from(kernel2, 1, {y: -130, rotation: -90, ease: Cubic.easeIn}, "-=.75")
            .from(kernel3, 1, {y: -100, rotation: -90, ease: Cubic.easeIn}, "-=.65")
            .from(kernel4, 1, {y: -100, rotation: -90, ease: Cubic.easeIn}, "-=.75");

        tl2.from(txt1, .5, {y: -90, ease: Cubic.easeOut},"+=.5")
            .to(txt1, .5, {y: 90, ease: Cubic.easeIn},"+=2")

            .from(txt2, .5, {y: -90, ease: Cubic.easeOut})
            .to(txt2, .5, {y: 90, ease: Cubic.easeIn},"+=2")

            .from(txt3, .5, {y: -90, ease: Cubic.easeOut})
            .to(legal, .5, {opacity:1},"-=.5")
            .to(device, .5, {x: -138, ease: Cubic.easeInOut},"-=.5")
            .from(cta, .5, {x: 750, ease: Cubic.easeOut},"-=.2")
            .to(light, .5, {x:-200})
            .set(light, {x:100});

    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize: initialize,
        start: start,
        stop: stop
    }

})();
