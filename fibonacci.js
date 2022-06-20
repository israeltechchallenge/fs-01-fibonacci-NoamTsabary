let n = Math.floor(Math.random() * 11);

forLoop = (n) => {
    let fibIndex = [0, 1];
      for (let i = 2; i <= n; i++)
      fibIndex[i] = fibIndex[i - 2] + fibIndex[i - 1];
        return (fibIndex[n]);
  };

document.body.textContent = `The Fibonacci of ${n} is ${forLoop(n)}`