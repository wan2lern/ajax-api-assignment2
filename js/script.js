// document.ready
$(function () {
    var openAppID = 'febb6f8b574869296fae74debbb6d211&units',
        OpenWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?',
        temp = '',
        icon = '',
        mainWeather = '',
        weather = '',
        out = '',
        city = '';

    $('#get-weather').click(function (e) {
        e.preventDefault();
        prepare();
    });

    var prepare = function () {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        city = $('#city').val();
        if (city && city != '') {
            city = city.trim();
            getData(city, OpenWeatherURL, openAppID, today);
        }
    }

    function getData(cityName, openUrl, appId, time) {
        var now = time;
        // Assign handlers immediately after making the request,
        // and remember the jqxhr object for this request
        var jqxhr = $.get(openUrl + 'q=' + cityName + '&units=metric' + '&appid=' + appId, function (data) {
                // console.log('Weather in ' + data.name + ' is ' + data.weather[0].main + ', ' + data.weather[0].description);
                temp += '<div class="weather-card">'
                temp += '<h2>Weather in ' + data.name + ' is ' + data.weather[0].main + ', ' + data.weather[0].description + '</h2>';
                temp += '<img id="icon" src="img/' + data.weather[0].icon + '.png" alt="Weather in ' + data.name + ' is ' + data.weather[0].main + ', ' + data.weather[0].description + '" />';
                temp += '<p>' + now + '</p>';
                temp += '<p>Temperature is ' + data.main.temp + ' deg Celsius</p>';
                temp += '<p>Windspeed is ' + data.wind.speed + 'm/s</p>';
                temp += '</div>';
                // load in result
                $('#out').html(temp);
            })
            .done(function () {
                console.log("AJAX call done");
            })
            .fail(function () {
                console.log("ERROR!!!");
            })
            .always(function () {
                console.log("Finished");
            });
    }
});