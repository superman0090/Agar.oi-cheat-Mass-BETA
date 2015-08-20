// ==UserScript==
// @name         AgarMassConfig
// @namespace    AgarMassCinfig
// @version      1
// @grant       none
// @description  AgarMass Cheat Config
// @author       http://www.twitch.tv/lefela44
// @include      http://agar.io/*
// ==/UserScript==

var connection = new WebSocket('ws://192.168.1.81:4545');

// When the connection is open, send some data to the server
connection.onopen = function () {
  connection.send('Ping'); // Send the message 'Ping' to the server
};

// Log errors
connection.onerror = function (error) {
  console.log('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
  console.log('Server: ' + e.data);
};
