# ajax-api-assignment2
Arbeta med AJAX och öppna API:er

# Jobba med API:er
- Gör en .get() som hämtar en eller flera objekt från mina test-apier. Använd antingen det simplare https://bakverksAPI.herokuapp.com/bakverk eller https://company-generator. herokuapp.com/company
- Gör en .post() som postar ditt eget objekt till någon av api:erna
- Gör slutligen två .ajax(), en som hämtar objekt från API:erna och en som hämtar objekt.

# Jag valde OpenWeatherMap API
- Jag hämtar data med jQuery $.get()
- Visar väder, min och max temperatur + temperatur
- Visar väderikon beroende av respons

## Problem
Jag stötte på problem med att välja vilken enhet som temperaturen skulle visas i. 
- Ibland visade den standard?, metric = Celsius (vilket jag ville ha), eller imperial.
