// document.ready
$(function () {
    var appID = 'febb6f8b574869296fae74debbb6d211&units';
    var OpenWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?';
    var prepare = function () {
        var city = $('#city').val();
        if (city && city != '') {
            city = 'q=' + city.trim();
            getData(city, OpenWeatherURL, appID);
        }
    }

    $('#get-weather').on('click', function (e) {
        e.preventDefault();
        $.get('http://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=' + appid + '=metric', function (data, status) {
            if (status == 'success') {

                console.log(data);
            } else {

            }
        });
    });
});