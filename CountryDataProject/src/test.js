
let data = fetch("https://restcountries.com/v3.1/all?fields=name,flags")
  .then(res => res.json()).then(data => data.forEach(element => {
    console.log(element.flags.png)
  }))

  

  