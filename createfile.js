const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('File created!');
});
