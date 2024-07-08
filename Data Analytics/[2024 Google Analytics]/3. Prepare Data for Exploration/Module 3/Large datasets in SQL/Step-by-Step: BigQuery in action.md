# Step-by-Step: BigQuery in action

This reading provides you with the steps the instructor performs in the following video, [BigQuery in action](https://www.coursera.org/learn/data-preparation/lecture/H877e/bigquery-in-action). The video focuses on how to create a query to view a small section of data from a large dataset.

Keep this guide open as you watch the video. It can serve as a helpful reference if you need additional context or clarification while following the video steps. This is not a graded activity, but you can complete these steps to practice the skills demonstrated in the video.

## What you'll need

To follow along with the examples in this video, log in to your BigQuery account and follow the instructions to star bigquery-public-data in **The Explorer pane **section of the previous reading, [Get Started with BigQuery](https://www.coursera.org/learn/data-preparation/supplement/7ctZ8/get-started-with-bigquery).

![Empty alt text.](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/BZoPGCbqS32aDxgm6mt9kg_bfbeb57eeb1743938a5041c2251e2ff0_line-y.png?expiry=1719532800000&hmac=t7ePId9UUD8Z-mRi6jYbD9z-kLDh2KoHK_nat62vDNw)

## Example 1: Preview a section from a table viewer

A database is a collection of data stored in a computer system. Query languages such as SQL enable communication between databases and data analysts. You discovered earlier that a relational database is made up of several tables that may be joined together to create relationships. Primary and foreign keys serve as representations of these relationships. To extract data from these tables, data analysts use queries. To learn more about that, explore BigQuery in action:

1. Log in to [BigQuery](https://console.cloud.google.com/bigquery "Link to BigQuery console") and go to your console. You should find the** Welcome to your SQL Workspace!** landing page open. Select **COMPOSE A NEW QUERY** In the Bigquery console. Make sure that no tabs are open so that the entire workspace is displayed, including the **Explorer** pane.
2. Enter **sunroof **in the search bar. In the search results, expand sunroof_solarand then select the solar_potential_by_postal_codedataset.
3. Observe the **Schema tab** of the **Explorer** pane to explore the table fields.
4. Select the **Preview **tab to view the regions, states, yearly sunlight, and more.

![A screenshot of the BigQuery interface with the COMPOSE A NEW QUERY button visible](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/ThjXwvDfS7iKuIFqJl1law_9400d10233664d95909d65e3628294e1_C3M3L5_BigQuery-in-Action---Interface.png?expiry=1719532800000&hmac=V_k1APumhSCygUEC91-EFK_RP8itsu7HEs-5cv_3mlE)

## Example 2: Writing a query

In order to view the entire dataset, you will need to write a query.

1. The first step is finding out the complete, correct path to the table you want to work with. Select the **ellipses **(three vertical dots) by the dataset solar_potential_by_postal_code, then select **Query**. A new tab will populate on your screen. Select the tab. The path to the table should be written inside two backticks.
2. Select the full path by highlighting the text including the backticks and copy it.  (**Note:** You can also get the full path to the project, database, and table directly by clicking the ellipses next to the table's name in the **Explorer **panel on the left and selecting **Copy ID**.)
3. Now, click on the **plus sign** to create a new query. Notice that BigQuery doesn’t automatically generate a SELECT statement in this window. Enter SELECTand add a space after it.
4. Put an asterisk * after SELECT to indicate you want to return the entire dataset. The asterisk lets the database know to include all columns. Without this shortcut, you would have to manually enter every column name!
5. Next, press the **Enter/Return** key and enter FROMon the second line. FROM indicates where the data is coming from. After FROM, add another space.
6. Paste in the path to the table that you copied earlier. It will read `bigquery-public-data.sunroof_solar.solar_potential_by_postal_code`
7. Execute the query by selecting the **RUN **button.

![The BigQuery editor showing the SELECT query at the top and the results from running the query at the bottom](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/rYUm3T87RdGKoCmagUNS2Q_e3e66f46b4754729be3e5e02e4d7bde1_C3M3L5_BigQuery-in-Action---select-query.png?expiry=1719532800000&hmac=CV8Hvm_ezE0Qm2EySKKp-Dw8bSAY7NLgOqYK0VOnoME)

**Important!**

Many of the public databases on BigQuery are living records and, as such, are periodically updated with new data. Throughout this course (and others in this certificate program), if your results differ from those you encounter in videos or screenshots, there's a good chance it is due to a data refresh. You can verify when a table has been refreshed by selecting it from the **Explorer** panel and clicking **Details**. You'll find the date the table was created, when it was last modified, as well as other useful information.

![Screenshot of ](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/MOWPw5e-Scm9IajeMKUSrQ_072a88649e6d4112b421e871848da6f1_DA_C3M3L5_BigQuery_in_action_details_view.png?expiry=1719532800000&hmac=CauqLMfDPgOUpnJdOj-fqQb059SSmeox57Ahmp-1ViQ)

## Example 3: Use SQL to view a piece of data

If the project doesn’t require every field to be completed, you can use SQL to see a particular piece, or pieces, of data. To do this, specify a certain column name in the query.

1. For example, you might only need data from Pennsylvania. You’d begin your query the same way you just did in the previous examples: Click on the **plus sign**, enter SELECT, add a space, an asterisk (*), and then press **Enter/Return**.
2. Enter FROMand then paste `bigquery-public-data.sunroof_solar.solar_potential_by_postal_code`. Press **Enter/Return**.
3. This time, add WHERE. It will be on the same line as the FROM statement. Add a space and enter state_name with a space before state and a space after name. state_name is a column name in the table.
4. Because you only want data from Pennsylvania, add = and 'Pennsylvania' on the same line as state_name. In SQL, single quotes represent the beginning and ending of a string.
5. Execute the query with the **RUN **button.
6. Review the data on solar potential for Pennsylvania. Scroll through the query results.

Keep in mind that SQL queries can be written in a lot of different ways and still return the same results. You might discover other ways to write these queries!
