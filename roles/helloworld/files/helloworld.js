var http = require("http");

http
  .createServer(function(request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { "Content-Type": "text/plain" });

    // Send the response body as "Hello World"
    response.end(
      "Ansible is a radically simple IT automation engine that automates cloud provisioning, configuration management, application deployment, intra-service orchestration, and many other IT needs.\n"
    );
  })
  .listen(3000);

// Console will print the message
console.log("Server running");
