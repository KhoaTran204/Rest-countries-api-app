console.log(1);
fetch("https://restcountries.com/v3.1/all")
  .then(function (res) {
    //   console.log(res.json());
    console.log(2);
    return res.json();
  })
  .then(function (data) {
    // console.log(data);
    console.log(3);
  });
console.log(4);
