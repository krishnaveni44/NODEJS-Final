import express from "express"; 
import { getMovieById,
    createMovies,
    updateMovieById,
    deleteMovieById,
    getAllMovies } from "../helper.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();
// cursor - pagination -> convert to Array (toArray)

// app.get("/movies", async function (request, response)
// note: replacing app = router
// router.get("/movies",   note: remove movies from "/movies" 

router.get("/", async function (request, response)
{ 
   // db.movies.find({})

  //  const movies = await client
  //  .db("b30wd")
  //  .collection("movies")
  //  .find({})
  //  .toArray();
  const movies = await getAllMovies();
  response.send(movies);
});  

router.get("/:id", async function (request, response)
{ 
   console.log(request.params);
// filter | find  
// db.movies.findOne({id: "102"})
  const { id } = request.params;  
// const movie = movies.find((mv) => mv.id === id);   
  const movie = await getMovieById(id); 
  
  console.log(movie);
  movie 
     ? response.send(movie)
     : response.status(404).send({ message: "No such movie found 😅" });
  // response.send(movie); 
});  

router.delete("/:id", async function (request, response)
{ 
   console.log(request.params);
// filter | find  
// db.movies.findOne({id: "102"})
  const { id } = request.params;  
// const movie = movies.find((mv) => mv.id === id);   
  const result = await deleteMovieById(id);    
  response.send(result); 
   //response.send(movies);
});  

router.put("/:id", async function (request, response)
{ 
   console.log(request.params);
// filter | find  
// db.movies.findOne({id: "102"}, {$set: updateData})
  const { id } = request.params; 
  const updateData = request.body;
  
  const result = await updateMovieById(id, updateData);    
  response.send(result); 
   //response.send(movies);
});  

router.post("/", async function (request, response) {
  // db.movies.insertMany(data)
  const data = request.body;
  console.log(data);
  const result = await createMovies(data);
  response.send(result);
});

export const moviesRouter = router;
