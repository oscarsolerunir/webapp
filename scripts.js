document.addEventListener('DOMContentLoaded', () => {

  const loadCoworkings = (coworkings) => {
    const image = coworkings.filter(coworking => coworking.imagen)
    console.log(image)
  }

  fetch("https://my-json-server.typicode.com/oscarsolerunir/coworkings-spain/coworkings")
  .then(res => res.json())
  .then(coworkings => {  
    loadCoworkings(coworkings)
  })
})