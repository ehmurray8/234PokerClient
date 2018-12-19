const PORT_NUM = 9_000;

let name = prompt("Please enter your username");
let socket = new WebSocket(`ws://localhost:${PORT_NUM}`);

socket.send(`${name}:200`);

while(true) {
    let update = socket.read();
}
