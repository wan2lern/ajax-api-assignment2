// document.ready
$(function () {
    var openAppID = 'febb6f8b574869296fae74debbb6d211&units',
        OpenWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?',
        units = '',
        temp = '';

    $('#get-weather').click(function (e) {
        e.preventDefault();
        prepare();
    });

    var prepare = function () {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        units = 'metric';
        city = $('#city').val();
        if (city && city != '') {
            city = city.trim();
            getData(city, OpenWeatherURL, openAppID, today, units);
        } else {
            $('#city').attr('placeholder', 'Select a city')
        }
    }

    // AJAX GET
    function getData(cityName, openUrl, appId, time, unitsDeg) {
        var now = time;
        // 
        $.get(openUrl + 'q=' + cityName + '&units=' + unitsDeg + '&appid=' + appId, function (data) {
                // console.log('Weather in ' + data.name + ' is ' + data.weather[0].main + ', ' + data.weather[0].description);
                // console.log(data);
                temp += '<div class="weather-card">'
                temp += '<h1>Weather in ' + data.name + '</h1>';
                temp += '<h2>' + data.weather[0].main + ', ' + data.weather[0].description + '</h2>';
                temp += '<img id="icon" src="img/' + data.weather[0].icon + '.png" alt="Weather in ' + data.name + ' is ' + data.weather[0].main + ', ' + data.weather[0].description + '" />';
                if (data.weather[1]) {
                    temp += '<h2>Followed by ' + data.weather[1].main + ', ' + data.weather[1].description + '</h2>';
                    temp += '<img id="icon" src="img/' + data.weather[1].icon + '.png" alt="Weather in ' + data.name + ' is ' + data.weather[1].main + ', ' + data.weather[1].description + '" />';
                }
                temp += '<p>' + now + '</p>';
                temp += '<p>Temperature is ' + data.main.temp + ' deg Celsius</p>';
                temp += '<p>Min temp is ' + data.main.temp_min + ' deg Celsius</p>';
                temp += '<p>Max temp is ' + data.main.temp_max + ' deg Celsius</p>';
                temp += '<p>Windspeed is ' + data.wind.speed + ' meters per second</p>';
                temp += '</div>';
                // load in result
                $('#out').html(temp);
            })
            .done(function () {
                console.log("AJAX call done");
            })
            .fail(function () {
                console.log('ERROR!!!');
                $('#out').html('<h1 class="error">ERROR!!!</h1>');
            })
            .always(function () {
                console.log("Finished");
            });
    }
});