# Optional: Upload the customer dataset to BigQuery

In the next video, the instructor uses a specific dataset. The instructions in this reading are provided for you to upload the same dataset in your BigQuery console.

You must have a BigQuery account to follow along.

## Prepare for the next video

* First, download the .csv file from the attachment below.

[Customer Table - Sheet1CSV File](https://d3c33hcgiwev3.cloudfront.net/F0iSyYcLT9iIksmHCw_Y-Q_191f150a80d74fda96f9df2aa2e3b533_Customer-Table---Sheet1.csv?Expires=1720569600&Signature=PTBlrb6y11b~HMUz1qmPzcEwcIubPv1iDx5QMOZcE8YZi8YVwwisKetJk9hZmic6Qn1L-UoCvxgGMkrviLN-bxIkzo2Okb0S~4AtMzmbgBi0jfuZv2h5DV0mAXaLB~Eac8DKIeBTvYo6YyNvTQ5KqxXDJwaXxD7VO9ICtQYWuvQ_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

* Next, complete the following steps in your BigQuery console to upload the Customer Table dataset.

**Step 1**: Open your BigQuery console and click on the project you want to upload the data to.

**Step 2:** In the **Explorer** on the left, click the **Actions** icon (three vertical dots) next to your project name and select **Create dataset**.

![This image shows the BigQuery Console; and a pinned project is open](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/pYj9p7XFS-uI_ae1xYvr6w_05852f3ecf20415fba255e844eff49f1_actions_icon_create_dataset.png?expiry=1720569600000&hmac=54hWUTMVkyXV0Rrp12W8bvbtanB5a-GKFo27eh4q4JE)

**Step 3:** In the upcoming video, the name "customer_data" will be used for the dataset. If you plan to follow along with the video, enter **customer_data** for the Dataset ID.

![This image shows the Dataset ID field, default settings, and the CREATE DATASET button in the Create dataset window. ](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/rM90PCsNS7qPdDwrDfu6pA_3b05e749468e48eda2bfa98ba908f3f1_create-dataset.png?expiry=1720569600000&hmac=b_BZ-9U0AVMPXZC-Y1XGU9X14qesN-tNgd5JlRnSPbY)

**Step 4:** Click **CREATE DATASET** (blue button) to add the dataset to your project.

**Step 5:** In the **Explorer** on the left, click to expand your project, and then click the **customer_data** dataset you just created.

**Step 6:** Click the **Actions** icon (three vertical dots) next to **customer_data** and select **Open**.

**Step 7:** Click the blue **+** icon at the middle to open the **Create table** window.

![This image shows the Create Table button.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/9t8_PESeT8CfPzxEnh_AAw_d840be8cb250448688ed017b0f6634f1_Screenshot-2022-07-20-11.00.33-AM.png?expiry=1720569600000&hmac=kP4PM8LaatrWToX_8xWmodPjm5iiNgkQOhu8G9spClg)

**Step 8:** Under Source, for the **Create table from** selection, choose where the data will be coming from.

* Select **Upload**.
* Click **Browse** to select the Customer Table .csv file you downloaded.
* Choose **CSV** from the file format drop-down.

**Step 9:** For **Table name,** enter **customer_address **if you plan to follow along with the video.

**Step 10:** For **Schema,** click the **Auto detect** check box.

**Step 11:** Click **Create** **table** (blue button). You will now see the **customer_address** table under your **customer_data** dataset in your project.

**Step 12:** Click **customer_address** and then select the **Preview** tab. Confirm that you see the data shown below.

![This image shows the customer_address table for the customer_data dataset in BigQuery.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/s1bbE_SqTi6W2xP0qm4utQ_160621e5a99c4106b0b8c51ea4c102f1_customer_address.png?expiry=1720569600000&hmac=2BMwFb_VUEzaFZLUhcFBcayCMoJH5_hTbaLYKKHdx5E)

And now you have everything you need to follow along with the next video. This is also a great table to use to practice querying data on your own. Plus, you can use these steps to upload any other data you want to work with.
