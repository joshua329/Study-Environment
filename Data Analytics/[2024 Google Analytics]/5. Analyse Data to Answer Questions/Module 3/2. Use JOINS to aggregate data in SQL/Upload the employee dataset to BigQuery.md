# Upload the employee dataset to BigQuery

This reading outlines the steps you need to perform before watching the video and following along in the step-by-step guide, [Explore how JOINs work](https://www.coursera.org/learn/analyze-data/lecture/uLZJH/how-joins-work "how joins work step-by-step guide; opens in new tab").

**What you will need**

Download the two .csv files from the attachments below:

[Employees Table - Understanding JOINSCSV File](https://d3c33hcgiwev3.cloudfront.net/TMwinKTQQ2aYTZGdcL0Fog_84586bd2265a4888af22e8060747c8e1_Employees-Table---Understanding-JOINS.csv?Expires=1722556800&Signature=SjTyDMNEN~mDR9HtEpOpgKrG6ttCyLR3jUid~kFCoLc8PzW2FJHK6FZuwkj4O0v~GdpREOYBPRnBGeElxj3wusk9ZgJtq~0dAHOWMY91KeKTOOjUK5u6JZQPoKOcr7JFLT1u0S-ppX53exPAhj46bYkkyYcExBq8-8FohcuvQVQ_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

[Departments Table - Understanding JOINSCSV File](https://d3c33hcgiwev3.cloudfront.net/9vVSOuERRjusAUScVM-rOw_d98f88a17db84f198dee412210c13ae1_Departments-Table---Understanding-JOINS.csv?Expires=1722556800&Signature=d3ACHAdFepTPBWZ3wOz4y624J5v~Q~zgGn7Ae20IxKnxzU-l4CmRZ1RoQli700rn0IK~Br2dGbcIy97hMWYQ8-CvEszpyqhyZLIABS1ATdx07rr2r5rgAOwOgc0-NbHuDJwqDT45zao1mcgMu4o-InmQQUKRfS-uID6NGr-lnPQ_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

Then, log in to your BigQuery account and follow along with this reading to upload the employee data provided as two new tables.

## Prepare for the next video

### **Create a new dataset**

1. Open your BigQuery console and select the project to which you’ll upload data. For the purpose of this reading, the example project is named **dac5bigquery**. Your project will have a different name.
2. From the **Explorer **pane, select the **Actions **icon (the three vertical dots) next to your project name. Then select **Create dataset**.

![The Explorer panel displaying one project. The Actions menu is open, showing two options: Create dataset and Refresh contents](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/NR_QFZ3BQhqcygpaDyEh9g_9f5351d966d64325a818c3a407b8cee1_DAC5M3L1_R1_Image1-Create-new-dataset.png?expiry=1722556800000&hmac=QoBCRuBCQdZbpeHko8Pp020XK6K518GUaodUlfVIWQU)

3. In the **Create dataset** window, enter **employee_data** for the **Dataset ID**.
4. Make sure the **Location type** is set to **Multi-region** with **US(multiple regions in the United States)** selected.
5. Leave the **Advanced options** set to their default settings.

![The Create dataset pane displaying the necessary options to create a new dataset titled “employee_data”](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/gcm5KisNRJ6_y3WoFp1p-w_50d5329b61d14bf9a6d1ba3447cd7fe1_DAC5M3L1_R1_Image2-Create-new-dataset-details.png?expiry=1722556800000&hmac=JsMRCEZFwwS1aUgbkwdOodNsJLJMAFrgQDVfMyJE3w0)

6. Select **CREATE DATASET** to add the dataset to your project. It will now appear under your project in the **Explorer **pane. If you don’t see the new dataset listed, select the arrow next to your project in the **Explorer **pane to expand its contents.
7. In the **Explorer **pane, select the **employee_data** dataset you just created. The **Dataset info** window opens in the **Details **pane.

![The Dataset info pane displaying the information for the employee_data dataset](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/VkfDh92vROORr820wecgTQ_4ff9a132ab7e445e80fa36c7104350e1_DAC5M3L1_R1_Image3-Dataset-info.png?expiry=1722556800000&hmac=vsMQqQwR_SKTfnfIaomQPD87cFwT3wHa7Gx2GJ72nk8)

### **Create the employees table**

Create a table for the employees within your employee_data dataset. To do this:

1. Select **+ CREATE TABLE** from the options in the **Details **pane. Under **Source**:

* From the dropdown in the field **Create table from**, select **Upload**.
* From the **Select file **field, select **BROWSE**. Then, find and select the [Employees Table - Understanding JOINS](https://d3c33hcgiwev3.cloudfront.net/TMwinKTQQ2aYTZGdcL0Fog_84586bd2265a4888af22e8060747c8e1_Employees-Table---Understanding-JOINS.csv?Expires=1700006400&Signature=XeqsCQhRu8D7cS7Ew8kaS3ySfbc2aYOuk~bTZZ8eBdF07KQtiMu4sAgRB4V1xboPLvCry4H61bXFNjqBT1PmbKFo8dgzPbmOUsS0msC6Fca6c-gj95HVM1PJq5pRctkQiC8OaBKml3T9KRs0lctwoqeJI-HKUo5e7hs2dF-q~EA_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A).csv File you downloaded previously.
* The file format should be automatically detected after selecting the Employee Table .csv file. If it’s not, select **CSV **from the **File format** drop-down.

2. Under Destination:

* Enter **employees **in the **Table **field.
* **Project**, **Dataset**, and **Table type** will be automatically filled. You do not need to update these fields.

3. Under **Schema**, select the **Auto detect** checkbox.

![The Create table pane displaying the necessary options to create a new table titled “employees”](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/HoSUNGOYRDyFC3XZlkCN6A_73f1a090cbcc4a90ab2cc2693a8bf1e1_DAC5M3L1_R1_Image4-Create-new-table-employees.png?expiry=1722556800000&hmac=90-9_uIwSwj5Eswp4DSr5SLdfk3bx7fUvmDua1EHW7U)

4. Select **CREATE TABLE**. The employees table will be nested under **employee_data** in the **Explorer **pane.

![The Explorer panel displaying the employees table listed under the employee_data dataset within the dac5bigquery project](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/t7OrRLVgSgaY0huRvtqXmQ_b26cbce0b8f7494094cd44c6072effe1_DAC5M3L1_R1_Image5-Explorer-with-employee-table.png?expiry=1722556800000&hmac=km4DlUUuBXi_nu68p_1jBzOkfl9jL-GhIokK53e-XOQ)

### **Create a departments  table**

Next, create a table for the departments within the employee_data dataset. To do this:

1. Select the **employee_data **dataset from the **Explorer **panel.
2. Select **+ CREATE TABLE** from the options located in the main editor window.
3. Under **Source**:

* From the dropdown in the field **Create table from**, select **Upload **from the list of options.
* From the** Select file **field, select **BROWSE**. Find and select the [Departments Table - Understanding JOINS](https://d3c33hcgiwev3.cloudfront.net/9vVSOuERRjusAUScVM-rOw_d98f88a17db84f198dee412210c13ae1_Departments-Table---Understanding-JOINS.csv?Expires=1700006400&Signature=BTJ2YLesayzmJfmfNXNbbpPk1iw5Gtn-S5VuVwvjSBrHHVcx43MzcGPWP6skOxWPQZATx2JVKw2x0aR9HKbxe80VLIK9enqXKETlIOcPYpxjDw52KFdA-Ugi4gpqegDFSl8E1bqumIk-tPxDwRe9SKnBDAeTxXGgroVc~ssKB88_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A).csv File you downloaded previously.

4. The file format may be automatically detected after selecting the Departments Table .csv file. If it’s not, select **CSV **from the **File format **drop-down.
5. Under the **Destination **section:

* Enter **departments **in the **Table **field.
* **Project**, **Dataset**, and **Table type** will be automatically filled out so you do not need to update these fields.

6. Under **Schema**, select the **Auto detect **checkbox.

![The Create table pane displaying the necessary options to create a new table titled “departments”](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/z6d408hLSxu1XDADpZrpag_151c9d401ee742c784a72fa1828657e1_DAC5M3L1_R1_Image6-Create-new-table-departments.png?expiry=1722556800000&hmac=5O8d92koh2IwvsDcFI3_XG6BQbm41snq9p5O78-I4X0)

7. Select **CREATE TABLE **in the** Create Table** window. The **departments **table will appear under the **employee_data** dataset listed within your project.

### **Verify the data**

Make sure that you’ve uploaded the tables correctly by previewing the tables you just created.

1. From the **Explorer **pane, select the **employees **table.
2. Select the **Preview **tab to verify that you have the following data:

![A preview of the employees table within the employee_data dataset. The table has three columns: name, department_id, and role](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/cNscvo98SZyuEgoB5jU4Bg_d5c1c249cc1e400897c712c8bb2930e1_DAC5M3L1_R1_Image7-Preview-employees-table.png?expiry=1722556800000&hmac=mwzjJ-u0bJx2qrT4UyAtifkJoEQPfuzD7_Xr5cmn_VY)

3. Select the **departments **table.
4. Select the **Preview **tab to verify that you have the following data:

![A preview of the departments table within the employee_data dataset. The table has two columns: name and department_id.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/WIpa8MEhTXWxIQtwpQCHgw_e23a296daaed4a998041a76859c431e1_DAC5M3L1_R1_Image8-Preview-departments-table.png?expiry=1722556800000&hmac=O1vWtaWDRyh5hf9IhmTReigxP2fZ9YhuFhnJkqoq9h8)
There are six rows in the table. In Row 1: name: Dave Smith; department_id: 1; role: Product Marketing Manager. In Row 2: name: Scott Tanner; department_id: 1; role: Director of Demand Gen.

When your data previews match these instructions, you are ready to follow along with the step-by-step guide and video on [Explore how JOINs work](https://www.coursera.org/learn/analyze-data/lecture/uLZJH/how-joins-work "how joins work step-by-step guide; opens in new tab").
