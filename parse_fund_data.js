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

function arrayValuesToNumbers (array) {
  let array_numbers = array.map(function (value) {
    return Number(value);
  });

  return array_numbers;
}

function getCumulativeReturn (returns) {
  let cumulative_return = returns.reduce(function (acc, value) {
    return acc + value;
  }, 0);

  return cumulative_return;
}

function getPercentPositive (returns) {
  let pos_count = 0;

  for (let i = 0; i < returns.length; i++) {
    if (returns[i] > 0) {
      pos_count += 1;
    }
  }

  return (pos_count / returns.length * 100);
}

function getBestMonth (returns) {
  let best_month = returns[0];

  for (let i = 0; i < returns.length; i++) {
    if (returns[i] > best_month) {
      best_month = returns[i];
    }
  }

  return best_month;
}

function main () {
  let fund_name = readLine();
  let fund_year = readLine();
  let fund_return_strings = readLine().split(', ');
  let fund_returns = arrayValuesToNumbers(fund_return_strings);

  let cumulative_return = getCumulativeReturn(fund_returns);
  let percent_positive = getPercentPositive(fund_returns);
  let best_month = getBestMonth(fund_returns);

  console.log(fund_name);
  console.log(`Year: ${fund_year}`);
  console.log(`Cumulative Return: ${cumulative_return.toFixed(2)}%`);
  console.log(`% Positive Months: ${percent_positive.toFixed(2)}%`);
  console.log(`Best Month: ${best_month.toFixed(2)}%`);

  return 0;
}
