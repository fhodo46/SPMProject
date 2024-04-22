const User = require("./models./user");

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

function changePassword(userId, password) {
  const response = { result: true, message: "Edited successfully!" };
  User.findOneAndUpdate({ _id: userId }, { password }, (err) => {
    if (err) {
      response["result"] = false;
      response["message"] = "Unable to edit due to an error!";
    }
  });
  return response;
}

module.exports = { logIn, logOut, deleteUser, editUser, changePassword };
