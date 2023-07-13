"use strict"
/*
Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per 
la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 
di domani mattina!
Consigli
Questo esercizio richiede un po’ di ricerca ma anche un po’ 
di domande che accompagnano l’uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un’ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
*/

// creo un orologio aggiornato in tempo reale
const clockContainer = document.getElementById("clock-container");

let now = new Date();

clockContainer.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

setInterval(function () {
  now = new Date();
  
  clockContainer.innerHTML = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}, 1000);
