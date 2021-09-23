/* Exercise
Let’s use Node to write “Hello, World!” to a web page. Reference the Intro to Node.js notes, and place the following code snippets in the correct place
http.createServer()
function(request, response) {}
response.writeHead()
response.end()
listen()
function(){console.log("Server listening...")}
With the code in place, change the port from 8080 to 3000
In your cmd prompt / terminal, navigate to the project directory
Once in the correct directory, run the following command: node app.js
Open your browser, and navigate to
 */
const http = require('http');


http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type":"text/html" });
    response.end("Hello World!");
  })
  .listen(3000, function () {
    console.log("Server listening...")
  });

