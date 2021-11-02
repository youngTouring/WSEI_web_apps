"use strict";
exports.__esModule = true;
exports.WeatherCardBuilder = void 0;
var WeatherCardBuilder = /** @class */ (function () {
    function WeatherCardBuilder(city) {
        this.city = city;
    }
    WeatherCardBuilder.prototype.getIcon = function (code) {
        return "http://openweathermap.org/img/wn/" + code + "@2x.png";
    };
    Object.defineProperty(WeatherCardBuilder.prototype, "Title", {
        get: function () {
            var title = document.createElement("span");
            title.classList.add("title");
            title.textContent = this.city.name;
            return title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeatherCardBuilder.prototype, "WeatherInfo", {
        get: function () {
            var info = document.createElement("div");
            info.classList.add("weatherInfo");
            var img = document.createElement("img");
            img.src = this.getIcon(this.city.weather[0].icon);
            var weather = document.createElement("span");
            weather.textContent = this.city.weather[0].main;
            info.append(img);
            info.append(weather);
            return info;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WeatherCardBuilder.prototype, "CardContent", {
        get: function () {
            var content = document.createElement("div");
            content.classList.add("content");
            var temp = document.createElement("span");
            temp.textContent = "Temp: " + this.city.main.temp;
            var humidity = document.createElement("span");
            humidity.textContent = "Humidity: " + this.city.main.humidity;
            var pressure = document.createElement("span");
            pressure.textContent = "Pressure: " + this.city.main.pressure;
            content.append(temp);
            content.append(humidity);
            content.append(pressure);
            return content;
        },
        enumerable: false,
        configurable: true
    });
    WeatherCardBuilder.prototype.build = function () {
        var card = document.createElement("div");
        card.classList.add("weatherCard");
        card.id = String(this.city.id);
        card.append(this.Title);
        card.append(this.WeatherInfo);
        card.append(this.CardContent);
        return card;
    };
    return WeatherCardBuilder;
}());
exports.WeatherCardBuilder = WeatherCardBuilder;
