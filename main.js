const express = require('express');
const app = express();

// app.get('/', function (request, response) {
//   response.send('Hello World');
// });

// "./" current directory
// "../" previous directory

app.use('/', express.static('public'));

app.listen(3000, function(){
  //console.log('Server is running on port 3000');
});
