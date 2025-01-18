console.log("#Check arguments");

function f(input: string | null | undefined): string {
  return input === null ? "" : input || "Unknown";
}

console.log(f(undefined));
