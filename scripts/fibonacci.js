const btn = document.querySelector("#isBtn")
const input = document.querySelector("#numInput");

const forLoop = (n) => {
    let fibIndex = [0, 1];
      for (let i = 2; i <= n; i++)
      fibIndex[i] = fibIndex[i - 2] + fibIndex[i - 1];
        print("#result", fibIndex[n]);
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  forLoop(input.value);
})


