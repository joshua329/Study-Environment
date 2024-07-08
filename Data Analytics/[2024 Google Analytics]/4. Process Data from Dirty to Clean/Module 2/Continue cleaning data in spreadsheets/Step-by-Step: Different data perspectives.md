# Step-by-Step: Different data perspectives

This reading outlines the steps the instructor performs in the next video, [Different data perspectives](https://www.coursera.org/learn/process-data/lecture/BcY0L/different-data-perspectives). The video teaches you different methods data analysts use to view data differently and how looking at different views leads to more efficient and effective data cleaning.

Keep this step-by-step guide open as you watch the video. It can serve as a helpful reference if you need additional context or clarification while following the video steps. This is not a graded activity, but you can complete these steps to practice the skills demonstrated in the video.

### **What you’ll need**

If you’d like to follow along with the examples in this video, choose a spreadsheet tool. Google Sheets or Excel are recommended.

To access the spreadsheet the instructor uses in this video, click the link to the template to create a copy of the dataset. If you don’t have a Google account, download the data directly from the attachments below.

Link to template: [Cosmetics, Inc](https://docs.google.com/spreadsheets/d/1J8wiEi7R9Jt3kNOjV1Bp-w1Zw1GvIbXgd78EeoXT9Mg/template/preview).

OR

[Cosmetics Inc. - Data for Pivot Table and VLOOKUPXLSX File](https://d3c33hcgiwev3.cloudfront.net/mjJpNpPfRiC7blak2QdsSA_f5269cdfb2da42ddb06577759b173be1_Cosmetics-Inc.---Data-for-Pivot-Table-and-VLOOKUP.xlsx?Expires=1720310400&Signature=kr5DiTmWD7g9lAtIKc9H1FD~Wc4WD~wjKQ70oyj33L5v4f3b~TQ0PXU6bTxaWWVRUqASt21Vv41T9zCIfHk39GPCWFEQK7ICkxbmvr8SfRwYX4svOvSnz4FzTWOyXWcN2J9I87mFoOFo8wsGg4pOMHTry8-zs-pE0irAejZmL98_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/3UWxlyqNRxaFsZcqjZcWgQ_3fd91ae61ce04caaa755c3477a337947_line-y.png?expiry=1720310400000&hmac=fdbxbzkNAEkwQRyTBhkUBlx6CtrN-nVcOCQ1Fu_2eYs)

## Example 1: Pivot tables

A pivot table is a data summarization tool. It can be used in data processing and in data cleaning, for which pivot tables offer a quick, clutter-free view of your data. Pivot tables help sort, reorganize, group, count, total, or average data in a dataset.

1. In the Cosmetics Inc.spreadsheet, select the data you'll include. In this case, select all of the data in Sheet 1 of the spreadsheet by selecting cell **A1** then dragging your cursor to cell **F31**.
2. Select **Insert**, then **Pivot Table**. Choose **New sheet** and **Create**. Google Sheets creates a new sheet where you can define the pivot table.
3. Use the **Pivot table editor** to add specific data to your pivot table.

   a. In the **Pivot table editor** panel, next to **Rows**, select **Add**.

   b. From the columns list, select **Total**.

   c. Below **Rows**, from the **Order** dropdown list, select **Descending** to put the most profitable items at the top.

   d. Next to **Rows**, select **Add**.

   e. From the column list, select **Products**.

   f. Notice that the top two most ordered products are **15143Exfo** and **32729Masc**. The rest of the orders total less than $10,000.

## Example 2: VLOOKUP

VLOOKUP is a spreadsheet function that vertically searches for a certain value in a column to return a corresponding piece of information. It's rare for all of the data an analyst will need to be in the same place. Usually, you'll have to search across multiple sheets or even different databases. VLOOKUP helps bring the information together.

In the previous example, you found the product codes of the most ordered products. Now, you’ll use VLOOKUP to find the names of these products.

1. Select the Sheet 1 tab to navigate to Sheet 1 of the spreadsheet.
2. Select cell **H2**.
3. Enter =VLOOKUP(A2, 'Sheet 2'!A1:B31, 2, false)
   1. **Note:** This references information in another sheet. Make sure you have Sheet 2 in your workbook.
   2. This formula will take the value in cell **A2** of **Sheet 1** and check for that value in **Sheet 2** among the cells from **A1:B31** in the 2nd column (which corresponds with the 2 in the formula). Because the formula includes “false,” it will search only for an exact match. It will then output the value of column **B** in Sheet 2 as the result.
4. Press **Enter **to input the formula. The result is LashX Mascara.
5. Next, **select the cell** and **drag **the fill handle in the lower-right corner down to populate the other cells in the sheet with the formula.
6. To find the names of the two most profitable products you identified in the previous example use the find and replace tool.
   1. Select **Edit > Find and Replace**.
   2. In the **Find **text box, enter the product code for the most profitable product, **15143Exfo**.
   3. Select **This sheet **from the dropdown list next to **Search**.
   4. Select **Find **to find any cells in this sheet that contain this product code.
   5. Notice that cell **A31** is a match. This means the VLOOKUP search you ran in Column **H31** contains the name of the most profitable product: **SoSoft Exfoliator**.
   6. Repeat steps a-d with the product code **32729Masc** to find the product name of the second most profitable product. Cell **A27** contains **32729Masc**, so the product name is **Darkest Lashes Mascara**.

## Example 3: Plotting

The plotting tool allows analysts to quickly create a graph, chart, table, or other visual from data. Plotting is useful for identifying skewed data or outliers.

1. In **Sheet 1** of the *Cosmetics, Inc. *spreadsheet, **select column B**, which contains the prices.
2. **Select Insert > Chart**.
   1. If the chart created is not a column chart, select **Column chart** from the dropdown menu under **Chart type** in the **Chart editor**.
   2. Select and drag the chart to the right so you can view the data in the sheet.
3. Check for obvious outliers and fix them in the spreadsheet. For example, you might notice that an item in the middle of the chart has an extremely low price of $0.73. The decimal point is in the wrong place. In cell **B14**, correct this price to $7.30, and notice that Google Sheets automatically updates the chart.
