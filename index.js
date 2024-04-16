const express = require("express");
const app = express();

const dotenv = require("dotenv");
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
	res.send("Admited students are: "+students);
});

app.delete("/delete/:id", function(req, res){
	res.send("deleted student number: "+req.params.id);
});

app.put("/update/:id", function(req, res){
	res.send("updated student number: "+req.params.id);
})

app.listen(3000, function(){
	console.log("server started on port number: "+port);
})

