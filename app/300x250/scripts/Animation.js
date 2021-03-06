var app = app || {};


app.Animation = (function () {
    var t = TweenMax;
    var tl1 = new TimelineMax();
    var tl2 = new TimelineMax();

    var device = document.getElementById('device');
    var kernel1 = document.getElementById('kernel1');
    var kernel2 = document.getElementById('kernel2');
    var kernel3 = document.getElementById('kernel3');
    var kernel4 = document.getElementById('kernel4');
    var kernel5 = document.getElementById('kernel5');
    var kernel6 = document.getElementById('kernel6');
    var kernel7 = document.getElementById('kernel7');
    var kernel8 = document.getElementById('kernel8');

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
            TweenMax.to(light, .5, {x:-200});
        });

        buttonExit.addEventListener('mouseout', function () {
            TweenMax.set(light, {x:100});
        });



    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {
        tl1.from(device, .5, {x: -80, y: 300, ease: Cubic.easeIn})

            // .set(kernel1, {visibility: 'visible'})
            // .set(kernel2, {visibility: 'visible'})
            // .set(kernel3, {visibility: 'visible'})
            // .set(kernel4, {visibility: 'visible'})
            //
            // .to(kernel1, .5, {y: -150, rotation: -180, ease: Cubic.easeOut})
            // .to(kernel2, .5, {x: -50, y: -150, rotation: -180, ease: Cubic.easeOut}, "-=.5")
            // .to(kernel3, .5, {x: -115, y: -150, rotation: -180, ease: Cubic.easeOut}, "-=.5")
            // .to(kernel4, .5, {x: -150, y: -150, rotation: -180, ease: Cubic.easeOut}, "-=.5")

            .from(kernel5, 1, {y: -250, rotation: -180, ease: Cubic.easeIn},"+=.2")
            .from(kernel6, 1, {y: -250, rotation: -180, ease: Cubic.easeIn}, "-=.75")
            .from(kernel7, 1, {y: -250, rotation: -180, ease: Cubic.easeIn}, "-=.65")
            .from(kernel8, 1, {y: -250, rotation: -180, ease: Cubic.easeIn}, "-=.75");

        tl2.from(txt1, .5, {x: 300, ease: Cubic.easeOut},"+=.5")
            .to(txt1, .5, {x: -300, ease: Cubic.easeIn},"+=2")

            .from(txt2, .5, {x: 300, ease: Cubic.easeOut})
            .to(txt2, .5, {x: -300, ease: Cubic.easeIn},"+=2")

            .from(txt3, .5, {x: 300, ease: Cubic.easeOut})
            .to(txt3, .5, {x: -300, ease: Cubic.easeIn},"+=2")

            .from(txt4, .5, {x: 300, ease: Cubic.easeOut})
            .from(cta, .5, {x: 300, ease: Cubic.easeOut}, "-=.25")
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
