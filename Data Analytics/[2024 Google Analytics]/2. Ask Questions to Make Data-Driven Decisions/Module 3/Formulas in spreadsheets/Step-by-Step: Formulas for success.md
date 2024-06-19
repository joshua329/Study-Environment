# Step-by-Step: Formulas for success

This reading outlines the steps the instructor performs in the next video, [Formulas for success](https://www.coursera.org/learn/ask-questions-make-decisions/lecture/s4RlB/formulas-for-success).  In the video, the instructor explains the basics of using spreadsheet formulas for calculations.

Keep this step-by-step guide open as you watch the video. It can serve as a helpful reference if you need additional context or clarification while following the video steps. This is not a graded activity, but you can complete these steps to practice the skills demonstrated in the video.

### **What you’ll need**

If you’d like to follow along with the first example in this video, choose a spreadsheet tool and open a blank sheet.

If you would like to access the other spreadsheet the instructor uses in this video, click the link to the dataset to create a copy. If you don’t have a Google account, download the data directly from the attachments below.

Link to sales data: [Monthly sales](https://docs.google.com/spreadsheets/d/1XXpOhZu7preCSI9aIhwTXAVwMLjf0CxM-rRZrEdImdk/template/preview)

OR

[Monthly SalesXLSX File](https://d3c33hcgiwev3.cloudfront.net/ktl3n81YTE28QBlSK10L-g_bf3842d4369a4d2ab5ec233ab7cf16e1_Monthly-Sales.xlsx?Expires=1718841600&Signature=JJSH3KiqO~LhOc29wuOdUuW~4lwOsIfDFXTFxhs~eeZEma0i9hMlXcVqp5dnJUiHMm2py~zYxhpShn~RKcxGlp5hjLANf-pApYhtHnFubqw1mO2HCzva7vhotgw1a-PvX~716wfQvpX7WuXZ27lqRBmIAqVRb-8JoqIkfuq5ejo_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/9IUix0wGS6yFIsdMBlusaw_6bbb6dd9906a4adaaa9a9e09994dea05_line-y.png?expiry=1718841600000&hmac=RkcdTCTy0F-31cyEvWCCEUZ4uqAepZyzIl3VYjyZtYw)

## Example 1: Create a formula

Formulas form the groundwork for more complex spreadsheet tasks. Here’s a simple exercise:

1. Open a new spreadsheet.
2. Select cell **A1**.
3. Enter =2-2 and then press **Enter**. The cell displays the result of **0**.
4. Select cell **A2**.
5. Enter =31982-17795 and press **Enter**. The cell displays the result 14187.

**Note: **The equal sign (=) signifies that you're beginning a formula.

## Example 2: Use cell references in a formula

Cell references make your spreadsheet flexible and responsive to data changes. To implement this:

1. Open the [Monthly sales](https://docs.google.com/spreadsheets/d/1XXpOhZu7preCSI9aIhwTXAVwMLjf0CxM-rRZrEdImdk/template/preview) spreadsheet.
2. To find the total sales for April through July of 2017, select cell **F2**.
3. Enter the formula =B2+C2+D2+E2 and then press **Enter**. You now have the total sales for this timeframe.
4. But what if the data in one of the cells was incorrect? Select cell **D2 **and enter **47002 **to correct the entry. Press **Enter**.
5. Notice that your spreadsheet automatically recalculates the sum in cell **F2**.

## Example 3: Copy a formula

Copying and pasting formulas saves time and helps ensure consistency across your calculations. To do this:

1. In the **Monthly sales** spreadsheet, select cell **F2**.
2. From the **Edit **menu, choose **Copy**. You can also use the Windows keyboard shortcut **Ctrl+C **or Mac keyboard shortcut** Command+C** to copy the formula.
3. Select cell **F3 **and from the **Edit **menu, choose **Paste**. Alternatively, press **Ctrl+V** (Windows) or **Command+V** (Mac) to paste the formula into cell **F3**.

**Note: **After pasting into cell **F3**, the formula in that cell will be =B3+C3+D3+E3.

## Example 4: Calculate the average sales

Use formulas for different calculations, such as finding an average:

1. In the **Monthly sales **spreadsheet, select cell **G1**.
2. Enter **Average Sales** in cell **G1 **and press **Enter**.
3. Select cell **G1 **again. In the toolbar, select **Bold **to bold the text. 												**Note:** Naming columns in spreadsheets enhances clarity by indicating the purpose of the numbers.
4. Select cell **G2**.
5. Enter =(B2+C2+D2+E2)/4 and press **Enter **to calculate the average sales over this timeframe. **		
   Note: **This formula calculates the average of sales for the month, including cases in which there are no sales (blank cells), which are treated as zeroes in the calculation. If the business had zero sales for a month, the blank cell is still included in the calculation to maintain accuracy.
6. Copy and paste the formula from cell G2 into cells **G3 **and **G4**.

## Example 5: Calculate the percent change in sales

Use a different formula to calculate percent change:

1. In the **Monthly sales **spreadsheet, select cell **H1**.
2. In cell **H1**, enter **June to July Change**. Bold this text.
3. In cell **H2**, enter =(E2-D2)/D2 to calculate the percentage change in sales.
4. To format the value as a percentage, on the toolbar, select the **%** button. You now find that the percent change in sales between June and July is 247.5%.
5. Copy this formula to cell **H3**. Notice that the spreadsheet copies both the formula and the percentage formatting.

## Example 6: Correct a formula error

Correcting formula errors ensures your data analysis remains accurate and trustworthy. Here’s how to troubleshoot one common mistake:

1. In the **Monthly sales** spreadsheet, copy the formula from cell **H2 **to cell **H4 **and press **Enter**.
2. Notice the error displayed in cell **H4**. This error occurs because the formula is trying to divide by a value of zero. The reason for this error is that cell D4 is blank, and in this context, the spreadsheet interprets it as having a value of zero.
3. To resolve the error, type **75866 **in cell **D4 **and press **Enter**. Notice that the error disappears, and cell **H4 **now displays **121.16%**.
