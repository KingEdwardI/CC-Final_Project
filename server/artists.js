var fs = require('fs');
var artistArr = [];

try {
	artistArr = fs.readFileSync('artist.txt').toString().split("\n");
} catch (e) {
  artistArr = [];
}
module.exports = artistArr;
