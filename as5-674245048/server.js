const express = require("express");

const app = express();

const post = 3000;

employees = [
    {
        "id" : 1,
        "name" : "M",
        "position" : "HR",
        "salary" : 60000
    },
    {
        "id" : 2,
        "name" : "Q",
        "position" : "HR",
        "salary" : 60000
    },
    {
        "id" : 3,
        "name" : "A",
        "position" : "HR",
        "salary" : 40000
    },
    {
        "id" : 4,
        "name" : "X",
        "position" : "DEV",
        "salary" : 600
    }
];
app.get("/", function(req, res) {
    res.send("Hello Express");
})

app.get("/employees", function(req, res) {
  const pos = req.query.position;
  if (pos) {
    const filtered = employees.filter(e => e.position.toLowerCase() === pos.toLowerCase());
    res.json(filtered);
  } else {
    res.json(employees);
  }
});

app.get("/employee/:id", function(req, res) {
    const empid = parseInt(req.params.id);
    const employee = employees.find(e => e.id == empid);
    res.json(employee);
})

app.listen(post, function() {
    console.log("Server is Runing.....")
})

app.get("/salary", function(req, res) {
    const {min, max} = req.query;
    filsalary = employees.filter(e => e.salary >= min && e.salary <= max);
    res.json(filsalary);
})