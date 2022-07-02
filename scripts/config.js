const btn = document.querySelector("#isBtn");
const input = document.querySelector("#numInput");
isBtn.disabled = true;
const baseUrl = `http://localhost:3000/fibonacci/`;
const resultsUrl = `http://localhost:3000/getFibonacciResults`;
let resultsList;
