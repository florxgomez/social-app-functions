const functions = require("firebase-functions");
const app = require("express")();

const FBAuth = require('./util/fbAuth');

const { getAllPosts, postOnePost } = require("./handlers/posts");
const { signUp, signIn } = require("./handlers/users");

//Posts routes
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, postOnePost);

//Users routes
app.post("/signup", signUp);
app.post("/login", signIn);

// Tell firebase that app is a container for all our routes
//https://baseurl.com/api/
exports.api = functions.https.onRequest(app);
