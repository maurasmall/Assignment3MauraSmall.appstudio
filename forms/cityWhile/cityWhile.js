let cityName = ""
let cities = []
i=0
let doContinue = confirm(`Do you want to add another city? OK for Yes or Cancel for No`)
while (doContinue) {
    cityName = prompt("Enter new city name:")
    cities.push(cityName)
    doContinue = confirm("Do you want to add another city? OK for Yes or Cancel for No")
  }

while ( i < cities.length) {
  cities[i] = cities[i].toLowerCase()
    console.log(`${cities[i]}`)
    i++
    }


























/*
let cities = ["Omaha"]
let cityName = ""
btnSubmit.onclick=function() {
  let cityName = inptCity.value
  for (i = 0; i < cities.length; i++)  {
    while (btnSubmit.onclick) {
      cities.push(cityName)
      }
      console.log(`${cities}`)
    }
    }
  
if (cities[i] == cityName) {
   lblMessage.value =  "City already added."  
}
else { 
  cities.push()
  lblMessage.value = cityName + " has been added."
  }
  } 
  }
*/


