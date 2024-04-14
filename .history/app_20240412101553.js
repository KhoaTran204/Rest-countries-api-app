let countries;
// fetch("https://restcountries.com/v3.1/all")
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
fetch("https://restcountries.com/v3.1/all").then((res) => {
  res
    .json()
    .then((data) => initialize(data))
    .catch((err) => console.log("Lỗi: ", err));
});
function initialize(countriesData) {
  countries = countriesData;
  let options = "";
  for (let i = 0; i < countries.length; i++) {
    options +=
      '<option value="${countries[i].alpha3Code}">${countries[i].name}</option>';
  }
  document.getElementById("countries").innerHTML = options;
  //   console.log("Capital of " + countries[0].name + "is " + countries[0].capital);
}
