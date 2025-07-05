// Importing the Express module
import express from "express";

// Creating an Express application
const app = express();

// Defining the port number the server will listen on
const port = 3000;

// ================== ROUTES ==================

// GET request at the root path ("/")
// This route runs when a user visits http://localhost:3000/
// It responds with a simple text message
app.get("/", (req, res) => {
    res.send('Hello Piyush');
});

// POST request to "/register"
// This route simulates a user registration endpoint
// Responds with HTTP status code 201 (Created)
app.post("/register", (req, res) => {
    res.sendStatus(201);
});

// PUT request to "/user/Piyush"
// Typically used to update a resource completely
// Responds with status 200 (OK) after update
app.put("/user/Piyush", (req, res) => {
    res.sendStatus(200);
});

// PATCH request to "/user/Piyush"
// Used to partially update the user data
// Responds with status 200 (OK)
app.patch("/user/Piyush", (req, res) => {
    res.sendStatus(200);
});

// DELETE request to "/user/Piyush"
// Simulates deleting the user resource
// Responds with status 200 (OK) indicating successful deletion
app.delete("/user/Piyush", (req, res) => {
    res.sendStatus(200);
});

// ================== SERVER LISTENING ==================

// Starts the server and listens for requests on the specified port
app.listen(port, () => {
    console.log("Server running on port " + port);
});
