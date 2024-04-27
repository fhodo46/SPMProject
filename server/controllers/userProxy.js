const User = require("../models/user");

async function createUser(req, res) {
  try {
    const { username, Password, status, firstName, lastName } = req.body;
    const newUser = new User({
      username,
      Password,
      status,
      firstName,
      lastName,
    });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function logIn(username, password) {
  const user = await getUserByUsername(username);
  if (user) {
    if (user.password === password) {
      return { success: true, user: user };
    } else {
      return { success: false, error: "Incorrect password" };
    }
  } else {
    return { success: false, error: "User not found" };
  }
}

async function getUserByUsername(username) {
  const user = await User.find({ username: username });
  return user;
}

async function logOut(userId) {}

async function deleteUser(userId) {
  const user = await User.findById(userId);
  await User.deleteOne();
}

function editUser(userId, newInfo) {
  const response = { result: true, message: "Edited successfully!" };
  User.findOneAndUpdate({ _id: userId }, { ...newInfo }, (err) => {
    if (err) {
      response["result"] = false;
      response["message"] = "Unable to edit due to an error!";
    }
  });
  return response;
}

async function changePassword(userId, newPassword, oldPassword) {
  const user = await User.findById(userId);
  const response = { result: true, message: "Edited successfully!" };
  if (user) {
    if (oldPassword === user.password) {
      if (newPassword !== oldPassword) {
        User.findOneAndUpdate({ _id: userId }, { newPassword }, (err) => {
          if (err) {
            response["result"] = false;
            response["message"] = "Unable to update due to an error!";
          }
        });
        return response;
      } else {
        response["result"] = false;
        response["message"] = "New password same with old password";
      }
    } else {
      response["result"] = false;
      response["message"] = "Wrong password entered";
    }
  } else {
    response["result"] = false;
    response["message"] = "User does not exist!";
  }
}

module.exports = {
  logIn,
  logOut,
  deleteUser,
  editUser,
  changePassword,
  createUser,
};
