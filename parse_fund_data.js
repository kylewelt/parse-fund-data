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

function main () {
  let fund_name = readLine();
  let fund_year = readLine();
  let fund_returns = readLine().split(', ');
}
