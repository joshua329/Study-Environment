# Step-by-Step: Functions 101

This reading outlines the steps the instructor performs in the next video, [Functions 101](https://www.coursera.org/learn/ask-questions-make-decisions/lecture/BO2Ql/functions-101). In the video, the instructor demonstrates how to use spreadsheet functions to perform calculations.

Keep this step-by-step guide open as you watch the video. It can serve as a helpful reference if you need additional context or clarification while following the video steps. This is not a graded activity, but you can complete these steps to practice the skills demonstrated in the video.

**What you’ll need**

If you’d like to access the other spreadsheet the instructor uses in this video, click the link to the dataset to create a copy. If you don’t have a Google account, you may download the data directly from the attachments below.

Link to sales data: [Monthly sales - Functions 101](https://docs.google.com/spreadsheets/d/1YINveZ3IpAPDJZh-FWzC7vhGl-I29QeZ9Khie84qUWY/template/preview?resourcekey=0-f5_V9Bq_9iJES6diyhIquA#gid=0)

OR

[Monthly Sales - Functions 101XLSX File](https://d3c33hcgiwev3.cloudfront.net/6H0TG5SwT-eRs7BMjVuP6g_235b110ee66f4eef96266005696784f1_Monthly-Sales---Functions-101.xlsx?Expires=1718841600&Signature=gJLZ-3ryvkkeioQ~p~Zb1JhC~9HzOhFZT-afbnYgVAvUTt1g0gXq4TdEiBlRoCEUrdfoq9-60Oquec57-Z1c5Rzfy68g6L3GQPS5EwaoLxzuXwh9HF2612RehhHznwRzXDYFfbhsjis3RmVQx5ISSsnC189ddtpiP7NaLA0ocfw_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/9IUix0wGS6yFIsdMBlusaw_6bbb6dd9906a4adaaa9a9e09994dea05_line-y.png?expiry=1718841600000&hmac=RkcdTCTy0F-31cyEvWCCEUZ4uqAepZyzIl3VYjyZtYw)

## Example: Start with total sales

Use the SUM function to calculate the total value of a range of cells.

1. Open the [Monthly sales - Functions 101](https://docs.google.com/spreadsheets/d/1YINveZ3IpAPDJZh-FWzC7vhGl-I29QeZ9Khie84qUWY/template/preview?resourcekey=0-f5_V9Bq_9iJES6diyhIquA#gid=0) spreadsheet.
2. Select cell **F2**.
3. Enter =SUM(B2:E2) and press **Enter **to calculate the total sales for this time frame.

**Note: **The colon (:) between **B2 **and **E2 **in the formula indicates that you are specifying a range. In this case, it's the range of cells from **B2 **to **E2**. The SUM function will add up the values in these cells to calculate the total sales for the specified time frame.

## Example: Copy functions using the fill handle

Use the fill handle to quickly copy a function to many cells.

1. In the **Monthly Sales **spreadsheet, select cell **F2 **and click and hold the fill handle with your cursor. **			Note:** The instructor refers to the fill handle as a “little box,” but in newer versions or interfaces, it is a circle.
2. Drag the fill handle to include cells **F3 **and **F4 **and release the fill handle.
3. The total sales for 2018 and 2019 are in the reference cells **F3 **and **F4**, respectively. This happens because dragging the fill handle automatically updates the formula to account for the change in row, ensuring that the calculation remains accurate for each row you fill.
4. Click on cell **F3 **to display its formula in the formula bar. This is a toolbar that shows information contained in a cell. It allows you to inspect the formula and ensure the formula is updated when it is copied from cell **F2 **to cell **F3**.

## Example: Find the average sale

Use the AVERAGE function to find the average sale for each year.

1. In the **Monthly Sales** spreadsheet, select cell **G2**.
2. Enter =AVERAGE(B2:E2) and press **Enter **to calculate the average sales for 2017.
3. Use the fill handle or copy and paste the function from cell **G2 **to cells **G3 **and **G4 **to calculate the average sales for 2018 and 2019, respectively.

## Example: Use formulas for special cases

Some calculations may not have dedicated functions. For example, to calculate the percent change from June to July, you’ll need to use the percent change formula you used earlier in the course.

1. In the **Monthly Sales** spreadsheet, select cell **H2 **and enter =(E2-D2)/D2. Press **Enter **to calculate the percent change from June to July 2017.
2. Copy the function from cell **H2 **and paste it to cells **H3 **and **H4 **to calculate the percent change from June to July of 2018 and 2019, respectively.
3. Select reference cells **H2**, **H3**, and **H4 **and press the percentage (%) button to show the changes in percentages.

## Example: Find the lowest and highest sales

To find the lowest monthly sales (MIN function):

1. In the **Monthly Sales **spreadsheet, select cell **I1 **and enter Lowest Monthly Sales.
2. Select cell **I2 **and enter =MIN( , then use your cursor to select the values from all three rows, **B2:E4**, and then enter  )  to close the parenthetical. To select a block of cells: 																a. Click and hold your cursor on cell **B2**. 																			b. While holding the cursor, drag it across all the values you want to include in the calculation (in this case, from **B2 **to **E4**). 																											c. Release the cursor to select all the values and enter  )  . Your spreadsheet will automatically fill in the cell references for you.
3. This may be important information for your stakeholders, so fill the cell with a color to make it stand out: 		a. Select cell **D2**. 																									b. From the toolbar, choose the paint bucket icon. 																c. Select a color of your choice from the color palette that appears. That color will then fill cell **D2**.

To find the highest monthly sales (MAX function):

1. Select cell **J1 **and enter Highest Monthly Sales.
2. Select cell **J2 **and enter =MAX( , then use your cursor to select the values from all three rows, **B2:E4**, and then enter  )  to close the parenthetical.
3. This may be important information for your stakeholders, so select cell **E4 **and fill the cell with a color of your choice to make it stand out. 																						a. Select cell **E4**. 																									b. From the toolbar, choose the paint bucket icon. 																c. Select a color of your choice from the color palette that appears. That color will fill cell **E4**.

## Example: Fix errors

When you encounter errors, be sure to troubleshoot the format of your functions and formulas in the formula bar.
