/* globals WebSocket, location */
const HOST = location.origin.replace(/^http/, 'wss');
console.log(HOST);

const ws = new WebSocket(HOST);

ws.onmessage = function (event) {
  console.log(event);
};