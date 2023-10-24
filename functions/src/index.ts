/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://goty-chart-default-rtdb.firebaseio.com",
});

const db = admin.firestore();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!",
    {
      structuredData: true,
    });
  response.json({
    "message": "Hello from Firebase Functions!",
  });
});

export const getGOTY = onRequest(async (request, response) => {
  /* const name = request.query.name || "No name";
  response.json({
    name
  }); */
  const gotyRef = db.collection("goty");
  const docsSnapshot = await gotyRef.get();
  const games = docsSnapshot.docs.map((doc) => doc.data());
  response.json(games);
});

const app = express();
app.use(cors({
  origin: true,
}));

app.get("/goty", async (req, res) => {
  const gotyRef = db.collection("goty");
  const docsSnapshot = await gotyRef.get();
  const games = docsSnapshot.docs.map((doc) => doc.data());
  res.json(games);
});

app.post("/goty/:id", async (req, res) => {
  const id = req.params.id;
  const gameRef = db.collection("goty").doc(id);
  const gameSnapshot = await gameRef.get();
  if (!gameSnapshot.exists) {
    res.status(404).json({
      ok: false,
      message: `Game with ID ${id} not found.`,
    });
  } else {
    const oldGameState = gameSnapshot.data() ||
      {
        votes: 0,
      };
    const votes = oldGameState.votes + 1;
    await gameRef.update({
      votes,
    });
    res.json({
      ok: true,
      message: `Thanks for voting for ${oldGameState.name}. Votes: ${votes}`,
    });
  }
});

export const api = onRequest(app);
