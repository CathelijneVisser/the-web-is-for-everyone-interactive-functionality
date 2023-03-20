import * as dotenv from 'dotenv'
import express from 'express'

// Maak een nieuwe express app
const app = express()

dotenv.config()

// Stel in hoe we express gebruiken
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', (request, response) => {
    let urlSmartzones = `${process.env.API_URL}/smartzones`

  fetchJson(urlSmartzones).then((data) => {
    response.render('index', data)
  })
})

app.get('/nav', (request, response) => {
  response.render('nav')
})

app.get('/map', (request, response) => {
  response.render('map')
})

// Stel afhandeling van formulieren in
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

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