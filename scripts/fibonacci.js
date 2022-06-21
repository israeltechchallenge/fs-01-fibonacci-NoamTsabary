const fetchResult = async (n) => {
  const response = await fetch(`${baseUrl}${n}`);
  const contentType = response.headers.get('content-type');
  if (contentType.includes('application/json')) {
    const data = await response.json();
    return data.result;
  } else {
    const data = await response.text();
    switchClass("#result", "red", true)
    return `Server Error: ${data}`
  }
}

const runFibonacci = async (e) => {
  e.preventDefault();
  reset();
  switchClass(".topSpinner", "d-none", false)
  if (input.value > 50) {
    switchClass(".topSpinner", "d-none", true);
    switchClass(".alert", "d-none", false)
    return
  } 
  let checkbox = document.querySelector("#flexCheckDefault");
  let output;
  if (checkbox.checked) {
    output = await fetchResult(input.value);
    loadResults();
  } else {
    output = forLoop(input.value);
  }
  switchClass(".topSpinner", "d-none", true);
  print("#result", output);
}

const loadResults = async () => {
  switchClass(".resultSpinner", "d-none", false)
  let response = await fetch(resultsUrl);
  let data = await response.json();
  createResultsHTML(data.results);
};

loadResults();

btn.addEventListener("click", runFibonacci); 




