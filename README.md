# parse-fund-data
Parses text file input and outputs formatted information for a given fund.

### Input Format:
Each text file input will contain three lines:

1. The first line is the name of the fund.
2. The second line is the year of the fund.
3. The third is 12 comma-separated numbers representing monthly returns for one year.

#### Input Format Assumptions:
1. Input files should be provided in an _ASCII_ encoded _.txt_ file.
2. Input is split into lines delimited by newline characters.
3. The file should consist of exactly three lines, outlined in the order and format described above.
4. The final line of input is terminated by a newline character.
5. Fund Monthly Returns should be valid numbers and each separated by a comma.

### Output Format:

##### Scenario 1:

Input:
```
Bloomberg Barclays US Aggregate Bond TR USD   
2016
1.38, 0.71, 0.92, 0.38, 0.03, 1.80, 0.63, -0.11, -0.06, -0.76, -2.37, 0.14
```

Output:
```
Bloomberg Barclays US Aggregate Bond TR USD   
Year: 2016
Cumulative Return: 2.66%
% Positive Months: 66.66%
Best Month: 1.80%
```

##### Scenario 2:

Input:
```
S&P 500 PR   
2016
-5.07, -0.41, 6.60, 0.27, 1.53, 0.09, 3.56, -0.12, -0.12, -1.94, 3.42, 1.82
```

Output:
```
S&P 500 PR   
Year: 2016
Cumulative Return: 9.55%
% Positive Months: 58.33%
Best Month: 6.60%
```

### Execution:
To execute and parse the fund information file, you must have Node.js installed and executable from the terminal. After downloading the file and any with at least one fund input _.txt_ file available, you should be able to run
```
node parse_fund_data.js < input_one.txt
```
where _input\_one.txt_ is the filepath to the input file you'd like to parse.
