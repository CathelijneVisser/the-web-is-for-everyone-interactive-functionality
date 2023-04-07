# Coding The Curbs
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Aan de linker kant van het scherm staat een lijst met de smartzones waar je op book-now of book-later kan kliken en onderaan staat een menu waar je ook op book kan klikken. Aan de rechterkant staat een formulier waarmee je een smartzone kan reserveren.
<img src="https://user-images.githubusercontent.com/112855711/230025716-d8feb614-9077-4a6f-9b18-cb507575711a.png">

<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
Ik heb node, EJS en express gebruikt, met node vraag ik de data op aan de server site en stuur ik het door naar de juiste HTMl pagina's. Ejs gebruik ik om met JS de data in in mijn HTML te zetten. Express helpt met de routing.
Ik heb met node data uit API's getrokken met get en ik zet data in de API met post. 

Ik heb in deze site progressive enhancement gebruikt bij het formulier. Progressive enhancement houdt in dat je ervoor zorgt dat je hoofddoel altijd mogelijk is. Het hoeft niet mooi of super gebruiksvriendelijk te zijn maar het moet altijd mogelijk zijn. Dan zorg je er voor dat voor gebruikers wiens broweser/device het wel mogelijk is, de site mooier en handiger word. Ik heb dit zelf toegepast door ervoor te zorgen dat het formulier met alleen maar html altijd gebruikbaar is. Dan zit er wat styling in om het formulier er iets beter uit te laten zien, er kom nog styling voor de errorstate maar daar ben ik nog niet aan toegekomen. En ik heb met javascript ervoor gezorgd dat als je een datum selecteer dat de einddatum de zelfde input krijgt.

## Installatie
Ik gebruik node versie 18.15.0. Als je het project voor het eerst opent moet je in de terminal eerst npm install uitvoeren, die download dan de benodigde packages voor express en EJS. Daarna kan je elke keer npm start uitvoeren om een live server aan te zetten.

Ik heb een .env bestand gebruikt voor een deel van de url naar de API er staat een example.env op github die je kan gebruiken om te zien hoe de variable eruit ziet.

## Gebruik

Deze site kan worden gebruikt om te kijken welke smartzones er zijn. Hierdoor kun je makkelijk en overzichtelijk zien welke smartzone het beste is voor jouw benodigdheden. Ook kun je de smartzone die je nodig hebt reserveren.

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
