# Upload the warehouse dataset to BigQuery

Coming up, you’re going to learn more about how to use COUNT and COUNT DISTINCT in SQL to count and return the number of certain values in a dataset.

To prepare for these activities, you will need to log in to your BigQuery account and upload the warehouse data provided below as two .csv files.

## Upload the data

To begin, download the two .csv files from the attachments below:

[Warehouse Orders - WarehouseCSV File](https://d3c33hcgiwev3.cloudfront.net/PcJNDf5ySCqk7V2xQoiu2Q_90874562d5cd4e7c9ba848fd44d512e1_Warehouse-Orders---Warehouse.csv?Expires=1723680000&Signature=DJzyIJICP5V5XemledPaAMk4ltFzdTAObseG-avV2JAmefVik0kZHPw1P9V8YYjS~UAUDSOz5PR5GJiwbISuGXL5HFAVKIFjwTcDy7PSF6tG4HoeF09ZtFB9RnSnKZst4z9zM52kSZw8gw0lp7QsjrxDjjHYmPgIepJVx8XNrVY_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

[Warehouse Orders - OrdersCSV File](https://d3c33hcgiwev3.cloudfront.net/helGYTW6Tv-vyOH0l-yIPA_1a019ecb2cce49f48fd69d85f7dadce1_Warehouse-Orders---Orders.csv?Expires=1723680000&Signature=YxKRTPgoxdd5OxOODwotY183uH6SLwMsZNxvDWFmXBrhnKk0zmjJLVCg69J~ojNfU2u8kdkI~JBIxSjAVRzNXYE3a2WaG18DNMImouyo42Z3p5C9EXj3AL2WWVBbX0Bdns~9AL4-Hml7aOg93bQTdjqspKQc5yrJZNg7VR-8iU0_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

Next, complete the following steps in your BigQuery console to upload the Warehouse Orders dataset with the two Warehouse and Orders tables.

1. Open your [BigQuery console](https://console.cloud.google.com/bigquery) and select the project you want to upload the data to.
2. In the Explorer pane, select the Actions icon (three vertical dots) and select **Create dataset**.

![Screenshot of the Explorer pane with the Actions icon selected](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/utTs756ORJaNziHoBTLbLA_1f4e02359fc84f379f99fd65b218d6e1_C1M3L2-1.png?expiry=1723680000000&hmac=Dzh5J9a5wnioAWYJiFkWLZn6qFmVuWsc_rEInbOMWo4)

3. The name "warehouse_orders" will be used for the dataset. Enter **warehouse_orders** for the Dataset ID in the Create dataset pane. Make sure the **Location type **is set to **Multi-region** and that the region selected is **US (multiple regions in the United States)**. Leave the** Advanced options** at their default settings.

![Screenshot of the Create dataset pane](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/1OPxHYP8SO2tDqVubJZXLQ_7361cde0acf74893926e30405394f6e1_C1M3L2-2.png?expiry=1723680000000&hmac=geyXE-dWHG4AKJqknZqX8R6yWyFXRuatQ_G4i7RdY4g)

4. Select the **CREATE DATASET** button to add the dataset to your project.
5. In the Explorer, select the **warehouse_orders **dataset you just created. You will then view the dataset info window in the main editor window.

![Screenshot of the warehouse_orders dataset info window](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/9HBIeKkLT3yL085vWdb-DQ_0083727e14474a149940aa45bec66de1_C1M3L2-3.png?expiry=1723680000000&hmac=UG8kngYbM63BHFwDOlY34-WS0UFFrRAvAWDh4KDTd4s)

6. Navigate to the  **+ CREATE TABLE** button to open the **Create table **pane.

![Screenshot of the Create table window](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/pmI3FucsR_eZQnXh5Ab9Gg_306ab6fd3c79403bb29574344f54efe1_C1M3L2-4.png?expiry=1723680000000&hmac=m6zOzDZ_LHmjO4QOhoglJUO8zUiIpRH674qIfrXtQPI)

7. From the **Create table from dropdown list**, choose where the data will be coming from.

* Select **Upload**.
* Select the **Browse **button to select the **Warehouse Orders - Orders.csv **file you downloaded.
* Choose **CSV **from the file format dropdown list (file type may automatically be detected).

8. In the **Table **text box, enter **orders **if you plan to follow along with the video.
9. Below **Schema**, select the **Auto detect** checkbox.
10. Select **CREATE TABLE**. You will now find the **orders **table below your** warehouse_orders** dataset in your project.

![Screenshot of the orders table listed under warehouse_orders](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/iDmCnAD5SUuMHOo_dM9nnQ_ea974b12f8b6438c8185539fe2bf5ee1_C1M3L2-5.png?expiry=1723680000000&hmac=mG7QgiP0_ef-8Dn6GOH6TOdvuA_h4dcT--_s2MnT_Xg)

11. Select the **warehouse_orders** dataset again.
12. Navigate to the **+ CREATE TABLE** button to open the **Create table pane** again.

![Screenshot of the Create table window](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/xb1KqYu-T4OVjFj4Hily9g_fe926a39e18645c88399f3e15f90fae1_C1M3L2-6.png?expiry=1723680000000&hmac=Xvyyn7XmLKTyO_Edn2pqPE5Xfq7yqbsFYYKQ7mN4sw4)

13. For the Create table from selection, choose where the data will be coming from.

* Select **Upload**.
* Select **Browse **to select the **Warehouse Orders - Warehouse.csv** file you downloaded.
* Choose **CSV **from the **File format **dropdown list.

14. For Table name, enter **warehouse **if you plan to follow along with the video.
15. For Schema, select the **Auto detect** checkbox.
16. Select the **CREATE TABLE** button. You will now find the **warehouse **table under your **warehouse_orders** dataset in your project.

![Screenshot of the Explorer pane showing the warehouse table under the warehouse_orders dataset](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/WoO10M6zQUOZ3YFXklnV6w_a31a5e50657f4708affed3b569df47e1_C1M3L2-7.png?expiry=1723680000000&hmac=bhsZgMobQex1m4W3D6D-LClC_RetPv55hZllII-Y7FA)

17. In the Explorer pane, select the **orders **table and then select the **Preview **tab to verify that you retrieve the first 50 rows of data. You may have to scroll down the page to view all 50 rows (there are 9999 pages total).

![Closeup of the PREVIEW tab](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/q0vDZT-6RS2guDp1zhegbw_08450e68588d45f69cebd61502029be1_C1M3L2-8.png?expiry=1723680000000&hmac=nYKSBkz8f-6wa95B6r1h4M-wCLhHXoD7wHHaNLDGxF8)

18. Select the **warehouse **table and select the **Preview **tab to verify that you can view 10 rows of data. If both your data previews match, you are ready to move along to the [COUNT and COUNT DISTINCT](https://www.coursera.org/teach/analyze-data/authoringBranch~4f7eJX9NEe6L0QpSVaIh4Q/content/item/project/3K5St) activity.
