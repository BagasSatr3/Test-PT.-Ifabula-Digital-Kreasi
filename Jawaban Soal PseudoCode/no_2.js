function fibonacci(n) {
  let n1 = 0;
  let n2 = 1;
  let nextNum;
  let output = [];
  let output2 = "";
  for (let i = 0; i <= n; i++) {
    output.push(n1);
    output2 = `${output2} ${n1.toString()}`;
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
  }
  console.log(output);
  console.log(output2);
}

fibonacci(20);
