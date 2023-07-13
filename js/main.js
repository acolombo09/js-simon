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

// calcolo quanto tempo manca da now(data) alle 9:30 di domani
// ovvero, i giorni, ore, minuti e secondi mancanti

const endDate = new Date();
// ho aggiunto +1 perchè altrimenti coinciderebbe col countdown terminato
// (grazie, stackoverflow)
endDate.setDate(endDate.getDate() + 1);
endDate.setHours(9);
endDate.setMinutes(30);
endDate.setSeconds(0);
const endTime = endDate.getTime();

// Aggiorno il countdown ogni secondo
// tenendo conto del famoso numero di millisecondi trascorsi dal 1 gennaio 1970
  const countdown = setInterval(function() {
  const now = new Date().getTime();
  const remainingTime = endTime - now;

  /* Calcola i giorni, ore, minuti e secondi rimanenti
  a partire dalla differenza di tempo calcolata al passaggio precedente, come se stessi calcolando per difetto
  */
  // (sempre grazie, stackoverflow e florian)
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Modifico l'HTML in tempo reale
  document.getElementById("countdown").innerHTML = days + "gg " + hours + "ore " + minutes + "min " + seconds + "sec";

  // Se il countdown è terminato, mostra messaggio countdown terminato
  if (remainingTime < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Countdown terminato, torna in classe!";
  }
  // l'impostazione del tempo di esecuzione deve essere per forza di 1 secondo, come per l'orologio aggiornato in tempo reale
}, 1000);