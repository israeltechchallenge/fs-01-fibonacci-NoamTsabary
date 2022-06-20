const forLoop = (n) => {
    let fibIndex = [0, 1];
      for (let i = 2; i <= n; i++) {fibIndex[i] = fibIndex[i - 2] + fibIndex[i - 1];}
    return fibIndex[n];
};

/* stole this one from your server. so don't give me credit :)
but it just runs much better than the one I came up with */
function recursion (n, obj = {}) {
  if (n in obj) return obj[n];
  if (n === 0) return 0;
  if (n < 3) return 1;
  return (obj[n] = recursion(n - 1, obj) + recursion(n - 2, obj));
}

const fetchResult = async (n) => {
  const response = await fetch(`${baseUrl}${n}`);
  const data = await response.json();
  return data.result;
}

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  const output = await fetchResult(input.value);
  print ("#result", output)
})


