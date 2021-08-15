const express = require("express");
const router = require("./routers/root.router");
const app = express();
const port = 3000;

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

// chuyển req, res về json để tiện thao tác
app.use(express.json());

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


// setup sequelize
const { sequelize } = require("./model/index");
sequelize.sync({alter: true});