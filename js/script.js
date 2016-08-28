// document.ready
$(function () {
    $('#get-sthlm').get('http://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=febb6f8b574869296fae74debbb6d211&units=metric', function (data) {

    });
    $('#get-uk').get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=febb6f8b574869296fae74debbb6d211&units=metric', function (data) {

    });

});