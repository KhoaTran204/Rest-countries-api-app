const countrieslist = document.getElementById("countries");
let countries;
// fetch("https://restcountries.com/v2/all")
//   .then(function (res) {
//     console.log(res);
//     return res.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     initialize(data);
//   })
//   .catch(function (err) {
//     console.log("Lỗi: ", err);
//   });
fetch("https://restcountries.com/v2/all").then((res) => {
  res
    .json()
    .then((data) => initialize(data))
    .catch((err) => console.log("Lỗi: ", err));
});
function initialize(countriesData) {
  countries = countriesData;
  let options = "";
  //   for (let i = 0; i < countries.length; i++) {
  //     options += `<option value="${countries[i].alpha3Code}">${countries[i].name}</option>`;
  //   }
  countries.forEach(
    (country) =>
      (options += `<option value="${country.alpha3Code}">${country.name}</option>`)
  );
  //   document.getElementById("countries").innerHTML = options;
  //   document.querySelector("countries").innerHTML = options;
  countrieslist.innerHTML = options;
  displayCountryInfo("AFG");

  //   console.log(
  //     "Capital of " + countries[0].alpha2Code + "is " + countries[0].capital
  //   );
}

function displayCountryInfo(countryByAlpha3Code) {
  const countryData = countries.find(
    (country) => country.alpha3Code === countryByAlpha3Code
  );
  console.log(countryData);
  document.getElementById("capital").innerHTML = countryData.capital;
  document.getElementById(
    "capital"
  ).innerHTML = `+ ${countryData.callingCodes[0]}`;
  document.getElementById("capital").innerHTML = countryData.capital;
}
