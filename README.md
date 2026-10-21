
# 💬 Chatterbox
### A Mini Messaging & Chat Management App

Chatterbox is a simple messaging application built with Node.js, Express.js, MongoDB, Mongoose, and EJS. It allows users to create, view, edit, and delete chat messages through a server-rendered web interface.

This project demonstrates the fundamentals of CRUD operations, RESTful routing, database integration, and dynamic webpage rendering.

## ✨ Features

- 💬 View all chat messages
- ✍️ Create new messages with sender and recipient details
- 📝 Edit existing messages
- 🗑️ Delete messages
- 🕒 Display message creation timestamps
- 🔄 Track when a message was last updated
- 🗄️ Store chat data in MongoDB
- 🖥️ Render dynamic pages using EJS templates

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Server and routing |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling |
| EJS | Dynamic HTML templates |
| HTML & CSS | Page structure and styling |
| method-override | Support PUT and DELETE requests through forms |

## 📁 Project Structure

```text
chatterbox-chat-app/
├── models/
│   └── chat.js
├── public/
│   └── style.css
├── views/
│   ├── edit.ejs
│   ├── index.ejs
│   └── new.ejs
├── index.js
├── init.js
├── .gitignore
├── package.json
└── package-lock.json
```

## ⚙️ Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- npm (included with Node.js)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/likithg2/chatterbox-chat-app.git
cd chatterbox-chat-app
```

Replace the repository URL if you choose a different GitHub repository name.

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB

Make sure your local MongoDB server is running.

The application connects to the following database:

```text
mongodb://127.0.0.1:27017/whatsapp
```

The database and collection will be managed through MongoDB and Mongoose as required.

### 4. Initialize sample data (optional)

To insert the sample chat messages defined in `init.js`, run:

```bash
node init.js
```

Run this only when you want to seed the database. Re-running the script may insert duplicate sample records.

### 5. Start the application

```bash
node index.js
```

### 6. Open in your browser

Visit:

http://localhost:8080/chats

## 🧭 Application Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Root route |
| GET | `/chats` | Display all chats |
| GET | `/chats/new` | Display the new-chat form |
| POST | `/chats` | Create a chat |
| GET | `/chats/:id/edit` | Display the edit form |
| PUT | `/chats/:id` | Update a chat message |
| DELETE | `/chats/:id/delete` | Delete a chat |

The application uses `method-override` to support PUT and DELETE requests from HTML forms.

## 🗃️ Chat Data Model

Each chat document contains the following fields:

| Field | Type | Description |
|---|---|---|
| `from` | String | Sender's name |
| `to` | String | Recipient's name |
| `message` | String | Chat message |
| `created_at` | Date | Message creation timestamp |
| `updated_at` | Date or null | Last update timestamp |

## 🎯 Learning Outcomes

- Building a web server with Express.js
- Connecting MongoDB with Mongoose
- Defining schemas and models
- Implementing CRUD operations
- Working with route parameters and form data
- Rendering dynamic HTML using EJS
- Handling HTTP methods with method-override
- Displaying timestamps in a web application

## 🔮 Future Improvements

- Add user authentication and authorization
- Introduce real-time messaging using Socket.IO
- Add message search and filtering
- Improve responsive UI and accessibility
- Add input validation and error handling
- Deploy the application using a hosted database

## 👨‍💻 Contributor

**Likith G**

- GitHub: [@likithg2](https://github.com/likithg2)

## 📄 License

This project is available for learning and educational purposes.
