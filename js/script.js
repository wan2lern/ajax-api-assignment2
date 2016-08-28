// document.ready
$(function () {
    var openAppID = 'febb6f8b574869296fae74debbb6d211&units',
        OpenWeatherURL = 'http://api.openweathermap.org/data/2.5/weather?',
        temp = '',
        icon = '',
        mainWeather = '',
        weather = '',
        out = '';

    $('#get-weather').click(function (e) {
        e.preventDefault();
        prepare();
    });

    var prepare = function () {
        var city = $('#city').val();
        if (city && city != '') {
            city = city.trim();
            getData(city, OpenWeatherURL, openAppID);
        }
    }

    function getData(cityName, openUrl, appId) {
        // Assign handlers immediately after making the request,
        // and remember the jqxhr object for this request
        var jqxhr = $.get(openUrl + 'q=' + cityName + '&appid=' + appId, function (data) {
                console.log("success");
                console.log(data);
                console.log('Weather in ' + data.name + ' is ' + data.weather[0].main + ', ' + data.weather[0].description);
                temp += '<div class="weather-card">'
                temp += '<h2>Weather in ' + data.name + ' is ' + data.weather[0].main + ', ' + data.weather[0].description + '</h2>';
                temp += '<img id="icon" src="img/' + data.weather[0].icon + '.png" alt="Weather in ' + data.name + ' is ' + data.weather[0].main + ', ' + data.weather[0].description + '" />';
                temp += '</div>';
            })
            .done(function () {
                console.log("second success");
                $('#out').html(temp);
            })
            .fail(function () {
                console.log("error");
            })
            .always(function () {
                console.log("finished");
            });


        // Perform other work here ...

        // Set another completion function for the request above
        jqxhr.always(function () {
            // alert("second finished");
        });
    }
});