# Sort and filter data to keep it organized

The first two phases of data analysis, **Organize data** and **Format and adjust data**, are important for data analysts because they can use these phases to manipulate their data in ways that make important patterns and trends more obvious. Most of the datasets you’ll use as a data analyst will be organized as tables. Tables are helpful because they let you manipulate and categorize your data. Having distinct categories and classifications lets you focus on, and differentiate between, the groups in your data quickly and easily.

Sorting and filtering are two methods you can use to organize, format, and adjust data. For example, a filter can help you find errors or outliers so you can fix or flag them before your analysis. Outliers are data points that are very different from similarly collected data and might not be reliable values. The benefit of filtering the data is that after you fix errors or identify outliers, you can remove the filter and return the data to its original organization.

In this reading, you’ll review sorting and filtering and consider how they can be used together. You’ll also be introduced to how a particular form of sorting is done in a pivot table.

## Sort data

Sorting is the process of arranging data into a meaningful order to make it easier to understand, analyze, and visualize. It ranks your data based on a specific metric you choose. You can sort data in spreadsheets, SQL databases (when your dataset is too large for spreadsheets), and tables in documents.

To rank items or create chronological lists, you can sort by ascending or descending order. Sorting arranges the data in a meaningful way and gives you immediate insights. Sorting also helps you to group similar data together by a classification. For example, if a ski resort design company wants to evaluate the resorts designed by a competitor, a data analyst can sort competitive resorts by locations, runs, acreage, and other factors. This way, the firm’s designers can visit the types of resorts they also design and gather information that could be used in its own future designs.

![This is aAn example of sorting a spreadsheet of ski resorts, including information about resort name, state/territory/country](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/WHXvpntATfChQSG-exnbwg_e40c6a897b7c4ea4ac6a0f22ca5519e1_8TzqPKTZMV1MQRHlSr1s6VQr4vY-ue5B1d3ZRqEKT6snfVRczMT2ifLAd88PvoRCjYaTPZXs3RGgUM038_KcUaNpr7_jyNfr7UL-ULQqd2GVA1QerJeQCh27wE2xFu0miLqQnlTMnXaiKjioEwG5LKaUK2IfGqbgByOGk138tCLheDpY8rnVdVP5Z76QZKT6OQWk81U3ocPO6Byo8foTyYaYZwp2qqjOzaDs6g?expiry=1720656000000&hmac=V4YQyTeyNeyn-27J9TER9oV68-qCvC2GSLuW6wxJj44)
An example of sorting a spreadsheet of ski resorts, including information about resort name, state/territory/country, lifts, runs, and acres. The image taker has clicked into the Data menu option, selected Sort sheet, and is hovering over Sort sheet by column A (A to Z).

## Filter data

Sometimes, an analysis may require only a subset of the data in your dataset. You can use a filter to show only the data that meets a specified criteria while hiding the rest. Filtering is useful when you have lots of data. You can save time by zeroing in on the data that’s important for your current analysis or the data that contains errors. Most spreadsheets and SQL databases allow you to filter your data in a variety of ways. Filtering gives you the ability to find what you are looking for without too much effort.

For example, if the ski resort design company wants to inspect specific criteria for the competitive ski resorts they intend to visit and evaluate, a data analyst can filter the competitive resort database to extract information about the number of runs compared to acreage to identify design trends or other insights.

![An example of creating a filter in a spreadsheet of ski resorts](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/Xw7QVKG2R-Gc7QoyTFQtIw_ac0089354a1346bb97df4d2655ec1fe1_noY6fYMsWg8nJS64kDUZDX3myITNIPdCDXicuml2syAjA1i3RtOpoYHJHl-pWSOiRTCFMy-7l-UH6oHUC1lW_h6hG3OwuEYnuIZrEc1Dc5fjPjzYcdRE6xeceU6-jutaS0c_zUNQe9xJoRwTOkhWG81_RTsNuwHQhTpkZJNh66OwiRgc-qj83ehfRyppr0uqF6IZKwhcVTp0Z29nrOTqqz9B1waGe9H5IJyVaQ?expiry=1720656000000&hmac=Yw9XtL38AKSMCf5_JBGooGtxCq7tEqj_uGhzQNsfb6I)

![An example of filtering data in a spreadsheet of ski resort information by specific evaluation criteria such as location](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/SgDPUoXIQ7WhGtKTTCKZ-A_c23a1eebc7c64d89ba00b73a9533f4e1_0ePn0aa78jdfZwx2C1SIDV0amIKtd-39qUhrWQhvejNFvTDB8-mto-zVDet0ZjJq7fZh4HCRXpIFs5Q4iI1-7qqaVMYCbPu1YUf5oKUjjPhx2uNdcfIqdNOWgnLoYpTUhK4qmxRf3jqdE0ZuRbRnmR2U2HW7nt258gT5gP0CmCYsbLoQVwzH8XZnIDUJIRmq1qnjCJ9YcGzJEPzyH3eTgrf4pgNMWCBYcvqNvA?expiry=1720656000000&hmac=lA2CxwzR0mmkIA-nacACxwJL0_4B3-6FxLKqhZTB-IQ)
An example of filtering data in a spreadsheet of ski resort information by specific evaluation criteria such as location, acreage, or number of runs

### **Sort a pivot table**

A pivot table is a data summarization tool used to sort, reorganize, group, count, total, or average data. Items in the row and column areas of a pivot table are sorted in ascending order by any custom list first. If the items aren’t in a custom list, they will be sorted in ascending order by default. But, if you sort in descending order, you are setting up a rule that controls how the field is sorted even after new data points are added. For example, in the ski resort dataset, the pivot table allows locations to be sorted alphabetically by state, territory, or country.

![Image of a pivot table of the ski resort data, with the pivot table editor open and ready for parameters to be entered](https://d3c33hcgiwev3.cloudfront.net/imageAssetProxy.v1/u3lRUIlqQ-KPIMIOURQy6A_5b0dd2ad1f264272963ea7e7b044dbe1_EuU1DP1DQYMB3tgzFZHANoDEGmEHWf55zjxwjC3PRHG6lSOslfUvEGYNB3sIesFvTyyFjhauzllGbVNjbewnWwhbriZodN-uZ7a5xG_YThe64gW4QA4-Z-Bt_PqoAfH6H2n6SVBXg2RGRgQPAysQH5BYlitBTuR98ul2fC9xPbY81Ps1sLB2LCgoNY1bz7MnSKGqtIDgjwstEjaBgwUKoz54DAjDZ93Gu80zqA?expiry=1720656000000&hmac=T4hNkqZavpXYA5EdHzQy_SUsaE1AMsFCGtsoqQ-TSOU)
Image of a pivot table of the ski resort data, with the pivot table editor open and ready for parameters to be entered. The data is grouped by state, territory, or country.

## Key takeaways

Data analysts filter and sort data to organize it for better understanding, analysis, and visualization. Sorting arranges data in a meaningful order, while filtering displays only data that meets specific criteria. Combining filtering and sorting allows for organizing only relevant data for analysis. Both spreadsheets and SQL databases allow for data filtering and sorting data.
