import * as dotenv from 'dotenv'
import express, { request, response } from 'express'

// Maak een nieuwe express app
const app = express()

dotenv.config()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'));

// Stel afhandeling van formulieren in
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// gegevens uit API naar index pagina doorsturen
app.get('/', (request, response) => {
    let urlSmartzones = `${process.env.API_URL}/smartzones` //url maken met het deel uit de .env
  fetchJson(urlSmartzones).then((data) => { //fetch functie aanroepen en data ophalen
    response.render('index', {smartzones: data.smartzones}) //data doorsturen en pagina laden
  })
})

//gegevens uit API naar book pagina doorsturen
app.get('/book', (request, response) => {
  let urlSmartzones = `${process.env.API_URL}/smartzones` //url maken en uit .env halen
  fetchJson(urlSmartzones).then((smartzones) => { //fetch functie 
    let id = request.query.id || 'clene4gw60aqg0bunwwpawr1p'
    let time = request.query.time
    let url = `${process.env.API_URL}/reservations?id=${id}`
    fetchJson(url).then((reservations) => { //info uit fetch functie 1 word meegegeven aan functie 2
      
      let data = {smartzones: smartzones, reservations: reservations} //alle opgehaalde info samenvoegen
      response.render('book', {smartzones: data.smartzones.smartzones, selectedSmartzoneId: id, time: time}) //de pagina maken en laten zien met alle meegegeven info
    })
  })
})

//gegevens van het formulierw naar API sturen
  app.post('/post', (request, response) => { 
    request.body.timeStart = request.body.dateStart + 'T' + request.body.timeStart + ':00Z'; //data in juiste format zetten
    request.body.timeEnd = request.body.dateEnd + 'T' + request.body.timeEnd + ':00Z';    //data in juiste format zetten
    let url = `${process.env.API_URL}/reservations` //url maken met deel uit .env
    postJson(url, request.body).then((data) => { //post functie aanroepen
      let newReservation = { ... request.body} //gegevens formulier in een variable zetten
     if (data.data.id.length > 0) { //als het gelukt is om het te posten
          response.redirect('/?reservationPosted') //dan word de pagina opnieuw geladen met wat extra's in de url
      }
      else { //als het niet gelukt is
      const errorMessage = data.message //als er een foutmelding is word die in een variable gezet
      const newData = { error: errorMessage, values: newReservation } //de foutmelding word met de gegevens in een variable gezet

        let urlSmartzones = `${process.env.API_URL}/smartzones` //de url word gemaakt met een deel uit de .env
        fetchJson(urlSmartzones).then((smartzones) => { //de data die nodig is om de site opniew te laden word opgehaald
          let id = request.query.id || 'clene4gw60aqg0bunwwpawr1p' //smartzone id dat geselcteerd was in een variable zetten
          let time = request.query.time //geselecteerde tijd in een variable zetten
          let url = `${process.env.API_URL}/reservations?id=${id}` //url die word gemaakt met een deel uit de .env

          fetchJson(url).then((reservations) => { //de data uit de vorige fetch word meegegeven in deze fetch
            let data = {smartzones: smartzones, reservations: reservations} //alle data samenvoegen om in een keer te versturen
            response.render('book', {smartzones: data.smartzones.smartzones, selectedSmartzoneId: id, time: time}) //de pagina laden met alle info die nodig is
          })
        })
      }
    })
  })

//route naar summary
app.get('/summary', (request, response) => {
  response.render('summary')
})

//route naar nav
app.get('/nav', (request, response) => {
  response.render('nav')
})

//route naar map
app.get('/map', (request, response) => {

  response.render('map')
})

//route naar form
app.get('/form', (request, response) => {

  response.render('form')
})


// Stel het poortnummer in en start express
app.set('port', process.env.PORT || 8000)
app.listen(app.get('port'), function () {
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}

/**
 * postJson() is a wrapper for the experimental node fetch api. It fetches the url
 * passed as a parameter using the POST method and the value from the body paramater
 * as a payload. It returns the response body parsed through json.
 * @param {*} url the api endpoint to address
 * @param {*} body the payload to send along
 * @returns the json response from the api endpoint
 */
export async function postJson(url, body) {
  return await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error)
}