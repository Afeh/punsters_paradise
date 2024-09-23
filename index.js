import express from "express";
import axios from "axios";



const app = express();
const port = 4000;

const API_URL = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun?blacklistFlags=nsfw,religious,explicit&type=twopart";
/* URL of the API with the required parameters */

app.use(express.static("public"));

app.get("/", async (req, res) =>  {
	try {
		const response = await axios.get(API_URL); //Using Axios to make a get request to the APi and storing the response
		const result = response.data; //Storing the data part of the response 
		// console.log(result); Checking to see the response from the request
		res.render("index.ejs", {setup:result.setup, delivery:result.delivery}) // rendering the joke setup and punchline to the index.ejs file
	} catch (error) {
		console.error("Failed to make request", error.message);// Error Handling
	}
});


app.listen (port, () => {
	console.log(`Listening on ${port}`);
});