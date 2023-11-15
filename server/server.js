// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const { products } = require("./db/products.ts");
const { users } = require("./db/users.ts");
const { messages } = require("./db/messages.ts");

// Create an instance of the Express application
const app = express();

// Middlewares
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// Define a sample route
app.get("/clients", (req, res) => {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  axios
    .get(apiUrl)
    .then((response) => {
      // Handle the API response data here
      res.send(response.data);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error("Error fetching data from the API:", error);
    });
});

app.use("/products", (req, res) => {
  return res.send(products);
});

app.get("/users", (req, res) => {
  return res.send(users);
});

app.post("/users", (req, res) => {
  const { firstName, lastName } = req.body;
  const newUserId = users.length + 1;

  // Create a new user object
  const newUser = {
    id: newUserId,
    firstName,
    lastName,
  };

  // Add the new user to the users array
  users.push(newUser);
  return res.send(newUser);
});

app.get("/messages", (req, res) => {
  return res.send(messages);
});

app.post("/messages", (req, res) => {
  const { message, userId } = req.body;
  const newMessageId = messages.length + 1;
  const currentDate = new Date();

  // Create a new user object
  const newMessage = {
    id: newMessageId,
    userId,
    message,
    createdAt: currentDate,
  };

  // Add the new user to the users array
  messages.push(newMessage);
  return res.send(newMessage);
});

// Define more routes and API endpoints as needed

// Start the server
const port = process.env.PORT || 3000; // Use the provided port or default to 3000
app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}/`);
});
