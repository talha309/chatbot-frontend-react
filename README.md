# chatbot-frontend-react
React frontend for chatbot application built with LangGraph.   Provides an interactive chat interface for users to communicate with the AI.
React Chatbot Frontend
This is the frontend for a chatbot application built with React. It provides a sleek, responsive, and user-friendly interface for interacting with a FastAPI backend powered by Google's Gemini 1.5 Flash model. The application features a modern chat UI with smooth scrolling, a customizable design, and real-time communication with the backend.
Features

Responsive Design: Adapts to various screen sizes, with a mobile-friendly layout for smaller devices.
Modern Styling: Uses a semi-transparent chat box with a blurred background, Poppins font, and a customized scrollbar for a polished look.
Real-Time Chat: Sends user messages to the backend and displays responses with a loading indicator.
Error Handling: Gracefully handles API errors and displays them in the chat interface.
Interactive UI: Includes hover effects, disabled states for loading, and smooth scrolling for a seamless user experience.
Accessibility: Improved contrast for user and bot messages to enhance readability.

Prerequisites

Node.js (v14 or higher)
npm (v6 or higher)
A running FastAPI backend (see Backend Repository for setup instructions)
A Google API key for the Gemini model (configured in the backend)

Setup Instructions

Clone the Repository:
git clone https://github.com/your-username/react-chatbot-frontend.git
cd react-chatbot-frontend


Install Dependencies:
npm install


Add Google Fonts:Add the Poppins font to your public/index.html:
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap">


Configure Backend URL (Optional):

By default, the frontend connects to http://127.0.0.1:8000. To change this, create a .env file in the root directory:REACT_APP_API_URL=http://your-backend-url


Update App.js to use the environment variable:const response = await fetch(`${process.env.REACT_APP_API_URL}/chat/${encodeURIComponent(query)}`);




Run the Application:
npm start

The app will be available at http://localhost:3000.

Ensure Backend is Running:

The frontend requires the FastAPI backend to be running (default: http://127.0.0.1:8000).
Refer to the backend repository for setup instructions.



Usage

Open http://localhost:3000 in your browser.
Type a message in the input field and press Enter or click Send.
The chatbot will display a "Loading..." message while fetching the response from the backend.
View the conversation in the chat box, with user messages on the right and bot messages on the left.
Errors (e.g., network issues) will appear in the chat box.

Project Structure
react-chatbot-frontend/
├── public/
│   ├── index.html        # HTML entry point with Poppins font
├── src/
│   ├── App.js            # Main React component for the chat interface
│   ├── App.css           # Styles for the chat UI
│   ├── index.js          # React app entry point
├── .env                  # Environment variables (optional)
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation

Technologies Used

React: Frontend library for building the UI.
CSS: Custom styles with flexbox and responsive design.
Google Fonts: Poppins font for typography.
FastAPI Backend: Handles chat logic with Google's Gemini 1.5 Flash model (see backend repo for details).

Screenshots
Coming soon! Add screenshots of the chat interface here.
Contributing

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

Background image from Unsplash.
Powered by Google Gemini via LangChain.
Built with React and FastAPI.
