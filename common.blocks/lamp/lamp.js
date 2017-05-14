modules.define('jquery', function (provide, $) {
    window.$ = $;

    var mX, mY, distance,
        $element  = $('.lamp__light');

    $(document).mousemove(function(e) {
        mX = e.pageX;
        mY = e.pageY;
        distance = calculateDistance($element, mX, mY) + '';
        if(distance >= 1000)
            distance = 9;
        else if(distance >= 100)
            distance = distance.split('')[0];
        else
            distance = 0;
        $element.css({
            'opacity' : distance ? '0.' + (10 - distance) : 1
        });
    });
    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
    }
    provide($);
});