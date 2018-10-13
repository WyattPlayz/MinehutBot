exports.gettoken = function (supercode) {
  const fs = require('fs');
  const tokenfile = JSON.parse(fs.readFileSync("./files/token.json", "utf8"));
  var token = tokenfile[supercode];
  return token;
};