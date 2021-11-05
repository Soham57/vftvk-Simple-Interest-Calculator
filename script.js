function compute() {
  let principal = Number(document.getElementById("principal").value);
  let rate = Number(document.getElementById("rate").value);
  let noy = Number(document.getElementById("years").value);
  let result = document.getElementById("result");

  result.innerHTML = `If you deposit <mark>${principal}</mark>,<br>
  at an interest rate of <mark>${rate}</mark>.<br>
  You will recieve an amount of <mark>${principal * rate * noy}</mark>,<br>
  in the year <mark>${new Date().getFullYear() + noy}</mark>.`;
}
