fetch("https://restcountries.com/v3.1/all")
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (data) {
    console.log(data);
    initialize(data);
  })
  .catch(function (err) {
    console.log("Lỗi: ", err);
  });

function initialize(countriesData) {
  console.log(countriesData);
}
