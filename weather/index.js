(function() {

	var BASE_URL = "http:/api.openweathermap.org/data/2.5/weather?id=";
	var API_KEY = "08ee6fabcfdd7d803fc788f9e1093641";

	city.addEventListener("change", function() {
		if (city.value.lenght === 0) {
			return;
		}
		else {

			var URI = BASE_URL + city.value + "&appid=" + API_KEY;
			var XHR = new XMLHttpRequest();
			XHR.open("GET", URI, true);
			XHR.timeout = 2000;

			XHR.send();

			XHR.onreadystatechange = function() {
				if ((XHR.readyState === 4) && (XHR.status === 200)) {
					var data = JSON.parse(XHR.responseText);
					console.log(data);
					main.innerHTML = "<h1> Температура: " + (data.main.temp - 273.15) + "<sup>0</sup/>C</h1>";
					main.innerHTML += "<h1> Вологість: " + data.main.humidity + " %</h1>";
					main.innerHTML += "<h1> Атм. тиск: " + (0.7500616827 * data.main.pressure).toFixed(2) + " мм. Рт. Ст.</h1>";
				}

			}
			XHR.onerror = function(e) {
				window.alert("Problem!!!")
			}

			XHR.ontimeout = function(e) {
				window.alert("Something Wrong")
			}

		}
	}, false);

}());