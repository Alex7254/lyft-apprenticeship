# Basic API

A basic API that accepts a POST request to the route “/test”, which accepts one argument “string_to_cut”. 
It then returns a JSON object with the key “return_string” and a string containing every third letter from the original string

**Run locally by typing `node .`**

Test by using : `curl -X POST http://localhost:8080/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'`

