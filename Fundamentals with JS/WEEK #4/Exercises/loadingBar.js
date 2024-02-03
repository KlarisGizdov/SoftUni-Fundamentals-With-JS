function loadingBar(num) {
    
  let loader = num / 10;
  let percentage = num + "%";

  if (num === 100) {

    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");

  } else {
    let loading = `${percentage} [${"%".repeat(loader)}${".".repeat(10 - loader)}]`;

    console.log(loading);

    console.log("Still loading...");
  }
}

loadingBar(100);
