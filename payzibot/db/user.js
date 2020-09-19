const mongoose = require('mongoose');
const user = mongoose.Schema({
  guildID: String,
  userID: String,
  coins: { type: Number, default: 0 },
  work: { type: Number, default: 0 },
  daily: { type: Number, default: 0 },
  warns: {type: Number, default: 0},
  age: {type: Number, default: 0},
  bio: {type: String, default: 'Отсутствует'},
  msg: {type: Number, default: 0},
  rep: {type: Number, default: 0}
})
module.exports = mongoose.model("User", user)