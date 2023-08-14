const express = require("express");
const server = express();
const port = 8000;

// GET /
server.get("/", (req, res) => {
  // returns a string “My Express API”
  res.send("My Express API");
});

// just create a myPosts array
const myPosts = [
  {
    id: 1,
    title: "post 1",
    content: "content 1",
  },
  {
    id: 2,
    title: "post 2",
    content: "content 2",
  },
  {
    id: 3,
    title: "post 3",
    content: "content 3",
  },
];

// GET /posts
server.get("/posts", (req,res)=>{
    // returns a list of posts(json) with id, title and content
    res.status(200).send(myPosts)
})

// GET/posts/:id
server.get("/posts/:idPosts", (req,res)=>{
    // returns the post with that id (json)
    const id = Number(req.params.idPosts)

        // filter myPosts with id coming from the params
        const result = myPosts.filter(post => post.id === id)

        // bonus: return a 404 status and the json response ( error:”post not found”)
        if(result.length > 0){
            res.status(200).send(result)
        } else {
            res.status(404).send(`post ${id} not found`)
        }


})




server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
