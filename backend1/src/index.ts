import { WebSocketServer, WebSocket } from 'ws';  // Import both from 'ws'
import { GameManager } from './GameManager';

const wss = new WebSocketServer({ port: 8080 });
const gameManager = new GameManager();

wss.on('connection', (ws: WebSocket) => {  // Make sure to use ws.WebSocket
    gameManager.addUser(ws);
    ws.on('close', () => gameManager.removeUser(ws));
});
