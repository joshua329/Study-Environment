# Import data dynamically

As you’ve learned, you can import data from some data sources, like .csv files into a Google spreadsheet from the **File **menu. Keep in mind that, when you use this method, data that is updated in the .csv will not automatically be updated in the Google Sheet. Instead, it will need to be manually—and continually—updated in the Google Sheet. In some situations, such as when you want to be able to keep track of changes you’ve made, this method is ideal. In other situations, you might need to keep the data the same in both places, and using data that doesn’t update automatically can be time-consuming and tedious. Further, trying to maintain the same dataset in multiple places can cause errors later on.

Fortunately, there are tools to help you automate data imports so you don’t need to continually update the data in your current spreadsheet. Take a small general store as an example. The store has three cash registers handled by three clerks. At the end of each day, the owner wants to determine the total sales and the amount of cash in each register. Each clerk is responsible for counting their money and entering their sales total into a spreadsheet. The owner has the spreadsheets set up to import each clerks’ data into another spreadsheet, where it automates and calculates the total sales for all three registers. Without this automation, each clerk would have to take turns entering their data into the owner’s spreadsheet. This is an example of a dynamic method of importing data, which saves the owner and clerks time and energy. When data is dynamic, it is interactive and automatically changes and updates over time.

![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/58E8op_PSomSH0dY_GT6fQ_8042f4e8c337441c9a42cd2366c0fff1_D1G010.png?expiry=1719446400000&hmac=HBUZVJulkd7a6Ypj0deTnm43d-r-sGnDx2l8YBzv8Mk)

In the following sections you’ll learn how to import data into Google Sheets dynamically.

## IMPORT functions in Google Sheets

### **The **IMPORTRANGE** function**

In Google Sheets, the IMPORTRANGEfunction can import all or part of a dataset from another Google Sheet.

To use this function, you need two pieces of information:

1. The URL of the Google Sheet from which you’ll import data.
2. The name of the sheet and the range of cells you want to import into your Google Sheet.

Once you have this information, open the Google Sheet into which you want to import data and select the cell into which the first cell of data should be copied. Enter = to indicate you will enter a function, then complete the IMPORTRANGEfunction with the URL and range you identified in the following manner: =IMPORTRANGE("URL", "sheet_name!cell_range"). Note that an exclamation point separates the sheet name and the cell range in the second part of this function.

An example of this function is:

=IMPORTRANGE("https://docs.google.com/thisisatestabc123", "sheet1!A1:F13")

**Note:** This URL is for syntax purposes only. It is not meant to be entered into your own spreadsheet.

Once you’ve completed the function, a box will pop up to prompt you to allow access to the Google Sheet from which you’re importing data. You must allow access to the spreadsheet containing the data the first time you import it into Google Sheets. Replace it with a spreadsheet’s URL that you have created so you can control access by selecting the Allow access button.

Refer to the Google Help Center's [IMPORTRANGE](https://support.google.com/docs/answer/3093340?hl=en&ref_topic=9199554) page for more information about the syntax. You’ll also learn more about this later in the program.

### **The **IMPORTHTML** function**

Importing HTML tables is a basic method to extract data from public web pages. This process is often called “scraping.” [Web scraping made easy](https://www.thedataschool.co.uk/anna-prosvetova/web-scraping-made-easy-import-html-tables-or-lists-using-google-sheets-and-excel) introduces how to do this with Google Sheets or Microsoft Excel.

In Google Sheets, you can use the IMPORTHTMLfunction to import the data from an HTML table (or list) on a web page. This function is similar to the IMPORTRANGE function. Refer to the Google Help Center's [IMPORTHTML](https://support.google.com/docs/answer/3093339?hl=en) page for more information about the syntax.

### **The **IMPORTDATA** function**

Sometimes data displayed on the web is in the form of a comma- or tab-delimited file.

You can use the IMPORTDATAfunction in a Google Sheet to import data into a Google Sheet. This function is similar to the IMPORTRANGE function. Refer to Google Help Center's [IMPORTDATA](https://support.google.com/docs/answer/3093335?hl=en) page for more information and the syntax.

**Go to next item**
