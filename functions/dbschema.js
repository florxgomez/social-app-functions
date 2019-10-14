let db = {
  users: [
    {
      userId: "id",
      email: "user@email.com",
      handle: "user",
      createdAt: "2019-10-12T19:49:05.162Z",
      imageUrl: "image/jkdsjfkdsfkdslf/dsfmkldfkdmsnklfsf",
      bio: "Hell, my name is user, nice to meet you",
      website: "https://user.com",
      location: "London, UK",
    },
  ],
  posts: [
    {
      userHandle: "user",
      body: "this is the post body",
      createdAt: "2019-10-12T19:49:05.162Z",
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      postId: "djkfsfnkdjsfnsd",
      body: "nice one!",
      createdAt: "2019-10-12T19:49:05.162Z",
    },
  ],
  notifications: [
    {
      recipiet: "user",
      sender: "flo",
      read: "true | false",
      postId: "dasjdjosdaod",
      type: "like | comment",
      createdAt: "2019-10-12T19:49:05.162Z",
    },
  ],
};
const userDetails = {
  //Redux data that will be shown in the user profile
  credentials: {
    userId: "id",
    email: "user@email.com",
    handle: "user",
    createdAt: "2019-10-12T19:49:05.162Z",
    imageUrl: "image/jkdsjfkdsfkdslf/dsfmkldfkdmsnklfsf",
    bio: "Hell, my name is user, nice to meet you",
    website: "https://user.com",
    location: "London, UK",
  },

  likes: [
    {
      userHandle: "user",
      postId: "fjfdksjflsnfsdf",
    },
    {
      userHandle: "user",
      postId: "634ds56fsdf",
    },
  ],
};
