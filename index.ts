import Jimp from 'jimp';
import { httpServer } from './src/http_server/index';
import robot from 'robotjs';
import WebSocket, { WebSocketServer } from 'ws';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const WS_PORT = 8080;

const webSocketServer = new WebSocketServer({ port: WS_PORT });

console.log(`Start ws server on the ${WS_PORT} port!`);
webSocketServer.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    console.log('received: %s', data);
    ws.send('Got ur msg: ' + data);
  });

  ws.send('something');
});

webSocketServer.on('close', () => {
  console.log('ws connection is closed');
});
