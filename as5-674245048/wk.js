const express = require("express");

const app = express();

const post = 3000;

students = [
  {
    "name": "Bob",
    "id": "6512345679",
    "major": "Computer Science"
  },
  {
    "name": "Charlie",
    "id": "6512345680",
    "major": "Information Technology"
  },
  {
    "name": "Diana",
    "id": "6512345681",
    "major": "Data Science"
  },
  {
    "name": "Ethan",
    "id": "6512345682",
    "major": "Software Engineering"
  },
  {
    "name": "Fiona",
    "id": "6512345683",
    "major": "Computer Science"
  }
];

app.get("/", function(req, res) {
    res.send("Hello Express");
})

app.get("/about", function(req, res) {
    res.send("This is  ABOUT pate");
})

app.get("/contact", function(req, res) {
    res.send("text to my instargram @iqcth_");
})

app.get("/students", function(req, res) {
    res.json(students);
});

app.get("/student/:id", function(req, res) {
    const stdid = parseInt(req.params.id);
    const std = students.find(e => e.id == stdid);
    res.json(std);
})

app.listen(post, function() {
    console.log("Server is Runing.....")
})

app.get("/square", function(req, res) {
    const number = parseInt(req.query.num);
    square = number*number;
    res.json({ result: square });
})


app.get("/grade", function(req, res) {
    const score = parseInt(req.query.score);

    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else if (score < 50) {
        grade = "F";
    }

    
    res.json({ grade: grade });
})