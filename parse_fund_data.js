process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
  input_stdin += data;
});

process.stdin.on('end', function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine () {
    return input_stdin_array[input_currentline++];
}

/////////////// process stdin above this line ////////////////////

function getCumulativeReturn (returns) {
  let cumulative_return = returns.reduce(function (acc, value) {
    return acc + Number(value);
  }, 0);

  return cumulative_return;
}

function main () {
  let fund_name = readLine();
  let fund_year = readLine();
  let fund_returns = readLine().split(', ');

  let cumulative_return = getCumulativeReturn(fund_returns);

  console.log(fund_name);
  console.log(`Year: ${fund_year}`);
  console.log(`Cumulative Return: ${cumulative_return.toFixed(2)}%`);
}
