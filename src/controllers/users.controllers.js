const catchError = require("../utils/catchError");
const Users = require("../models/Users");

const getAll = catchError(async (req, res) => {
  const users = await Users.findAll();
  // Operaciones...

  return res.json(users);
});

const create = catchError(async (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  const users = await Users.create({
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: password,
    birthday: birthday,
  });
  // Operaciones...
  return res.status(201).json(users);
});
const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const users = await Users.findByPk(id);
  // Operaciones...
  return res.json(users);
});
const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await Users.destroy({ where: { id: id } });
  return res.sendStatus(204);
});
const update = catchError(async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, password, birthday } = req.body;

  const users = await Users.update(
    {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      birthday: birthday,
    },
    { where: { id: id }, returning: true }
  );
  // Operaciones...
  return res.json(users);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
};
