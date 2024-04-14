fetch("https://restcountries.com/v3.1/all")
  .then(function (res) {
    //   console.log(res.json());
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  });
