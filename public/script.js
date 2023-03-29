const startDate = document.getElementById("dateStart")
const endDate = document.getElementById("dateEnd")
const inputs = document.querySelectorAll("input, select")
const nowButtons = document.querySelectorAll(".book-now-active")

startDate.onchange = () => {
    endDate.value = startDate.value
}

startDate.min = formatDate()
startDate.min = new Date().toISOString().split('T')[0]

nowButtons.forEach(nowButton => {
  nowButton.addEventListener("click", () => { 
    window.onload(() => {})
      startDate.value = formatDate()
      startDate.value = new Date().toISOString().split('T')[0]
    }
  })
})

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

