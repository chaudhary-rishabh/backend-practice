import express from "express";
import dotenv from "dotenv";

const app = express();


dotenv.config();

const port = process.env.PORT || 3000

app.use(express.json());

const students = [];

app.post("/", (req, res) =>{
	const newStudents = req.body;
	students.push(newStudents);
	res.status(201).send("successfully added new students");
});

app.get("/students", (req, res) =>{
	res.send("New addmited students are: "+ JSON.stringify(students));
})

app.get("/students/:id", (req, res)=>{
	const id = req.params.id;
	res.send("Admision details of student with id "+id+" are: "+ JSON.stringify(students[id]));
})

app.delete("/delete/:id", function(req, res){
	students.splice(req.params.id, 1);
	res.send("deleted student number: "+req.params.id);
	res.send("new student list after deleting student:- "+JSON.stringify(students));
});

app.put("/update/:id", function(req, res){
	const newStudent = req.body;
	const id = req.params.id;
	students[id] = newStudent
	res.send("updated student number: "+req.params.id);
	res.send("New Students list after updating students:- "+ JSON.stringify(students));
})

app.listen(3000, function(){
	console.log("server started on port number: "+port);
})

