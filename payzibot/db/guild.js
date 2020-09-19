const mongoose = require('mongoose');
const guild = mongoose.Schema({
  guildID: String,
  premium: {type: Boolean, default: false},
  prefix: {type: String, default: 'p.'},
  currency: {type: String, default: '<:payzi_coin:732516111442116658>'},
  joinChannel: {type: String, default: '717326279942078514'},
  joinText: {type: String, default: 'Hello {member}!'},
  leaveChannel: {type: String, default: '717326279942078514'},
  leaveText: {type: String, default: 'GoodBye {member}'}
})
module.exports = mongoose.model("Guild", guild)