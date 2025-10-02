# 🧠 CollaBoard Backend

**CollaBoard Backend** is the server for a collaborative whiteboard application.  
It handles **user authentication**, **board storage**, and **real-time collaboration** using **Node.js**, **Express**, **MongoDB**, and **Socket.io**.

---

## 🔧 Key Features

- 👥 **User Authentication**  
  - Sign up and log in using **email and password**  
  - JWT-based authentication for secure access  

- 🌐 **Persistent Boards**  
  - Save, load, and manage multiple boards per user in **MongoDB**  

- 🔄 **Real-Time Collaboration**  
  - Multiple users can draw on the same board simultaneously  
  - Updates are broadcast via **Socket.io**  

- 🔑 **Secure Access**  
  - Only authorized users can modify or access boards  

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | Server runtime |
| Express | REST API framework |
| MongoDB | Database for users and boards |
| Mongoose | ODM for MongoDB |
| Socket.io | Real-time collaboration |
| JWT | Authentication & session management |
| Cors | Cross-origin requests |
| dotenv | Environment variable management |

---

## 🏗 Architecture Overview

```text
Backend (Node.js + Express + Socket.io)
       │
       ▼
MongoDB (Users & Boards)
