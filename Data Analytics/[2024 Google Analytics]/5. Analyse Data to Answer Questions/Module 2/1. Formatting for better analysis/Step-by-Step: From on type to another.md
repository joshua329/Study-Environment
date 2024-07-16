# Step-by-step: From on type to another

This reading provides you with the steps the instructor performs in the following video, [From one type to another](https://www.coursera.org/learn/analyze-data/lecture/FOAwr/from-one-type-to-another). Watch as the instructor demonstrates how to format numbers and convert units of measurement in your spreadsheets.

Keep this step-by-step guide open as you watch the video. It can serve as a helpful reference tool if you need additional context or clarification while following the video steps. This is not a graded activity, but you can complete these steps to practice the skills demonstrated in the video.

**What you’ll need**

If you’d like to access the spreadsheets the instructor uses in this video, click the links to the dataset to create a copy. If you don’t have a Google account, you may download the data directly from the attachments below.

Link to movie data starter project: [Movie data starter project](https://docs.google.com/spreadsheets/d/1FLaUmMn62YlHYihV6pK1DJqWcFYCnuoqoxFWmm_o5b0/template/preview).

Link to weather table - data for convert: [Weather Table - Data for CONVERT](https://docs.google.com/spreadsheets/d/15VeWQLQ5lUKvywYJL-0cGqmehvE8OH8W9cOlJ2P0J_I/template/preview).

OR

[Movie Data Starter ProjectXLSX File](https://d3c33hcgiwev3.cloudfront.net/7rkSg1b6TCeiM37bJ_iPQA_cc9c5dd03dbe4e09bc83a3c244e4d6e1_Movie-Data-Starter-Project.xlsx?Expires=1720915200&Signature=dGZus4QMlqmj5UvP~T7SG0pS-ZaEc~CAY7KJVxg3jDs4IoZIYYMy96m5RDX3Sg0HKW2l9rpRXoVyqwGNNmNKWke9YeMRodNaiZ79oDk6yogZ0jIN~ciVHrtHWNRyD8~2ZUehS4zWgybTcE9rI7qkDafS-kmuv2I8MIEmV0c5-N8_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

[Weather Table - Data for CONVERTXLSX File](https://d3c33hcgiwev3.cloudfront.net/dtqtPkiTSV27NcIQALH5gw_e797db6bf7374b11b5e41841e34d71e1_Weather-Table---Data-for-CONVERT.xlsx?Expires=1720915200&Signature=SSr9IUBY9klNCtRrduXKbvt6194Zqn2KldYsa0rcsAZOi9AhZRF96~RhqNzhsII09BssBqoXtv1Hm9yvPtlsDYP7ORSwYY6VvBL8MUsGHSCivEoD2f2XScZDWfKxKYByXEDfV8YePFvsWxI3I7JcHqiH~9Sl~mPX3PbiXBvrahM_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

![empty alt text](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/Z65IW3QCSOmuSFt0Aijp8w_914270a3d2e84027b46e404f7a52007f_line-y.png?expiry=1720915200000&hmac=WbJQbKzFzih5yhviFquEYvr9hBtG_zSDQteieZ6vdQI)

## Example 1: Check and change data type

Check your data for inconsistent units of measurement to prevent problems during data analysis.

1. Open the [**Movie Data Starter Project**](https://docs.google.com/spreadsheets/d/1FLaUmMn62YlHYihV6pK1DJqWcFYCnuoqoxFWmm_o5b0/template/preview) spreadsheet using the link in the video.
2. Select **Column M** [Budget ($)] and **Column N** [Box Office Revenue ($)].
3. From the menu, select **$**, the currency shortcut key.
4. Notice that the currency in **Columns M** and **N** are now formatted correctly.

## Example 2: Convert temperatures from Fahrenheit to Celsius

Use the CONVERT function to change units of measurement.

1. Open the [**Weather Table - Data for CONVERT**](https://docs.google.com/spreadsheets/d/15VeWQLQ5lUKvywYJL-0cGqmehvE8OH8W9cOlJ2P0J_I/template/preview) spreadsheet using the link in the video.
2. Select cell **F2** and begin typing the Convert function formula as =CONVERT.
3. Indicate the cell you want to convert. After =CONVERT, enter (B2,.
4. Indicate the conversion you’d like to make: from Fahrenheit to Celsius. Enter"F", "C").
5. The formula in its entirety should look like this: =CONVERT (B2, "F", “C”).
6. Cell **F2 **now contains the temperature from cell **B2** in Celsius.
7. Calculate temperature in Celsius for the rest of the column. Hover over cell **F2 **and select the fill handle, a small circle on a corner of the cell. Drag the fill handle to cell **F193 **to convert the other cells in the column to Celsius.

**Note**: Would you like more practice? Try converting the wind speed in Column **D** from miles per hour (mph) to meters per second (m/s) using CONVERT.  In cell **H2**, enter: =CONVERT(D2, "mph", "m/s").

You can check if your conversion is correct by entering 8.5248 in a metric conversion tool,[ metric-conversions.org/speed/miles-per-hour-to-meters-per-second.htm](https://www.metric-conversions.org/speed/miles-per-hour-to-meters-per-second.htm).

## Example 3: Lock data in a table

Using functions to convert data can lead to problems, which data professionals must be prepared to fix. For example, if a reference value changes, the calculated value also changes. Locking data in a table by changing it from a function to a value ensures a cell stays consistent even if the data around it changes.

1. Select cell **F2**. In the formula bar, notice that the contents of this cell are the function you entered in the previous example.
2. Right-click cell **F** and select **Copy **from the drop-down menu.
3. Right-click cell **G** and select **Paste special **from the drop-down menu. Then, select **Paste values only**. This option pastes only the values from the original selection, removing any formatting, functions, or other information.
4. Select cell **G2**.
5. In the formula bar, notice that the contents of this cell is a value. This means that the value won’t change when other cells change.
