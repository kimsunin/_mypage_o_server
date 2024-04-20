import User from "../Models/User.js";
export const getUser = async (req, res) => {
  const _id = req.params.id;
  const user = await User.findById(_id);
  return res.json({ user });
};
export const editUser = async (req, res) => {
  const user = req.body.editUser;
  const _id = req.body.id;
  console.log(user, _id);
  await User.updateOne({ _id }, user);
  return res.json({ message: "변경완료" });
};
