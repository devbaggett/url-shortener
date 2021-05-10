import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import urlRoutes from "./routes/urls.js";
import { username, password } from "./credentials.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use("", urlRoutes);

const CONNECTION_URL = `mongodb+srv://${username}:${password}@cluster0.3fam2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 8000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch(error => console.log(error.message));

mongoose.set('useCreateIndex', true);
