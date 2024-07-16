# Upload the movie dataset to BigQuery

The next video demonstrates how to use SQL to filter data in a large dataset in BigQuery.

If you would like to follow along with the instructor, you will need to log in to your BigQuery account and upload the movie dataset provided as a .csv file.

## Prepare for the next video

First, download the .csv file from the attachment below:

[Movie DataCSV File](https://d3c33hcgiwev3.cloudfront.net/KNFbyUKxRKiRW8lCsQSo8A_8adeac50825b4df68daaf6055c404ef1_Movie-Data.csv?Expires=1720656000&Signature=WlBdlUwF8O~zAZvWWaFWJi5WLrHCA6rxRvmaP6GWRguaqNkIQSiYukRNzPiFjjShejqVJ2jwDiXn8xjYG5F7fuUkeDH93-SDAQj~tnHML2ChsfP2lX9Q6zy~mNb8VQdlIYOQXZF2FPK9fhqBQmev53JCQVNwY8TuNBgdKy7HB-E_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

* **Note:** If the .csv files open in a new tab instead of downloading to your machine, follow these instructions:
  * Select **File** from the menu bar, then select** Save as Google Sheets**. This will open the .csv file as a Google Sheet.
  * Select **File** from the menu bar, then select **Download** from the dropdown menu, then select **Comma Separated Values (.csv)**.

Next, complete the following steps in your BigQuery console to upload the movie dataset.

**Step 1:** Open your BigQuery console and click on the project you want to upload the data to.

**Step 2: ** In the **Explorer** on the left, click the **Actions** icon (three vertical dots) next to your project name and select **Create dataset**.

![Action dropdown menu open next to a project in the Explorer pane](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/WLc3wB8cSgyt42QStAfdbA_6f332382a41c4a388c36f8caab7141f1_5.CreateDataset.jpg?expiry=1720656000000&hmac=SUpuJjfc71EX7ovABxf_GjHId5Iz5nHzJopGBMWZfhA)

**Step 3:** In the upcoming video, the name **movie_data **will be used for the dataset. If you plan to follow along with the video, enter **movie_data **for the Dataset ID. In the *Location Type* section, select **Multi-region,** then from the *Multi-region *dropdown select **US (multiple regions in United States)**, and make sure the default *Encryption* method within the Advanced options is set to the **Google_managed encryption key**.

![Create dataset menu for movie_data](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/uqPortPlQzaPLJKTCuOEEg_e401815349df4df5b99aaaa288c98cf1_1.createdataset.jpg?expiry=1720656000000&hmac=MgwxzkyyXYtbN3eRDOnxr5RBiCNgkeH2shJt15AnoNc)

**Step 4: **Click **CREATE DATASET **(blue button) to add the dataset to your project.

**Step 5: **In the **Explorer** on the left, click to expand your project and then click the **movie_data** dataset you just created.

![movie_data dataset under a project](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/vwu6KLCHSPS_-_TNzueXKg_8a18939893714a6b9594d09d4f1787f1_2.moviedata.jpg?expiry=1720656000000&hmac=JPTfh5_5OWHULH1VNLmiDpHzWbCqAkxOsXkgM7Do0MM)

**Step 6:** A new window will appear titled **movie_data,** and make a note of the **Dataset ID.**

![Dataset info with Dataset ID](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/BVGWY9N8SeaE-f6G8mZlFQ_104e7ebd497b44b68ee4ac23908cc8f1_3.datasetinfo.jpg?expiry=1720656000000&hmac=NhbnQ-XTnucNBRBJKRPuQ8Xm5H8WREE6w-vsmyAfVYs)

**Step 7**: Towards the right hand side of the page, you will see a tab row of additional commands. Click the first blue button titled **+ CREATE TABLE** at the top right. A new window titled *Create table* will appear.

![Create table menu for the movies table with Auto-detect schema selected](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/U56fBwrYRW6GnJMmG38zSw_025b33c23f1d4bc881678d17951c98f1_4.createtable.jpg?expiry=1720656000000&hmac=Ew5adx5C43M7OCWTM9cN_OFff_ATFqxod-olErBNfbw)

**Step 8:** Under *Source,* for the *Create table from* dropdown, select the data source.

* Select **Upload**.
* Click **Browse** to select the **movie_data.csv** file you downloaded.
* Select **CSV** from the file format dropdown, but BigQuery should automatically change the format.

**Step 9: **Under *Destination,* for the *Table *name, enter **movies** to match the table in the video.

**Step 10:** Under* Schema,* click the **Auto detect** checkbox.

**Step 11**: Once all of the settings have matched the image above, click the **CREATE TABLE** (blue button) at the bottom. You will now see the **movies** table under your **movie_data** dataset in your project.

**Step 12:** Click **movies** and then select the **Preview** tab. Confirm that you have access to the appropriate table.

![Preview of the movies table](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/xm1YofnxQuClZWAZwImSFQ_e174535d7af549b69e75bf6ed48261f1_5.movieswindow.jpg?expiry=1720656000000&hmac=kDZVQv1XsBqlco4vjl1hAuTfckWzx-UHlCT3K3Y4xgk)

Congratulations, you are now ready to follow along with the next video.
