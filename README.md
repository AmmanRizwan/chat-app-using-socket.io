# Real-Time Chat Application

A simple real-time chat application built with Socket.io, React, and Express.js. Users can create or join chat rooms using room codes and exchange messages instantly.

## 🚀 What is this project?

This is a **real-time chat application** that allows multiple users to:
- Create unique room codes for private chat rooms
- Join existing chat rooms using room codes
- Send and receive messages instantly
- See when messages were sent with timestamps

## 🛠️ Technology Stack

### Backend
- **Node.js** with **Express.js** - Server framework
- **Socket.io** - Real-time communication
- **TypeScript** - Type safety
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React 18** - User interface
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **Socket.io Client** - Real-time communication
- **Vite** - Build tool and dev server
- **Axios** - HTTP requests

## 📁 Project Structure

```
chat-app-using-socket.io/
├── backend/                 # Server-side code
│   ├── src/
│   │   ├── index.ts        # Main server file
│   │   ├── socket/         # Socket.io configuration
│   │   ├── routes/         # API routes
│   │   ├── controller/     # Route handlers
│   │   └── config/         # Environment configuration
│   └── package.json
├── frontend/               # Client-side code
│   ├── src/
│   │   ├── App.tsx         # Main React component
│   │   ├── components/     # React components (Chat, Room)
│   │   └── socket/         # Socket.io client setup
│   ├── redux/              # Redux store and slices
│   │   ├── store.ts        # Main store configuration
│   │   ├── room/           # Room state management
│   │   ├── chat/           # Chat input state
│   │   └── messages/       # Message history
│   └── package.json
└── README.md
```

## 🏗️ How it works

1. **Room Creation**: Users can generate a unique room code (e.g., `ABCD-EFGH-IJKL`)
2. **Joining Rooms**: Users enter their name and a room code to join a chat
3. **Real-time Messaging**: Messages are sent instantly to all users in the same room
4. **Message History**: All messages in a room are stored locally during the session

## ⚙️ Setup Instructions

### Prerequisites
- **Node.js** (version 16 or higher)
- **Yarn** package manager

### 1. Clone the repository
```bash
git clone https://github.com/AmmanRizwan/chat-app-using-socket.io.git
cd chat-app-using-socket.io
```

### 2. Backend Setup

#### Install dependencies
```bash
cd backend
yarn install
```

#### Create environment file
Create a `.env` file in the `backend` directory:
```bash
touch .env
cp .env.example .env
```

#### Start the backend server
```bash
# Development mode (with auto-restart)
yarn dev

# Production mode
yarn build
yarn start
```

The backend server will run on `http://localhost:3001`

### 3. Frontend Setup

#### Install dependencies
```bash
cd ../frontend
yarn install
```

#### Create environment file
Create a `.env` file in the `frontend` directory:
```env
VITE_API_URL=http://localhost:3001
```

#### Start the frontend development server
```bash
yarn dev
```

The frontend will run on `http://localhost:5173`

## 🎮 How to Use

1. **Open the application** in your web browser at `http://localhost:5173`

2. **Enter your name** in the "Enter Your Name" field

3. **Get a room code** by clicking "Generate Code" (creates a unique room)
   - OR **enter an existing room code** in the "Enter Your Room ID" field

4. **Click "Join Room"** to enter the chat

5. **Start chatting!** Type messages and press "Send Message" to communicate with others in the room

*IMPORTANT* **Receiver Get More than One Message At A Time Then Remove `<StrictMode></StrictMode>` from the `main.tsx`**

## 🔧 Available Scripts

### Backend Scripts
- `yarn dev` - Start development server with auto-reload
- `yarn build` - Build TypeScript to JavaScript
- `yarn start` - Start production server

### Frontend Scripts
- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## 🌐 API Endpoints

### Generate Room Code
- **URL**: `GET /api/generate-code/create`
- **Description**: Creates a unique room code for new chat rooms
- **Response**: 
  ```json
  {
    "message": "Code Generated!",
    "data": {
      "code": "ABCD-EFGH-IJKL"
    }
  }
  ```

## 📡 Socket Events

### Client to Server
- `join_room_code` - Join a specific room
- `send_message` - Send a message to the room
- `disconnect` - Handle user disconnection

### Server to Client
- `connect` - Confirm connection established
- `receive_message` - Receive new messages from other users

## 🚧 Current Features

✅ **Real-time messaging**  
✅ **Room-based chat**  
✅ **Unique room code generation**  
✅ **Message timestamps**  
✅ **Redux state management**  
✅ **TypeScript support**  
✅ **CORS configuration**  

## 🔮 Potential Improvements

- User authentication
- Message persistence (database)
- File/image sharing
- User typing indicators
- Message history persistence
- User list in rooms
- Private messaging
- Message encryption
- Mobile responsive design
- Dark/light theme toggle

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Commit: `git commit -m 'Add some feature'`
5. Push: `git push origin feature-name`
6. Submit a pull request

## 📄 License

This project is open source. Feel free to use it for learning and development purposes.

---

**Happy Chatting! 💬✨**