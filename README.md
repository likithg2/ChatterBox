# 💬 Chatterbox
### A Mini Messaging & Chat Management App

**Chatterbox** is a lightweight messaging and chat management web application built using Node.js, Express.js, MongoDB, Mongoose, and EJS. It allows users to create, view, edit, and delete chat messages through a simple server-rendered web interface.

The project demonstrates the fundamentals of backend web development, RESTful routing, database integration, dynamic webpage rendering, and error handling using Express.js and Mongoose.

## ✨ Features

- 💬 **View All Chats:** Display stored chat messages with sender and recipient details.
- ✍️ **Create Chats:** Add new messages with sender, recipient, and message content.
- 🔍 **View Individual Chats:** Open a dedicated page to view a specific chat.
- 📝 **Edit Messages:** Update existing chat messages.
- 🗑️ **Delete Chats:** Remove chat records from the database.
- 🕒 **Timestamps:** Display message creation and update times.
- 🗄️ **MongoDB Integration:** Persist chat data using Mongoose.
- 🎨 **EJS Templates:** Generate dynamic HTML pages using embedded JavaScript.
- ⚙️ **Custom Error Handling:** Use a custom `ExpressError` class and Express error-handling middleware.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Web server and routing |
| MongoDB | NoSQL database |
| Mongoose | MongoDB object modeling and schema validation |
| EJS | Server-side template rendering |
| HTML5 | Webpage structure |
| CSS3 | Styling and presentation |
| method-override | Enables PUT and DELETE requests through HTML forms |
| JavaScript | Application logic and CRUD operations |

## 📁 Project Structure

```text
chatterbox/
├── models/
│   └── chat.js             # Chat schema and model
├── public/
│   └── style.css           # Stylesheets
├── views/
│   ├── edit.ejs            # Edit chat form
│   ├── index.ejs           # All chats page
│   ├── new.ejs             # Create chat form
│   └── show.ejs            # Individual chat details
├── .gitignore
├── ExpressError.js         # Custom error class
├── index.js                # Express server and routes
├── init.js                 # Sample database initialization
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Prerequisites

Install the following before running the application:

- [Node.js](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)
- npm, which is included with Node.js
- A code editor such as Visual Studio Code

## 🚀 Getting Started

### 1. Clone the repository

Replace the placeholder URL with your actual GitHub repository URL.

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd chatterbox
```

Alternatively, download the repository as a ZIP file and open the extracted project folder in your terminal.

### 2. Install dependencies

```bash
npm install
```

The application uses Express.js, Mongoose, EJS, and method-override. Make sure these dependencies are listed in your `package.json`.

If they are missing, install them using:

```bash
npm install express mongoose ejs method-override
```

### 3. Start MongoDB

Ensure that your local MongoDB server is running.

The application connects to this database:

```text
mongodb://127.0.0.1:27017/whatsapp
```

MongoDB will store the application's chat data in the `whatsapp` database.

### 4. Initialize sample data (optional)

If `init.js` contains sample chat records, execute:

```bash
node init.js
```

Run this only when you want to populate the database with sample data. Re-running the script may create duplicate records unless it prevents duplicates.

### 5. Start the application

```bash
node index.js
```

Once the server starts, the terminal should display a message indicating that it is listening on port `8080`.

### 6. Open the application

Visit the following URL in your browser:

**http://localhost:8080/chats**

You can now view and manage your chat messages.

## 🧭 Application Routes

| HTTP Method | Route | Description |
|---|---|---|
| GET | `/` | Displays a basic root page |
| GET | `/chats` | Displays all chat messages |
| GET | `/chats/new` | Displays the new-chat form |
| POST | `/chats` | Creates a new chat |
| GET | `/chats/:id` | Displays an individual chat |
| GET | `/chats/:id/edit` | Displays the edit form |
| PUT | `/chats/:id` | Updates an existing chat |
| DELETE | `/chats/:id/delete` | Deletes a chat |

The application uses `method-override` to support PUT and DELETE requests submitted through HTML forms.

## 🗃️ Chat Data Model

The chat model is defined in `models/chat.js`.

| Field | Type | Description |
|---|---|---|
| `from` | String | Name of the sender |
| `to` | String | Name of the recipient |
| `message` | String | Content of the chat message |
| `created_at` | Date | Date and time when the message was created |
| `updated_at` | Date | Date and time when the message was last updated, if maintained by the application |

Mongoose also assigns each document a unique `_id` by default, which is used to retrieve, update, and delete individual chats.

The exact schema constraints depend on the definitions in `models/chat.js`.

## 🧩 Error Handling

The project includes a custom `ExpressError` class in `ExpressError.js`, which stores an HTTP status code and an error message.

The application also demonstrates:

- Express error-handling middleware.
- Handling invalid MongoDB document IDs through Mongoose `CastError`.
- Handling schema validation failures through Mongoose `ValidationError`.
- Forwarding asynchronous errors to Express using an `asyncWrap` helper.

**Implementation note:** Ensure that `asyncWrap` calls `next(err)` rather than merely referencing `next`, and register error-processing middleware before the final middleware that sends the error response. This allows errors to be handled correctly instead of leaving requests pending.

## 🎯 Learning Outcomes

Building Chatterbox provides practical experience with:

- Creating an Express.js web server.
- Connecting a Node.js application to MongoDB.
- Defining Mongoose schemas and models.
- Implementing Create, Read, Update, and Delete (CRUD) operations.
- Working with RESTful routes and route parameters.
- Processing HTML form submissions.
- Rendering dynamic pages with EJS.
- Supporting HTTP methods using method-override.
- Handling asynchronous operations and application errors.
- Organizing a backend project using a modular directory structure.

## 🔮 Future Improvements

Potential enhancements include:

- 🔐 User authentication and authorization.
- ⚡ Real-time messaging using Socket.IO.
- 🔎 Search, filtering, and pagination for chats.
- 📱 Responsive UI improvements.
- ✅ Stronger input validation and centralized error handling.
- 🔔 Notifications for new messages.
- ☁️ Deployment with a hosted MongoDB database.
- 🧪 Automated testing for routes and database operations.

## 👨‍💻 Contributor

**Likith G**

- GitHub: [@likithg2](https://github.com/likithg2)

Contributions, suggestions, and improvements are welcome.

## 📄 License

This project is intended for learning and educational purposes. Unless a specific open-source license is added to the repository, all rights remain with the project owner.
