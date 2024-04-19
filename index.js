import express from "express";
import dotenv from "dotenv";
import errorHandler from "./middleware/errorHandler"
import connectDB from "./config/connectDB.js/"
const app = express();
dotenv.config();

const port = process.env.PORT || 5000
const DATABASE = process.env.DATABASE;
const URI = process.env.URI;
connectDB(URI, DATABASE);

app.use(express.json());
let errorCount = 0;
let numberOfRequestsForUser = 0;


var students = [];
setInterval(() => {
    numberOfRequestsForUser = 0;
}, 2000)

app.use(function (req, res, next) {
	numberOfRequestsForUser += 1;
	console.log(numberOfRequestsForUser);
	if (numberOfRequestsForUser > 5) {
		res.status(404).send("Request timed out. Please try again later.");
	} else {
		next();
	}
})

// app.post("/", (req, res) => {
// 	const newStudents = req.body;
// 	students.push(newStudents);
// 	res.status(201).send("successfully added new students");
// });

// app.get("/students", (req, res) =>{
// 	res.send("New addmited students are: "+ JSON.stringify(students));
// })

// app.get("/students/:id", (req, res)=>{
// 	const id = req.params.id;
// 	res.send("Admision details of student with id "+id+" are: "+ JSON.stringify(students[id]));
// })

// app.delete("/students/:id", function(req, res){
// 	students.splice(req.params.id, 1);
// 	res.send("deleted student number: "+req.params.id);
// 	res.send("new student list after deleting student:- "+JSON.stringify(students));
// });

// app.put("/students/:id", function(req, res){
// 	const newStudent = req.body;
// 	const id = req.params.id;
// 	students[id] = newStudent
// 	res.send("updated student number: "+req.params.id);
// 	res.send("New Students list after updating students:- "+ JSON.stringify(students));
// })

app.use(errorHandler);
app.listen(port, function(){
	console.log("server started on port number: "+port);
})

