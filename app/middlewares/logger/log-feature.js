const logFeature = (req, res, next) => {
  console.log("đây là tính năng lấy danh sách học sinh");
  next();
};

module.exports = { logFeature };
