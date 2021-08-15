const express = require("express");
const studentRouter = express.Router();
const {
  getStudentList,
  getStudentDetailById,
  createStudent,
  updateStudentById,
  deleteStudentById,
} = require("../controllers/student.controller");
const { logFeature } = require("../middlewares/logger/log-feature");
const {
  checkEmty,
  checkNumberClass,
} = require("../middlewares/validations/student.validation");

let studentList = [
  {
    id: 1,
    fullName: "Nguyễn Phong Hào",
    age: 18,
    numberClass: 12,
  },
  {
    id: 2,
    fullName: "Nguyễn Văn Bưởi",
    age: 17,
    numberClass: 11,
  },
  {
    id: 3,
    fullName: "Lê Thị Chuối",
    age: 15,
    numberClass: 9,
  },
];

// lấy danh sách học sinh ( url <=>  http://localhost:3000/students )
studentRouter.get("/", logFeature, getStudentList);

// lấy thông tin chi tiết học sinh
studentRouter.get("/:id", getStudentDetailById);

// thêm học sinh
studentRouter.post("/", checkEmty, checkNumberClass, createStudent);

// cập nhật học sinh
studentRouter.put("/:id", updateStudentById);

// xóa học sinh
studentRouter.delete("/:id", deleteStudentById);

module.exports = studentRouter;
