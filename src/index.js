import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { getUsers, getUser, createUser } from "../database.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


// Get all users
app.get('/users', async (req, res) => {
  
  const userList = await getUsers()
  res.send(userList)

});


// Get user by ID
app.get('/users/:userId', async (req, res) => {

const id = req.params.userId;
const user = await getUser(id);
res.send(user);

});




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



app.put('/users/:userId', (req, res) => {
  return res.send(
    `PUT HTTP method on user/${req.params.userId} resource`,
  );
});

app.delete('/users/:userId', (req, res) => {
  return res.send(
    `DELETE HTTP method on user/${req.params.userId} resource`,
  );
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);