const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var errorMessage = "<h1>404</h1><p>please try again.</p>";

app.use(bodyParser.urlencoded({extended: true}));
app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var operator = req.body.option;

  function calculate(n1, n2, option) {
    var result = 0;

    if (operator == "+") {
      result = n1+n2;
      res.send("The sum of " + n1 + " and " + n2 + " is " + result);
    } else if (operator == "-") {
      result = n1-n2;
      res.send("The difference of " + n1 + " and " + n2 + " is " + result);
    } else if (operator == "/") {
      result = n1/n2;
      res.send("The quotient of " + n1 + " and " + n2 + " is " + result);
    }
    else if (operator == "%") {
        result = n1%n2;
        res.send("The remainder of " + n1 + " and " + n2 + " is " + result);
      }
     else if (operator == "*") {
      result = n1*n2;
      res.send("The product of " + n1 + " and " + n2 + " is " + result);
    } else {
      res.send(errorMessage);
    }
  }

  calculate(num1, num2, operator);

});
app.listen(3001, (res) =>{
    console.log('Server is on port 3001')
})