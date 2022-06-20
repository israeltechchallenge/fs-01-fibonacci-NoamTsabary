const forLoop = (n) => {
    let fibIndex = [0, 1];
      for (let i = 2; i <= n; i++) {fibIndex[i] = fibIndex[i - 2] + fibIndex[i - 1];}
    return fibIndex[n];
};

function recursion (n, obj = {}) {
  if (n in obj) return obj[n];
  if (n === 0) return 0;
  if (n < 3) return 1;
  return (obj[n] = recursion(n - 1, obj) + recursion(n - 2, obj));
}

const print = (location, printed) => {
    document.querySelector(location).innerText = (printed)
}

const toggleClass = (location, theClass) => {
    let where = document.querySelector(location);
    if (where.classList.contains(theClass))
        where.classList.remove(theClass);
    else where.classList.add(theClass);
}

const limitError = () => {
    document.querySelector(".alert").classList.remove("d-none")
}

const reset = () => {
    document.querySelector(".alert").classList.add("d-none");
    result.classList.remove("red");
    print("#result", "");
}

input.addEventListener("keyup", () => {
    if (input.value === "" || input.value < 1) {
      isBtn.disabled = true;
      print("#result", "")}
    else 
      isBtn.disabled = false;
  });

