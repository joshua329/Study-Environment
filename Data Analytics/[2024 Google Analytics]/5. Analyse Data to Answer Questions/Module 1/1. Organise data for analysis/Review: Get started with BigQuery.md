# Review: Get started with BigQuery

**Note:** This reading is also in Courses 3 and 4 of this program. If you’re taking the courses in order, you may either review it or move on to the next course item, [Upload the movie dataset to BigQuery](https://www.coursera.org/learn/analyze-data/supplement/sBFZn/upload-the-movie-dataset-to-bigquery "Opens in a new tab."). If you haven’t taken Courses 3 or 4 you should complete this reading before proceeding to the next course item.

BigQuery is a data warehouse on the Google Cloud Platform used to query and filter large datasets, aggregate results, and perform complex operations. Throughout this program, you’re going to use BigQuery to practice your SQL skills and collect, prepare, and analyze data. At this point, you have set up your own account. Now, explore some of the important elements of the SQL workspace. This will prepare you for the upcoming activities in which you will use BigQuery. Note that BigQuery updates its interface frequently, so your console might be slightly different from what is described in this reading. That’s okay; use your troubleshooting skills to find what you need!

## Log in to BigQuery

When you log in to BigQuery using the landing page, you will automatically open your project space. This is a high-level overview of your project, including the project information and the current resources being used. From here, you can check your recent activity.

![Bigquery project dashboard page](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/zSYVq72kR0y7WzL1pgNc6A_6d488f739f76484db684f7e9eab65df1_0SQ2qZhV9Uve0ublmVbbrNTl-s-kh53u4jOMLUrGSLLEf2XpUoXa1zw25R7t_OYoOdLGrdHOuQxrK0E7CJd0S_XsrLRRfISCDEWA_Gd35TCHCPeVl2vQPhVR4T1Xq7xLmahZlsSC7H6YQ0HlV3lt2A?expiry=1720656000000&hmac=0eQbm7OhqHbYFkkMLB2RUMbeRkVxwRac-ZVoMLngxAo)

Navigate to your project’s BigQuery Studio by selecting BigQuery from the navigation menu and BigQuery Studio from the dropdown menu.

![BigQuery navigation menu open with the BigQuery Studio option selected.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/-MXZRs1VSlaYQoNdSuaEeQ_7c326ba811b94494b3765af0665e48f1_aOUMY9S3wkh6BQGfj6qTt8IoNUoYjdiOwCxQnabM55gQxjYOC5ZgMfTEBEfbmdb_tPb7wB7OcYwL4YTpmQm1j9Q5ad_PXXHkMKwXnsRLrd_pw_wfjaS338JKUDRRTQD_QghTMWCL-XB5rx4lnkpgeA?expiry=1720656000000&hmac=MpzlkinAQWvLrIUHlSQkSOAv97z5sEnsdD37a7YI3g4)

## BiqQuery Studio components

Once you have navigated to BigQuery from the project space, most of the major components of the BigQuery console will be present: the **Navigation** pane, the **Explorer** pane, and the **SQL Workspace**.

![The BigQuery Console with the three major menus open: the Navigation pane, the Explorer pane, and the SQL Workspace](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/nE2ZdMl1SnK7TI96C948Bw_6e0e1784f33f4d45a95be098a97e55f1_VUTfKOpAyhpnBNwq5gIvSY1XeRI9uIGdnFtSMneBLi_ee26vDJiMawU6WaGXNKUGQgP2ZF0O0vAffbfyLSTwjsHirfKaOGVoRwiseloEoEC8KHJCKcpH-RG4aH76Bn_Dbbv9ORkOcVUQxE6gJp3pEw?expiry=1720656000000&hmac=ashNzmLOVvBx8UGujWH0RfCHYgsDtpmR_901NYKMm_8)

### The Navigation pane

On the console page, find the **Navigation **pane. This is how you navigate from the project space to the BigQuery tool. This menu also contains a list of other Google Cloud Project (GCP) data tools. During this program, you will focus on BigQuery, but it’s useful to understand that the GCP has a collection of connected tools data professionals use every day.

### The Explorer pane

The **Explorer **pane lists your current projects and any starred projects you have added to your console. It’s also where you’ll find the **+ ADD** button, which you can use to add datasets.

![The + Add button in the Explorer pane.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/Ad6Ow3GIQyaQHxHwUBk95w_09178209a91c424ca34335868575c7f1_AcVuKsC0sM954ZbLaGfh3JFTTDUzV9CpWHkPo9NeVV-LD_pNqPCMRGPdN0cHtTyq-LS1rJw8u8rRHcFtA017adW25jxmjnSOXpZBw0SYx7nZKDoOyL_bB8j_9OhPn8tptxHQldEChmurTDzPPoOhWQ?expiry=1720656000000&hmac=FUpIp9oHVCO2J0pk47RBQKtExTnz_h38HhPMaVgUkcs)

This button opens the **Add **dialog that allows you to open or import a variety of datasets.

![The Add dialog, displaying options to search for a data source or add popular or additional data sources.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/xHBnGi22RP6GMwl-i5u5Cg_e9a99caf7b5d4a3da024a6e05495a3f1_qUqHKMnIzsLQgZ0mp8ED9t5L20O3h5x3yqY_FrJmSmNBL_uYpM8Za5zb443dXlQKQP-CQjDUhskGQ8001xVu0b5A70AATT7K0C8yrBTr95Jgq1LJjQVYPrtEeZ-QUqDmhBw-IL_u9N_nr3cO1FE94Q?expiry=1720656000000&hmac=B1xPnhHYOIjAwruPqFNM4rKIzuWQEu1AajDodprhijA)

### Add Public Datasets

BigQuery offers a variety of public datasets from the Google Cloud Public Dataset Program. Scroll down the **Add **dialog to the **Public Datasets** option.

![The Public Datasets option in the Add dialog.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/tIxke21GTxyJ5zTtDVmklw_480308b97ab84ce19b3224a1df3912f1_f6FWP_Ot9vqu6v_mTpQv5Pc6z8ZfbG6ozjPCwHTp3a1gAoIa6_lI7FBubP85kcpbvWRkItc9xryUgEoWbaf10rYX5EPUNB4BraLuh3cXsZpF-UlhMQEfzGJjzb6mJQ-uSNPpqvNB1Lq1ZZjLdagBEw?expiry=1720656000000&hmac=2zNseiiloAGuGF5tN2X16WQzxjvBpCJJ_-fYGXLY1XA)

Select **Public Datasets**. This takes you to the **Public Datasets Marketplace**, where you can search for and select public datasets to add to your BigQuery console. For example, search for the "noaa lightning" dataset in the Marketplace search bar. When you search for this dataset, you will find NOAA’s Cloud-to-Ground Lightning Strikes data.

![The BigQuery Console showing NOAA’s Cloud to Ground Lightning Strikes as a search result in Datasets.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/EaJe6zbsTWm26hpoHSZmiw_92eda1f23f8d4bbb97197316fc4173f1_yw9cFdwcM-Vw9K68QMNfPzDFnxsuObE4a4S85aXmO3O2ODPdl4hKwq_r0s7H47lpi588qDHjaLnMEXgHBPeo1oVbkwAaZNT8MBO0JI8pab81Wgw8dB--VvTPGVEeJSBQ6pbHHse22FcbQ88Lw5l4Ow?expiry=1720656000000&hmac=nG-gtH6_dQLX77N-u4KCtTl3uExQsmnNddb3Xp9CZv8)

Select the dataset to read its description. Select **View dataset** to create a tab of the dataset’s information within the SQL workspace.

![The noaa_lightning dataset in a tab in the SQL workspace. The SQL workspace displays the dataset’s information.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/NxcREvGtRT-hKcyMTwegGw_95a1788086aa4b0f8286ab250683d5f1_zy1RC8p_TOnwP-UdCWeVJhk6XcjefHtJx1XgS7mVJP4aBnLgtiVAJw3whnI8wsXN2uwOF11rVbgrQkpRyQBSQ7LtNog15ml2C2fQJxLRyx6DIZPXrne75GekTOMfKGeCU_QyI5DqJFY6iG4vh_uHrQ?expiry=1720656000000&hmac=ujcdKI0_779E73ZCDVG3gk_90Tvb3J9Z5kWeaXHVE80)
The Explorer Pane lists the noaa_lightning and other public datasets.

### Star and examine Public Datasets

You added the public noaa_lightning dataset to your BigQuery Workspace, so the **Explorer **pane displays the noaa_lightning dataset, along with the list of other public datasets. These datasets are nested under bigquery-public-data. Star bigquery-public-data by navigating to the top of the **Explorer **pane and selecting the star next to bigquery-public-data.

![The bigquery-public-dataset with the star filled in, indicating it has been starred.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/Vb38hh2PTMO7f5hWoOclmg_e875ba2198f247d9b50244e2c22f00f1_uSOwc1spWVztuBd3zACofaTQAJug_1pLUbZuGIPCDikeGGm1j0fTAVfddN5KpFeSkALs6Y0azBj1PA56mdAcfyt9lhxLkYj6hu3cg0hPoTg00MejHJd7WpjFE-0sf8scbIj9e7NNN8MLLXV64xcjMQ?expiry=1720656000000&hmac=oO4d9jJqrxiT5bbwSZw_QBZqJW7TXcyMqUUNATwQe78)

Starring bigquery-public-data will enable you to search for and add public datasets by scrolling in the **Explorer** pane or by searching for them in the **Explorer** search bar.

For example, you might want to select a different public dataset. If you select the second dataset, "austin_311," it will expand to list the table stored in it, “311_service_requests.”

![](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/ULNat2-ZTOOOILGo-_T04g_e4c3b3b84c064932b1bcddcc44c081f1_iY8pt2y3FVj9n70uXoTPgenZoBnBD-CB3iqI1B9U_Q-xOVPLDHGVuTda2SF1w0R7RTMOU59MnIn0VqpeL-B81enUpfXxjL8k3G9BdxeFwRDUQlSZTlM2ysDWrnStHOLxWDk9r8Cb_tXVPAV_zxYmEg?expiry=1720656000000&hmac=N_xxhNgDElbhz74aQUn30T3VxUUtPdzQoXZA96AuZao)
The Explorer pane with the “bigquery-public data” and “austin_311” datasets expanded, revealing the “311_service_requests” table

When you select a table, its information is displayed in the SQL Workspace. Select the 311_service_requests table to examine several tabs that describe it, including:

* **Schema**, which displays the column names in the dataset
* **Details**, which contains additional metadata, such as the creation date of the dataset
* **Preview**, which shows the first rows from the dataset

![The table preview of the 311_service_requests table with the Schema tab open](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/qE13RxJNToOy6wR47z2r9Q_a80a3276da3b4b1c9e404b02d1a8faf1_vgfiDeBifjMZ7WhLdo6bDALvpeMTqcjmvvucEljOAeiPypKqIwB5qBNYQp3O3rH3QYpS2W-cBHzzsMwZAxRCavITHl_R8pEqFkF9yNHSSTWmiguvaABcckK2av0lydHR5g_1rZynrv5D-YW3v7WPDQ?expiry=1720656000000&hmac=n32g1syLC-S9exySmYVmTWL-s4JZtykzdUJbe-dX9w4)

Additionally, you can select the **Query **button from the menu bar in the SQL Workspace to query this table.

### The SQL Workspace

The final menu pane in your console is the SQL Workspace. This is where you will actually write and execute queries in BigQuery.

![Blank query editor tab](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/816UKsT-Q4-UYz-i8Z01eA_f6a774eacc06448ea8b599d975338df1_AVYekXAnrQhzN7Mpgy289kYI_YgK32S2rALCiiey74FlRJwXoEoL7wjcwq7OL8Q8regbHulTdwdX1zQfA_sI04B5F1AbqNecgYTPPWnv344_Ow1VesE1zrOfDb1HNiCroQMDYENDd2lWe2onXVo0Rw?expiry=1720656000000&hmac=Z6JF264eFAviEqil6zGKlRUcmtyfEOqYTdGqe6R7hXQ)

The SQL Workspace also gives you access to your personal and project history, which stores a record of the queries you’ve run. This can be useful if you want to return to a query to run it again or use part of it in another query.

## Upload your data

In addition to offering access to public datasets, BigQuery also gives you the ability to upload your own data directly into your workspace. Access this feature by opening the **+ ADD** menu again or by clicking the three vertical dots next to your project’s name in the Explorer pane. This will give you the option to create your own dataset and upload your own tables. You will have the opportunity to upload your own data in an upcoming activity to practice using this feature!

## Key takeaways

BigQuery's SQL workspace allows you to search for public datasets, run SQL queries, and even upload your own data for analysis. Whether you're working with public datasets, running SQL queries, or uploading your own data, BigQuery’s SQL workspace offers a range of features to support all kinds of data analysis tasks. Throughout this program, you will be using BigQuery to practice your SQL skills, so being familiar with the major components of your BigQuery console will help you navigate it effectively in the future!
