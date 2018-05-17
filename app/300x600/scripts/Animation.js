var app = app || {};


app.Animation = (function () {
    var t = TweenMax;
    var tl1 = new TimelineMax();
    var tl2 = new TimelineMax();

    var screen = document.getElementById('screen');
    var device = document.getElementById('device');
    var kernel1 = document.getElementById('kernel1');
    var kernel2 = document.getElementById('kernel2');
    var kernel3 = document.getElementById('kernel3');
    var kernel4 = document.getElementById('kernel4');


    var txt1 = document.getElementById('txt1');
    var txt1b = document.getElementById('txt1b');
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
            TweenMax.to(light, .5, {x: -260});
        });

        buttonExit.addEventListener('mouseout', function () {
            TweenMax.set(light, {x: 130});
        });


    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {
        tl1.from(device, .5, {x: -200, y: 600, ease: Cubic.easeIn})

            .from(kernel1, 1.25, {y: -600, rotation: -180, ease: Cubic.easeIn}, "+=.2")
            .from(kernel2, 1.25, {y: -600, rotation: -180, ease: Cubic.easeIn}, "-=.75")
            .from(kernel3, 1.25, {y: -600, rotation: -180, ease: Cubic.easeIn}, "-=.65")
            .from(kernel4, 1.25, {y: -600, rotation: -180, ease: Cubic.easeIn}, "-=.75");

        tl2.from(txt1, .5, {x: 300, ease: Cubic.easeOut}, "+=.5")
            .to(txt1b, .5, {x: 125, clip:"rect(0px,226px,28px,0px)", ease: Cubic.easeInOut}, "+=1.5")
            .to(screen, .2, {opacity:1}, "+=.5")
            .to(txt1, .5, {x: -300, ease: Cubic.easeIn}, "+=2")

            .from(txt3, .5, {x: 300, ease: Cubic.easeOut})
            .to(txt3, .5, {x: -300, ease: Cubic.easeIn}, "+=3")

            .from(txt4, .5, {x: 300, ease: Cubic.easeOut})
            .from(cta, .5, {x: 300, ease: Cubic.easeOut}, "-=.25")
            .to(light, .5, {x: -260})
            .set(light, {x: 130});

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
