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

function  padTo2Digits(num) {
  return num.toString().padStart(2, '0')
}

function formatDate(date = new Date()) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}

