const longitude = 139.92874; //経度
const latitude = 36.54971; //緯度
console.log("start");
let i = 0;
function allDo() {
  if (i == 0) {
    console.log("clicked");
    // test();
    getMeteorologicalAgency();
    getTemp();
    getYahooWeather();
    getCOVID();
    getKoyomi();
    getTrainDelay();
    i++;
  }
}
function test() {
  const url =
    "https://news.google.com/news/rss/headlines/section/geo/utsunomiya";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("test");
      console.log(data);
    });
}
function getKoyomi() {
  const url =
    "https://api.sunrise-sunset.org/json?lat=" + latitude + "&lng=" + longitude;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log("koyomi");
      // console.log(data);
      var utcSunrise = data.results.sunrise;
      var jstSunriseHour = Number(utcSunrise.substr(0, 1)) - 3;
      var jstSunriseMinute = utcSunrise.substr(2, 2);
      var jstSunriseSecond = utcSunrise.substr(5, 2);
      sunrise.innerHTML =
        jstSunriseHour +
        "時" +
        jstSunriseMinute +
        '分<span class="text-xs">' +
        jstSunriseSecond +
        "秒</span>";
      // ---------------------------------
      var utcnautical_twilight_begin = data.results.nautical_twilight_begin;
      var jstnautical_twilight_beginHour =
        Number(utcnautical_twilight_begin.substr(0, 1)) - 3;
      var jstnautical_twilight_beginMinute = utcnautical_twilight_begin.substr(
        2,
        2
      );
      var jstnautical_twilight_beginSecond = utcnautical_twilight_begin.substr(
        5,
        2
      );
      nautical_twilight_begin.innerHTML =
        jstnautical_twilight_beginHour +
        "時" +
        jstnautical_twilight_beginMinute +
        '分<span class="text-xs">' +
        jstnautical_twilight_beginSecond +
        "秒</span>";
      // ---------------------------------
      var utccivil_twilight_begin = data.results.civil_twilight_begin;
      var jstcivil_twilight_beginHour =
        Number(utccivil_twilight_begin.substr(0, 1)) - 3;
      var jstcivil_twilight_beginMinute = utccivil_twilight_begin.substr(2, 2);
      var jstcivil_twilight_beginSecond = utccivil_twilight_begin.substr(5, 2);
      civil_twilight_begin.innerHTML =
        jstcivil_twilight_beginHour +
        "時" +
        jstcivil_twilight_beginMinute +
        '分<span class="text-xs">' +
        jstcivil_twilight_beginSecond +
        "秒</span>";
      // ---------------------------------
      var utccivil_twilight_end = data.results.civil_twilight_end;
      var jstcivil_twilight_endHour =
        Number(utccivil_twilight_end.substr(0, 1)) + 9;
      var jstcivil_twilight_endMinute = utccivil_twilight_end.substr(2, 2);
      var jstcivil_twilight_endSecond = utccivil_twilight_end.substr(5, 2);
      civil_twilight_end.innerHTML =
        jstcivil_twilight_endHour +
        "時" +
        jstcivil_twilight_endMinute +
        '分<span class="text-xs">' +
        jstcivil_twilight_endSecond +
        "秒</span>";
      // ---------------------------------
      var utcSunset = data.results.sunset;
      var jstSunsetHour = Number(utcSunset.substr(0, 1)) + 9;
      var jstSunsetMinute = utcSunset.substr(2, 2);
      var jstSunsetSecond = utcSunset.substr(5, 2);
      sunset.innerHTML =
        jstSunsetHour +
        "時" +
        jstSunsetMinute +
        '分<span class="text-xs">' +
        jstSunsetSecond +
        "秒</span>";
      // ---------------------------------
      var utcnautical_twilight_end = data.results.nautical_twilight_end;
      var jstnautical_twilight_endHour =
        Number(utcnautical_twilight_end.substr(0, 1)) + 9;
      var jstnautical_twilight_endMinute = utcnautical_twilight_end.substr(
        2,
        2
      );
      var jstnautical_twilight_endSecond = utcnautical_twilight_end.substr(
        5,
        2
      );
      nautical_twilight_end.innerHTML =
        jstnautical_twilight_endHour +
        "時" +
        jstnautical_twilight_endMinute +
        '分<span class="text-xs">' +
        jstnautical_twilight_endSecond +
        "秒</span>";
    });
}

function getCOVID() {
  const url = "https://covid19-japan-web-api.now.sh/api/v1/prefectures";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log("covid");
      // console.log(data);
      // 感染者合計
      infectTotigiCOVIDall.innerHTML = data[8].cases;
      infectIbarakiCOVIDall.innerHTML = data[7].cases;
      infectSaitamaCOVIDall.innerHTML = data[10].cases;
      infectTokyoCOVIDall.innerHTML = data[12].cases;
      //死者合計
      deathAllTotigiCOVIDall.innerHTML = data[8].deaths;
      deathAllIbarakiCOVIDall.innerHTML = data[7].deaths;
      deathAllSaitamaCOVIDall.innerHTML = data[10].deaths;
      deathAllTokyoCOVIDall.innerHTML = data[12].deaths;
      //JU JN NK TohokuBullet TobuU

      // badallTotigiCOVIDtoday;
      // deathAllTotigiCOVIDtoday;
      // hospitalTotigiCOVIDtoday;
    });
}
//列車遅延
function getTrainDelay() {
  const url = "https://tetsudo.rti-giken.jp/free/delay.json";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //JU JN NK TohokuBullet TobuU
    });
}

//気象庁天気
function getMeteorologicalAgency() {
  const url = "https://weather.tsukumijima.net/api/forecast/city/090010";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      forecastDetails.innerHTML =
        '<h3 class="text-center text-lg   mt-3 mb-1">宇都宮地方気象台より</h3>' +
        '<p class="mb-2">' +
        data.description.text +
        "</p>";

      let element = document.getElementById("weatherForecast");
      let fragment = new DocumentFragment();

      for (let i = 0; i < 3; i++) {
        let weatherForecastDate = data.forecasts[i].dateLabel + "の予想天気";
        let weatherForecastIcon =
          "<img class='text-center' src='" + data.forecasts[i].image.url + "'>";
        let weatherForecast = data.forecasts[i].image.title;
        //当日の最高最低気温はnullなので三項演算子で処理！！
        let weatherTempMin =
          data.forecasts[i].temperature.min == null
            ? "--"
            : data.forecasts[i].temperature.min.celsius;
        let weatherTempMax =
          data.forecasts[i].temperature.max == null
            ? "--"
            : data.forecasts[i].temperature.max.celsius;
        let text =
          '          <article class="max-w-xs rounded overflow-hidden shadow-lg my-2 mr-5 bg-white">                    <p class="text-grey-darker text-base text-center mx-2 mt-3" >' +
          weatherForecastDate +
          '                    </p>                    <div class="px-6 py-4">                        <div  class="mx-auto text-center">' +
          weatherForecastIcon +
          '                        </div>                        <p class="text-center font-bold text-3xl mb-2" >' +
          weatherForecast +
          '</p><div class="flex justify-around"><p class="text-sm text-blue-500">' +
          weatherTempMin +
          '度</p><p class="text-sm text-red-500">' +
          weatherTempMax +
          "度</p></div>                                          </div>                </article>";

        fragment.append(element.insertAdjacentHTML("afterbegin", text));
      }

      //   element.append(fragment);
    });
}

//ヤフー天気より降水量取得
function getYahooWeather() {
  //↑宇大陽東の噴水の座標
  // 35.663613みたいに
  const willnotRain =
    ' <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"width="24">  <path d="M0 0h24v24H0z" fill="none" />  <circle cx="12" cy="12" r="10" /></svg>';
  const willRain =
    '  <svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"  width="24">  <path d="M0 0h24v24H0V0z" fill="none" />  <path      d="M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>';

  const makeArrow =
    ' <div><svg class="mx-auto" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"    width="24">    <path d="M0 0h24v24H0z" fill="none" />    <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z" /></svg></div>';

  const url =
    "https://map.yahooapis.jp/weather/V1/place?coordinates=" +
    longitude +
    "," +
    latitude +
    "&output=json&appid=dj00aiZpPTJuSTJJOWF2anhrZiZzPWNvbnN1bWVyc2VjcmV0Jng9OWQ-";
  // https://map.yahooapis.jp/weather/V1/place?coordinates=139.732293,35.663613&output=json&appid=dj00aiZpPTJuSTJJOWF2anhrZiZzPWNvbnN1bWVyc2VjcmV0Jng9OWQ-

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      let element = document.getElementById("innerYahooWeather");
      let fragment = new DocumentFragment();
      for (let i = 6; i > -1; i--) {
        // let nameValue = data["Feature"][i]["Name"];
        let rawRainfallValue =
          data["Feature"][0]["Property"]["WeatherList"]["Weather"][i][
            "Rainfall"
          ];
        let rawDataValue =
          data["Feature"][0]["Property"]["WeatherList"]["Weather"][i]["Date"];
        let weatherIcon = 0;
        if (rawRainfallValue == 0) {
          weatherIcon = willnotRain;
        } else {
          weatherIcon = willRain;
        }
        let outputRainfallValue = rawRainfallValue + "mm/h ";
        let outputDataValue =
          rawDataValue.substr(-4, 2) + "時" + rawDataValue.substr(-2) + "分";
        let arrowIcon = "";
        if (i != 6) {
          arrowIcon = makeArrow;
        }
        let text =
          '<div class="w-40 h-20 flex flex-col justify-center px-5"><p class="text-sm text-center">' +
          outputDataValue +
          "</p>" +
          weatherIcon +
          '<p class="text-sm text-center">' +
          outputRainfallValue +
          "</p></div>" +
          arrowIcon;
        fragment.append(element.insertAdjacentHTML("afterbegin", text));
      }
    });
}

//最低気温と最高気温取得
function getTemp() {
  //宇都宮市明保野町　宇都宮地方気象台
  const url = "https://jjwd.info/api/v2/station/41277";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      maxTempValue.innerHTML = data.station.max_temp.temp_daily_max + "度";
      maxTempTime.innerHTML =
        "観測時刻:" +
        data.station.max_temp.temp_daily_max_time_hour +
        "時" +
        data.station.max_temp.temp_daily_max_time_minute +
        "分";
      minTempValue.innerHTML = data.station.min_temp.temp_daily_min + "度";
      minTempTime.innerHTML =
        "観測時刻:" +
        data.station.min_temp.temp_daily_min_time_hour +
        "時" +
        data.station.min_temp.temp_daily_min_time_minute +
        "分";
      //   nowTempValue.innerHTML = data.station.min_temp.temp_daily_min + "度";
      //   nowTempTime.innerHTML =
      //     "観測時刻:" +
      //     data.station.min_temp.temp_daily_min_time_hour +
      //     "時" +
      //     data.station.min_temp.temp_daily_min_time_minute +
      //     "分";
    });
}
