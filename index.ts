import Jimp from 'jimp';
import { httpServer } from './src/http_server/index';
import { createWebSocketStream, WebSocketServer } from 'ws';

import { runCommand } from './src/modules/runCommand';

const HTTP_PORT = 3000;

console.log(`Start static http server on the ${HTTP_PORT} port`);
httpServer.listen(HTTP_PORT);

const WS_PORT = 8080;

const webSocketServer = new WebSocketServer({ port: WS_PORT });

console.log(`Start web socket server on the ${WS_PORT} port`);

webSocketServer.on('connection', (ws) => {
  console.log('A client has just connected');

  const duplex = createWebSocketStream(ws, { encoding: 'utf8', decodeStrings: false });

  duplex.on('data', async (data) => {
    try {
      const input = data.toString();
      const output = await runCommand(input);
      console.log('<-', input);

      const result = `${input} ${output ? output : ''}\0`;
      console.log('result', JSON.stringify(result));

      if (typeof result === 'string') {
        console.log('->', result);

        duplex.write(result, (error) => {
          if (error instanceof Error) {
            console.log(`Operation failed, error: ${error}`);
          }
        });
      }
    } catch (error) {
      console.log(`Operation failed, error: ${error}`);
    }
  });

  ws.on('error', (error) => {
    console.log(`Operation failed, error: ${error}`);
  });

  ws.on('close', () => {
    console.log('Websocket has been closed');
  });
});

webSocketServer.on('close', () => {
  console.log('Web socket connection is closed');
});

process.on('SIGINT', () => {
  console.log('Web socket server will be closed');
  webSocketServer.close();
  process.exit();
});
