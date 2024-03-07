import User from "../src/models/user.js";
import bcrypt from "bcrypt";

const handleNewUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Username and password required" });
  // check for duplicate usernames in the db.
  const duplicate = await User.findOne({ email: email }).exec();
  console.log(duplicate);
  if (duplicate) return res.sendStatus(409); // Conflict

  try {
    // encrypt the password
    const hashedPwd = await bcrypt.hash(password, 10);
    // create and store the new userName
    const newUser = { email: email, password: hashedPwd };
    const result = await User.create({
      email: email,
      password: hashedPwd,
    });

    console.log(result);
    res.status(201).json({ success: `New userName ${userName} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { handleNewUser };
