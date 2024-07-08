# Optional: Upload the store transactions dataset to BigQuery

In the next video, the instructor uses a specific dataset. The instructions in this reading are provided for you to upload the same dataset in your BigQuery console so you can follow along.

You must have a BigQuery account to follow along.

## Prepare for the next video

* First, download the .csv file from the attachment below.

[Lauren&#39;s Furniture Store Transaction TableCSV File](https://d3c33hcgiwev3.cloudfront.net/0cvJS5ocTSu-77CVZvn6kw_55078d160a924e49aca0837f03d995f1_Lauren-s-Furniture-Store-Transaction-Table.csv?Expires=1720569600&Signature=knbyNY09DLa6pBcuyqXVKt2JoDTZMnSTY-G8fsJ7dmm1WzTbqxXe5DwWgSdzlj3o1O4poBQ0oY8QrV~Bu5hVRZU2zhtZFspwy3pUtKjXYMoZ2K4Fb2YwYnh34uFpitiN6dXi9XI0~wC-~W5-3ezKLP~zf~IaRBZCVGrpfji7BQU_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

* Next, complete the steps below in your BigQuery console to upload the Store Transaction dataset.

**Note:** These steps will be different from what you performed before. In previous instances, you selected the **Auto detect** check box to allow BigQuery to auto-detect the schema. This time, you will choose to create the schema by editing it as text. This method can be used when BigQuery doesn't automatically set the desired type for a particular field. In this case, you will specify STRING instead of FLOAT as the type for the purchase_price field.

**Step 1**: Open your BigQuery console and select the expansion arrow next to the project you'll upload the data to. Examine the datasets listed under your project. If a **customer_data** dataset is listed, go to step 5; otherwise, continue with step 2.

**Step 2:** In the **Explorer** on the left, click the **Actions** icon (three vertical dots) next to your project name and select **Create dataset**.

![This image shows the BigQuery Explorer window with Actions icon (three vertical dots) selected.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/k5V2rK4RSGyF1FegTvWrcg_3eb52d7d82414b599a5da107b654cdf1_5.CreateDataset.jpg?expiry=1720569600000&hmac=x4xZBgsUrnmhRQmE40d0nj8QUqWi2976csp2Hn1NVzw)

**Step 3:** In the **Create dataset** window, enter **customer_data** for the Dataset ID. Make sure the *Location type* is set to **Multi-region, US (Multiple regions in United States),** and all the default *Advanced options *remain set to the **Google-managed encryption key** option.

![This image shows the BigQuery Create dataset window with customer_data showing in the Dataset ID field.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/Vi4AMrXYSTKamxpgCbyhJw_df92fa5c794e4416a927fd81c75425f1_1.create_dataset.jpg?expiry=1720569600000&hmac=GotgTRdm6OeV1I1HYpOga60GJqfgPOFzxEYAyphdJS4)

**Step 4: **Click **CREATE DATASET **(blue button) to add the dataset to your project.

**Step 5: **In the **Explorer** pane, click on the expansion arrow under your project name, and then click the **customer_data** dataset.

![This image shows the BigQuery Explorer pane with the Dataset info for customer_data.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/EUkPC9veR-6OuxIfQHJfSw_6964c4de086f4277af8151b2490e26f1_2.data_info.jpg?expiry=1720569600000&hmac=_g1yjUaUeVwpVN1U9zjmZ0NRjzz213Cwk1uRONKityc)

**Step 6: **In the **Dataset info** page, click the blue **+ CREATE TABLE** button to open the **Create table** window.

**Step 7:** Under **Source**, for the **Create table from** selection, choose where the data will be coming from.

* Select **Upload**.
* Click **Browse** to select the Store Transaction Table .csv file you downloaded.
* Choose **CSV** from the file format drop-down.

![This image shows the BigQuery Create table window.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/JlRSacCNRaWCErQkRSjDag_f4ca2ae11d4a49cfb4a34ab4366ad5f1_3.createtablewindow.jpg?expiry=1720569600000&hmac=pdvRshdlln8SlNABcAKBhGodlyvwrOIHM2j2AcghQHg)

**Step 8: **For Table name, enter **customer_purchase**.

**Step 9:** For Schema, click the toggle switch for **Edit as text**. This opens up a box for the text.

**Step 10: **Copy and paste the following text into the box. Be sure to include the opening and closing brackets. They are required.

[
  {
    "description": "date",
    "mode": "NULLABLE",
    "name": "date",
    "type": "DATETIME"
  },
  {
    "description": "transaction id",
    "mode": "NULLABLE",
    "name": "transaction_id",
    "type": "INTEGER"
  },
  {
    "description": "customer id",
    "mode": "NULLABLE",
    "name": "customer_id",
    "type": "INTEGER"
  },
  {
    "description": "product name",
    "mode": "NULLABLE",
    "name": "product",
    "type": "STRING"
  },
  {
    "description": "product_code",
    "mode": "NULLABLE",
    "name": "product_code",
    "type": "STRING"
  },
  {
    "description": "product color",
    "mode": "NULLABLE",
    "name": "product_color",
    "type": "STRING"
  },
  {
    "description": "product price",
    "mode": "NULLABLE",
    "name": "product_price",
    "type": "FLOAT"
  },
  {
    "description": "quantity purchased",
    "mode": "NULLABLE",
    "name": "purchase_size",
    "type": "INTEGER"
  },
  {
    "description": "purchase price",
    "mode": "NULLABLE",
    "name": "purchase_price",
    "type": "STRING"
  },
  {
    "description": "revenue",
    "mode": "NULLABLE",
    "name": "revenue",
    "type": "FLOAT"
  }
]

**Step 11: **Scroll down and expand the **Advanced options **section.

**Step 12:** For the **Header rows to skip** field, enter **1**.

**NOTE**: It is very important that you don't skip the last step, or you will receive 'parsing' errors, as BigQuery will try to apply the schema editing functions to the title row.

![This image shows the BigQuery partitions and cluster settings information, with the Header rows to skip field selected.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/Q0OCeG0jQ8i6kqiuPuAPtg_20acb2255a37442fbb35572b4bf0a9f1_4.advancedsettings.jpg?expiry=1720569600000&hmac=U9s77Ol38f_fP9nA_kolc6FSY6ot6QnRgzZwyCCEOdo)

**Step 13:** Click** Create****table** (blue button). You will now see the **customer_purchase **table under your **customer_data **dataset in your **Explorer** pane.

**Step 14:** Click the **customer_purchase** table and in the **Schema** tab, confirm that the schema matches the schema shown below.

![This image shows the BigQuery SCHEMA tab with table schema details in multiple columns.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/NhJwePeoT3WScHj3qJ91dw_5d1344c89b0e4a528fee3326f84bdbf1_schema.png?expiry=1720569600000&hmac=Txwoqzy1EsqpFpXi297fuo-VIVEBU6H2TjKmi0cAEwY)

**Step 15: **Click the** Preview** tab and confirm that your data matches the data shown below.

![This image shows the BigQuery PREVIEW tab with data in multiple columns.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/HxvsqoMeQQWb7KqDHiEFXg_f3fb8115d0004f1eacc45d2cb8cee4f1_preview.png?expiry=1720569600000&hmac=VJU7ce93x-NkED7oYkDcc9JwvFc2fEmNWHNAx8n5dWc)

Congratulations, you are now ready to follow along with the video!
