var inputs = document.getElementsByTagName("li");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("click", myFunction);
}

	var BASE_URL = "http:/api.openweathermap.org/data/2.5/weather?id=";
	var API_KEY = "08ee6fabcfdd7d803fc788f9e1093641";

function myFunction() {
    var new_city = this.value;
    console.log(new_city); 

    if (new_city.lenght === 0) {
			return;
		}
		else {

			var URI = BASE_URL + new_city + "&appid=" + API_KEY;
			var XHR = new XMLHttpRequest();
			XHR.open("GET", URI, true);
			XHR.timeout = 2000;

			XHR.send();

			XHR.onreadystatechange = function() {
				if ((XHR.readyState === 4) && (XHR.status === 200)) {
					var data = JSON.parse(XHR.responseText);
					console.log(data);
					main.innerHTML = "<h2> Температура: " + (data.main.temp - 273.15).toFixed(0) + "<sup>0</sup/>C</h2>";
					main.innerHTML += "<h2> Вологість: " + data.main.humidity + " %</h2>";
					main.innerHTML += "<h2> Атм. тиск: " + (0.7500616827 * data.main.pressure).toFixed(2) + " мм. Рт. Ст.</h2>";
				}
			}
		}
	}

