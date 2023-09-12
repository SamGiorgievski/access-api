import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../database.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// ROUTES
// Get all users
app.get('/users', async (req, res) => {
  
  const userList = await getUsers()
  res.send(userList)

});

// Get user by ID
app.get('/users/:userId', async (req, res) => {

  const userId = req.params.userId;
  const user = await getUser(userId);
  res.send(user);

});

// Create user
app.post('/users', async (req, res) => {

  const values = req.body;

  console.log(req.body);

  try {
    const createdUser = await createUser(values);
    res.status(201).json(createdUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

});

// Update user
app.put('/users/:userId', async (req, res) => {
  const userId = req.params.userId;
  const updatedUserData = req.body;

  try {
    const updatedUser = await updateUser(userId, updatedUserData);
    res.json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete user

app.delete('/users/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const deletedUser = await deleteUser(userId);
    res.json({ message: 'User deleted', user: deletedUser });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Listener
app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);