# WebSocket Server for Chat Application

This is a WebSocket server built with Express and Socket.IO for real-time communication in a chat application.

## Features

- Real-time messaging: Allows clients to send and receive messages instantly.
- Room-based communication: Supports joining different rooms for separate conversations.
- CORS support: Configured to allow cross-origin requests from specified origins.
- Environment variables: Uses environment variables for configuration, including port number and allowed origins.

## Technologies Used

- Express: Web application framework for Node.js, used for server-side logic.
- Socket.IO: Library for real-time web applications, enabling bidirectional communication between clients and server.
- CORS: Middleware for enabling Cross-Origin Resource Sharing.
- dotenv: Module for loading environment variables from a .env file.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/websocket-chat-server.git
    ```

2. Navigate to the project directory:

    ```bash
    cd websocket-chat-server
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and define the following environment variables:

    ```plaintext
    PORT = 3001               # Port number for the server
    ORIGIN = http://localhost:5173    # Allowed origin for CORS
    ```

5. Start the server:

    ```bash
    npm start
    ```

6. The server will be running on the specified port, and it's ready to accept connections from clients.

## Folder Structure

websocket-chat-server/
│
├── index.js # Express server file
├── package.json # Project dependencies and scripts
└── README.md # Project documentation


## Configuration

- **PORT**: Specifies the port number for the server. Defaults to 5173 if not provided.
- **ORIGIN**: Defines the allowed origin for CORS requests. Defaults to http://localhost:5173 if not provided.

## Usage

- Clients can connect to the server using Socket.IO and send/receive messages in real-time.
- Clients can join different rooms to participate in separate conversations.
- The server emits events such as "join_room", "send_message", and "disconnect" to handle client interactions.


