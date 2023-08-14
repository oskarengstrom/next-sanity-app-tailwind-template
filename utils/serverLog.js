const util = require("util");

export default function serverLog(data, depth = null) {
  return console.log(util.inspect(data, { colors: true, depth }));
}
