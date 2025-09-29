import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// ROUTE IMPORTS

// CONFIGURATION
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("This is home");
});

// SERVER
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Server running on Port ${port}`);
});


// npx prisma migrate dev --name init 
  // it will sync db and prisma schema, (make migration folder in prisma in folder with migrations files)

// npm run seed

