var response = require("http/v4/response");

var message = "Hello Cloud Tool Time 2021";

response.println(message);
response.flush();
response.close();