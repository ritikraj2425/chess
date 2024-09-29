import { WebSocketServer } from "ws";
const GameManager = require('./GameManager')

const wss = new WebSocketServer({ port: 3002});

const gameManager = new GameManager();

wss.on('connection', function connection(ws) {
    gameManager.addUser(ws)
    ws.on("disconnect", () => gameManager.removeUser(ws))
});