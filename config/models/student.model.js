import mongoose from "mongoose";

const studentCollection = "students"

const studentSchema = new mongoose.Schema({
  nombre: {type: String, require: true, max: 100},
  email: { type: String, require: true, max: 100, unique: true},
  age: { type: Number, require: true}
})

export const studentModel = mongoose.model(studentCollection, studentSchema);
