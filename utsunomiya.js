getMeteorologicalAgency();
getTemp();

function getMeteorologicalAgency() {
  const url = "https://weather.tsukumijima.net/api/forecast/city/090010";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      forecastDetails.innerHTML = data.description.text;

      var element = document.getElementById("weatherForecast");
      var fragment = new DocumentFragment();

      for (var i = 0; i < 3; i++) {
        weatherForecastDate = data.forecasts[i].dateLabel + "の予想天気";
        weatherForecastIcon =
          "<img class='text-center' src='" + data.forecasts[i].image.url + "'>";
        weatherForecast = data.forecasts[i].image.title;

        var text =
          '          <article class="max-w-xs rounded overflow-hidden shadow-lg my-2 mr-5">                    <p class="text-grey-darker text-base text-center mx-2 mt-3" >' +
          weatherForecastDate +
          '                    </p>                    <div class="px-6 py-4">                        <div  class="mx-auto text-center">' +
          weatherForecastIcon +
          '                        </div>                        <p class="text-center font-bold text-3xl mb-2" >' +
          weatherForecast +
          "</p>                                           </div>                </article>";

        fragment.append(element.insertAdjacentHTML("afterbegin", text));
      }

      //   element.append(fragment);
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

getIss();
// getUtsunomiyaNews();
const longitude = 139.92874; //経度
const latitude = 36.54971; //緯度

function getIss() {
  const url = "http://api.open-notify.org/iss-pass.json?lat=35.691&lon=139.71";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log("iss");
      console.log(data);
    });
}

getJapanNews();
getUtsunomiyaNews();

function getJapanNews() {
  var url =
    "https://newsapi.org/v2/top-headlines?country=jp&apiKey=5b81e1255abd463884362f73f015cb9e";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var element = document.getElementById("jpNews");
      var fragment = new DocumentFragment();
      articles = data.articles;
      var i = 0;
      for (const article of articles) {
        jpImageUrl = article[i][urlToImage];
        jpTitle = article[i][title];
        jpSource = article[i][source][name];
        jpDate = article[i][publishedAt];
        jpArticleLink = article[i][url];
        var text =
          '<div class="max-w-md w-full lg:flex">    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"    style="background-image: url(' +
          jpImageUrl +
          ')" >    </div>    <div    class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">        <div class="mb-8">            <div class="text-black font-bold text-xl mb-2" >' +
          jpTitle +
          '</div>            <p class="text-grey-darker text-base" id="jpArticle">' +
          jpArticle +
          '</p>        </div>        <div class="text-sm">            <p class="text-grey-dark ">出典:' +
          jpSource +
          '</p>            <p class="text-grey-dark ">日付:' +
          jpDate +
          '</p>            <div class="m-3">                <a href="' +
          jpArticleLink +
          '"                    class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">                    <span class="mr-2">記事へ飛ぶ</span>                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">                        <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>                    </svg>                </a>            </div>        </div>    </div></div>';
        fragment.appendChild(element.insertAdjacentHTML("afterbegin", text));
        i++;
      }

      element.appendChild(fragment);
    });
}

function getUtsunomiyaNews() {
  var url =
    "https://newsapi.org/v2/everything?q=宇都宮a&apiKey=5b81e1255abd463884362f73f015cb9e";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var element = document.getElementById("utsunomiyaNews");
      var fragment = new DocumentFragment();
      articles = data.articles;
      var i = 0;
      for (const article of articles) {
        jpImageUrl = article[i][urlToImage];
        jpTitle = article[i][title];
        jpSource = article[i][source][name];
        jpDate = article[i][publishedAt];
        jpArticleLink = article[i][url];
        var text =
          '<div class="max-w-md w-full lg:flex">    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"    style="background-image: url(' +
          jpImageUrl +
          ')" >    </div>    <div    class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">        <div class="mb-8">            <div class="text-black font-bold text-xl mb-2" >' +
          jpTitle +
          '</div>            <p class="text-grey-darker text-base" id="jpArticle">' +
          jpArticle +
          '</p>        </div>        <div class="text-sm">            <p class="text-grey-dark ">出典:' +
          jpSource +
          '</p>            <p class="text-grey-dark ">日付:' +
          jpDate +
          '</p>            <div class="m-3">                <a href="' +
          jpArticleLink +
          '"                    class="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">                    <span class="mr-2">記事へ飛ぶ</span>                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">                        <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>                    </svg>                </a>            </div>        </div>    </div></div>';
        fragment.appendChild(element.insertAdjacentHTML("afterbegin", text));
        i++;
      }

      element.appendChild(fragment);
    });
}
