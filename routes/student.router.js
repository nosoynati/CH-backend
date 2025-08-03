import { Router } from "express";
import {studentModel} from "../config/models/student.model.js";

const router = Router()

// endpoints
// READ
router.get("/", async(req, res) => {
  try {
    const students = await studentModel.find()
    res.send({ 
      result: "success!", 
      payload: students
    })
  }catch(error){
    res.status(500).json({ 
      status: "error",
      error: error.message
    })
  }
})
// CREATE
router.post("/", async (req, res) => {
  const { nombre, email, age } = req.body
  try{
    const result = await studentModel.create({nombre, email, age});
    res.send({
      status: "success",
      payload: result
    });

  }catch(error){
    res.status(400).json({
      status: "error",
      error: error.message
    });
  }
});
// UPDATE
router.put("/:uid", async (req, res) => {
  const uid = req.params.uid
  const { nombre, email, age } = req.body;
  try {
    const student = await studentModel.findOne({_id: uid});
    if(!student){
      throw new Error("Student not found!");
    }
    const newStudentUser={
      nombre: nombre ?? student.nombre,
      email: email ?? student.email,
      age: age ?? student.age
    }
    const updateData = await studentModel.updateOne({_id: uid}, newStudentUser);
    res.send({
      success: "success",
      payload: updateData
    });
  }catch(error){
    res.status(400).send({
      status: "error",
      error: error.message
    });
  }

})

// DELETE
router.delete("/:uid", (req, res) => {
  const uid = req.params.uid;
})
export default router;