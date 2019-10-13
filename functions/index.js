const functions = require("firebase-functions");
const app = require("express")();

const FBAuth = require("./util/fbAuth");

const { getAllPosts, postOnePost, getPost } = require("./handlers/posts");
const {
  signUp,
  signIn,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
} = require("./handlers/users");

//Posts routes
app.get("/posts", getAllPosts);
app.post("/post", FBAuth, postOnePost);
app.get("/post/:postId", getPost);
//TODO delete post
//TODO like a post
//TODO unlike a post
//TODO comment on a post

//Users routes
app.post("/signup", signUp);
app.post("/login", signIn);
app.post("/user/image", FBAuth, uploadImage);
app.post("/user", FBAuth, addUserDetails);
app.get("/user", FBAuth, getAuthenticatedUser);

// Tell firebase that app is a container for all our routes
//https://baseurl.com/api/
exports.api = functions.https.onRequest(app);
