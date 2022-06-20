const fetchResult = async (n) => {
  const response = await fetch(`${baseUrl}${n}`);
  const contentType = response.headers.get('content-type');
  if (contentType.includes('application/json')) {
    const data = await response.json();
    return data.result;
  } else {
    const data = await response.text();
    result.classList.add("red")
    return `Server Error: ${data}`
  }
}

const runFibonacci = async (e) => {
  e.preventDefault();
  reset()
  toggleClass(".spinner-border", "d-none")
  if (input.value > 50) {
    toggleClass(".spinner-border", "d-none");
    limitError();
    return
  }
  else {
    const output = await fetchResult(input.value);
    toggleClass(".spinner-border", "d-none")
    print("#result", output);
  }
}

btn.addEventListener("click", runFibonacci); 




