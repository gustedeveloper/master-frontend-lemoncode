console.log("#Check arguments");

function f(input) {
    return input === null ? "" : input || "Unknown";
  }
  
  console.log(f(undefined));
  
