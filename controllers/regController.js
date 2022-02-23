// // const bcrypt = require("bcrypt");
// const db = require("../models");
// const User = db.UserM;
// const Product = db.ProductM;
// const Order = db.OrderM;

// exports.register = async (req, res) => {
//   const { name,  email, pass } = req.body;
//   const password = await bcrypt.hash(pass, 10);

//   let data = await User.create({ name, phone, email, password })
//     .then((data) => {
//       res
//         .json({
//           id: data.id,
//           name: data.name,
//           email: data.email,
//           phone: data.phone,
//         })
//         .status(200);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message,
//       });
//     });
// };

// exports.Login = async (req, res) => {
//   const { email, password } = req.body;
//   await User.findAll({ where: { email: email } })
//     .then((data) => {
//       res.json(data).status(200);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Somthing wrong!",
//       });
//     });
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   await User.findAll({ where: { email: email } })
//     .then((data) => {
//       if (data.length > 0) {
//         bcrypt.compare(password, data[0].password, (err, result) => {
//           if (err) {
//             res.status(201).json({ message: "Auth Field" });
//           }
//           if (result) {
//             res.status(200).send({
//               message: "login successfully",
//             });
//           }
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message,
//       });
//     });
// };