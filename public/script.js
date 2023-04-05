const startDate = document.getElementById("dateStart")
const endDate = document.getElementById("dateEnd")
const inputs = document.querySelectorAll("input, select")

startDate.onchange = () => {
    endDate.value = startDate.value
}

inputs.forEach(input => { 
  input.addEventListener( "invalid", event => { 
      input.classList.add("error")
    }, 
    false 
  ); 
});



