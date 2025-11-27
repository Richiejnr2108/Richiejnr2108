import express from "express";
import data from "./data.json" with { type: "json" };
const app = express();
const PORT = 3000;

app.get("/users", (req, res) => {
  res.json(data);
  res.send(req.params);
});

app.get("/class/:id",(req, res) => {
const studid = Number(req.params.id);
const student = data.filter((student) => student.id === studid);
res.send(student);
app.listen(PORT, () => {
  console.log("json data captured successfully"); 
});