const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

// Helper functions

function getWelcomeMessage() {
  let message = 'Welcome to our services!!!';
  return message;
}

function greetMessage(name) {
  return 'Hello, ' + name + '!';
}

function checkPasswordStrength(pass) {
  if (pass.length > 15) {
    return 'strong';
  }
  return 'weak';
}

function getSum(n1, n2) {
  let sum = n1 + n2;
  return sum.toString();
}

function subscriptionStatus(name, status) {
  if (status === 'true') {
    return `${name} is subscribed`;
  } else {
    return `${name} is not subscribed`;
  }
}

function discountedPrice(amount, disc) {
  let finalPrice = amount - (disc * amount) / 100;
  return finalPrice.toString();
}

function getPersonalizedGreetings(age, gender, name) {
  return `Hello, ${name}! You are a ${age} year old ${gender}.`;
}

function getFinalPrice(price, discount, tax) {
  let discountedPrice = price - (price * discount) / 100;
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);
  return finalPrice.toString();
}

function getTotalExerciseTime(running, cycling, swimming) {
  return (running + cycling + swimming).toString();
}

// API's

app.use(express.static('static'));

app.get('/welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(greetMessage(username));
});

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send('Password is ' + checkPasswordStrength(password));
});

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);

  res.send(getSum(num1, num2));
});

app.get('/subscription-status', (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;

  res.send(subscriptionStatus(username, isSubscribed));
});

app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);

  res.send(discountedPrice(price, discount));
});

app.get('/personalized-greeting', (req, res) => {
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;

  res.send(getPersonalizedGreetings(age, gender, name));
});

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);

  res.send(getFinalPrice(price, discount, tax));
});

app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);

  res.send(getTotalExerciseTime(running, cycling, swimming));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
