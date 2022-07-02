const dontPanic = async () => {
    switchClass("#result", "d-none", true)
    document.body.style.backgroundPosition = "center";
    document.body.style.height = "100vh";
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "85vh", "85vw";
    let flashTime = 200;
    let flashRepeat = 5;
    let repeatKey = (flashTime*2)*flashRepeat + 400;
    panic(flashTime, repeatKey, "url('./images/don-t-panic-word-white-background-d-rendering-169138542.jpg')");
    return
  };
  
  const panic = async (timeout, repeats, path) => {
    if (path === "")
      path = "url('./images/don-t-panic-word-white-background-d-rendering-169138542.jpg')"
    else
      path = ""
    setTimeout(() => {
    document.body.style.backgroundImage = path;
    }, timeout);
    timeout += 200;
    if (timeout < repeats)
      panic(timeout, repeats, path);
    else
      setTimeout(() => {
        switchClass("#result", "d-none", false)
      }, repeats); 
  };