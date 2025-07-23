# ARKAI – AI Chat Application

A full-stack AI chatbot built using **React**, **Node.js**, **Express**, **MongoDB**, and the **OpenAI GPT-4o-mini API**. It enables real-time conversations with an intelligent assistant and features a clean, modern UI with persistent threads.

---

##  Live Demo

**Frontend**: [https://ark-ai-l8in.onrender.com](https://ark-ai-l8in.onrender.com)  
**Backend**: [https://arkai-backend.onrender.com](https://arkai-backend.onrender.com)

---


##  Features

- Conversational UI powered by **OpenAI GPT-4o-mini**
- **Threaded chats** saved to MongoDB
- **Auto-scroll** on new message
- Typing animation with **react-spinners**
- Persistent history & real-time updates
- Deployed on **Render** (frontend & backend)

---

##  Technologies Used

- **Frontend**: React, Vite, CSS, Material UI, React Spinners
- **Backend**: Node.js, Express, MongoDB, OpenAI API
- **Deployment**: Render
- **APIs**: GPT-4o-mini via OpenAI API

---


##  Setup Instructions (Locally)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/arkai.git
cd arkai

# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

---

### 3. **Create .env files**
backend/.env

env
PORT=8080
MONGODB_URI=your-mongodb-uri
OPENAI_API_KEY=your-openai-api-key
frontend/.env

env
VITE_API_BASE_URL=https://arkai-backend.onrender.com

4. Run the app
bash
# Backend
cd backend
npm start

# Frontend
cd ../frontend
npm run dev

🚧 Future Enhancements
Add voice or image input support

User authentication and personal chat threads

Chat thread export/download feature

Dark/light mode toggle

