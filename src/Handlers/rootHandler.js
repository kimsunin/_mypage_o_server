import User from "../Models/User.js";

export const getLogin = async (req, res) => {
  const isLogin = req.session.isLogin;
  const user = req.session.user;
  return res.json({ isLogin, user });
};

export const postJoin = async (req, res) => {
  const { name, email, password, password2 } = req.body.user;

  const exist = await User.exists({ email });
  if (exist) {
    return res.json({ message: "이미 사용중인 이메일입니다." });
  }
  if (password !== password2) {
    return res.json({ message: "비밀번호가 일치하지 않습니다." });
  }
  try {
    await User.create({
      name,
      email,
      password,
    });
    return res.json({ message: "회원가입 성공." });
  } catch (err) {
    return res.json({ message: err.message });
  }
};

export const postLogin = async (req, res) => {
  const { name, password } = req.body.user;
  const exists = await User.exists({ name });
  const user = await User.findOne({ name });
  if (name === "") {
    return res.json({ message: "이름을 입력하시오." });
  } else if (password === "") {
    return res.json({ message: "비밀번호를 입력하시오." });
  } else if (!exists) {
    return res.json({
      message: "가입되지 않은 이름입니다.",
    });
  } else {
    if (password === user.password) {
      return res.json({
        message: "로그인 성공.",
        isLogin: true,
        _id: user._id,
      });
    }
    return res.json({ message: "비밀번호가 일치하지 않습니다." });
  }
};

export const logout = async (req, res) => {
  req.session.isLogin = false;
  res.send("Logged out");
};
