const express = require("express");
const app = express();

const path = require("path");
var http = require("http");
const { Server } = require("socket.io");

// import http as http from 'node:http';

// deepcode ignore HttpToHttps: <please specify a reason of ignoring this>
const server = http.createServer(app);

const io = new Server(server);
app.use(express.static(path.resolve("client")));

let arr = [];
let playerArr = [];

// Handle a new connection
socket.on("find", (e) => {
  // If player name provided
  if (e.name != null) {
    // Add player info to array
    arr.push({ name: e.name, char: e.character });
    // If at least 2 players found
    if (arr.length >= 2) {
      // Create player objects
      let p1obj = {
        p1name: arr[0].name,
        p1char: arr[0].char,
        amI: false,
      };
      let p2obj = {
        p2name: arr[1].name,
        p2char: arr[1].char,
        amI: true,
      };
      // Create match object
      let obj = {
        p1: p1obj,
        p2: p2obj,
      };
      // Add match to all matches list
      playerArr.push(obj);

      // Remove 2 players from array
      arr.splice(0, 2);

      // Emit updated all matches list to all clients
      io.emit("s", { allPlayers: playerArr });
      // Listen for weNeed event from a client
      socket.on("weNeed", () => {
        // Emit current all matches list to all clients
        io.emit("Got", { allPlayers: playerArr });
        // Reset all matches list
        allPlayers = [];
      });
      // Listen for positionUpdate event from a client
      socket.on("positionUpdate", (e) => {
        // Emit updated player positions to all clients
        io.emit("Update", { allPosition: e });
        // Log updated player positions
        console.log(e);
      });
    }
  }
});
// Starting the server
(() => {
  console.log("server started");
})();
