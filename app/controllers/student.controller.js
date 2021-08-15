const {
  getList,
  getDetail,
  create,
  update,
  deleteById,
  
} = require("../services/student.services");

const getStudentList = (req, res) => {
  const studentList = getList();
  if (studentList) {
    res.status(200).send(studentList);
  } else {
    res.status(404).send("Not Found");
  }
};

const getStudentDetailById = (req, res) => {
  const params = req.params;
  const id = params.id;

  const student = getDetail(id);
  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send("not found!");
  }
};

const createStudent = (req, res) => {
  let student = req.body;
  const newStudent = create(student);
  res.status(201).send(newStudent);
};

const updateStudentById = (req, res) => {
  const { id } = req.params;
  const student = req.body;

  const updatedStudent = update(id, student);
  if (updatedStudent) {
    res.status(200).send(updatedStudent);
  } else {
    res.status(404).send("Not Found!");
  }
};

const deleteStudentById = (req, res) => {
  const { id } = req.params;
  const studentDeleted = deleteById(id);
  if (studentDeleted) {
    res.send(studentDeleted);
  } else {
    res.status(404).send("Not Found!");
  }
};
module.exports = {
  getStudentList,
  getStudentDetailById,
  createStudent,
  updateStudentById,
  deleteStudentById,
};
