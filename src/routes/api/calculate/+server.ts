import express from 'express';

const app = express();
const port = 3000;

let display = '';

// Endpoint for handling the POST request
app.post('/calculate', (req, res) => {
  const { num1, num2, operator } = req.body;

  let result = '';

  switch (operator) {
    case '+':
      result = String(Number(num1) + Number(num2));
      break;
    case '-':
      result = String(Number(num1) - Number(num2));
      break;
    case '*':
      result = String(Number(num1) * Number(num2));
      break;
    case '/':
      result = String(Number(num1) / Number(num2));
      break;
    default:
      break;
  }

  // Update the display value
  display = `${num1} ${operator} ${num2} = ${result}`;

  // Send a response indicating success
  res.json({ success: true, result });
});

// Endpoint for handling the GET request
app.get('/display', (req, res) => {
  // Return the current display value
  res.json({ display });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});