const forLoop = (n) => {
    let fibIndex = [0, 1];
      for (let i = 2; i <= n; i++) {
        fibIndex[i] = fibIndex[i - 2] + fibIndex[i - 1];
      }
      return fibIndex[n];
};

function recursion (n, obj = {}) {
  if (n in obj) return obj[n];
  if (n === 0) return 0;
  if (n < 3) return 1;
  return (obj[n] = recursion(n - 1, obj) + recursion(n - 2, obj));
};

const print = (identifier, printed) => {
    document.querySelector(identifier).innerText = (printed);
};

const switchClass = (identifier, theClass, bool) => {
  let where = document.querySelector(identifier);
  bool ? where.classList.add(theClass) : where.classList.remove(theClass);
};

const reset = () => {
    switchClass(".form-control", "input-red", false);
    switchClass(".alert", "d-none", true);
    switchClass("#result", "red", false);
    print("#result", "");
};

const cleanList = () => {
  let lines = document.querySelectorAll(".line");
  lines.forEach.call(lines, (line) => {
    line.remove()
  });
};


const createResultsHTML = (resultsLog) => {
  cleanList();
  let fragment = new DocumentFragment;
  for (let i of resultsLog) {
    const line = document.createElement("div");
    line.classList.add("line", "py-2");
    
    const spanA = document.createElement("span");
    spanA.innerText = `The Fibonacci of `;
    const boldNum = document.createElement("strong");
    boldNum.innerText = i.number;
    const spanB = document.createElement("span");
    spanB.innerText = ` is `;
    const boldRes = document.createElement("strong");
    boldRes.innerText = i.result;
    const spanC = document.createElement("span");
    spanC.innerText = ". Calculated at: ";
    const spanD = document.createElement("span");
    spanD.innerText = new Date(i.createdDate);

    line.append(spanA, boldNum, spanB, boldRes, spanC, spanD);
    fragment.append(line);
  }
  switchClass(".resultSpinner", "d-none", true);
  document.querySelector("#results").append(fragment);
};

input.addEventListener("keyup", () => {
    if (input.value === "" || input.value < 1) {
      isBtn.disabled = true;
      print("#result", "")}
    else 
      isBtn.disabled = false;
  });

