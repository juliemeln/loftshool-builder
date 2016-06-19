window.onload = function () {
    var radius = 3, // set the radius of the circle
        circumference = 2 * radius * Math.PI;

    var els = document.querySelectorAll('circle');
    Array.prototype.forEach.call(els, function (el) {
        el.setAttribute('stroke-dasharray', circumference + 'em');
        el.setAttribute('r', radius + 'em');
    });

    document.querySelector('.radial-progress-center').setAttribute('r', (radius - 0.01 + 'em'));

    document.querySelector('input[type="range"]').addEventListener('change', function (a) {

        var offset = circumference * event.target.value + 'em';

        document.querySelector('.radial-progress-cover').setAttribute('stroke-dashoffset', offset);

    });

}; 

