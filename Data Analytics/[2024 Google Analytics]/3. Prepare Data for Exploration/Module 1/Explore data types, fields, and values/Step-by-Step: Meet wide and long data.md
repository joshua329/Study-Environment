# Step-by-Step: Meet wide and long data

This reading outlines the steps the instructor performs in the following video, [Meet wide and long data](https://www.coursera.org/learn/data-preparation/lecture/IbvwD/meet-wide-and-long-data). In this video, the instructor presents wide and long data formats and discusses the types of questions each format can help you answer.

Keep this guide open as you watch the video. It can serve as a helpful reference if you need additional context or clarification while following the video steps. This is not a graded activity, but you can complete these steps to practice the skills demonstrated in the video.

### **What you’ll need**

If you would like to access the spreadsheets the instructor uses in this video, select the link to a dataset to create a copy. If you don’t have a Google account, download the data directly from the attachments below.

Link to population datasets:

* [Population, Latin, and Caribbean Countries, 2010–2019, wide format](https://docs.google.com/spreadsheets/d/1aOcGeD7_8NvtEcVj2LD_79DaG2lwXrJC/template/preview#gid=2129150126)
* [Population, Latin, and Caribbean Countries, 2010–2019, long format](https://docs.google.com/spreadsheets/d/1NYjSNhjISWa6GUVlBifkPKStbrRzCot12BTYLo5kpqc/template/preview?resourcekey=0-Pyk5PUaVE1gYzlQtMiiHNQ#gid=932264330)

OR

Download data:

[Population, Latin, and Caribbean Countries, 2010–2019, wide formatXLSX File](https://d3c33hcgiwev3.cloudfront.net/MBhn3splQCKL8Lr2UTHRMg_3f9a14fdd3f947a2b978de8aee8804e1_Population-Latin-and-Caribbean-Countries-2010-2019-wide-format.xlsx?Expires=1719446400&Signature=cfqHGs97u2q1p~18vU-bVw24pZFCOB6lJrL-Q8M-9bfBOjsn~sIsWWlUIUu0zBhK9VV1K37GI89HpJb0zm1Rax821MueoCGhyyod-XU3-fjkqgGtJAAV~-5i2euavpVtJW1w0Q0Zyem~Q4Nu3U-3zEVzl7SP5KPYT8DPU7K1-BQ_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

[Population, Latin, and Caribbean Countries, 2010–2019, long formatXLSX File](https://d3c33hcgiwev3.cloudfront.net/pAsDEZsvSpSwJDegUqvaGQ_5f34ed78cdcd494b821e4d8b29fdf8e1_Population-Latin-and-Caribbean-Countries-2010-2019-long-format-.xlsx?Expires=1719446400&Signature=f-M2jEqsk4AmQAZW5XKLG4ZDzku3vd256koGV1v8pF6UMqZMO6k6rMAUfxuwDe6DfWrEm98FcTvKM1tPw6yO3vBf~QIRAP3j52jSBx5uoeZ-X6~AeUwrEqdEFyShO4jg6B6b2GXZ8pe~Oe4oobR5rBqaO-gvUfPdd~7QP3LHgUA_&Key-Pair-Id=APKAJLTNE6QMUY6HBC5A)

## Example 1: Examine wide data

Wide data is a dataset in which every data subject has a single row with multiple columns to hold the values of various attributes of the subject. It is helpful for comparing specific attributes across different subjects.

1. Open the [Population, Latin, and Caribbean Countries, 2010–2019, wide format](https://docs.google.com/spreadsheets/d/1ZlhSF9X-E-7LgIBXdEEgyw1Czm0dQvjJ/template/preview) spreadsheet.
2. Each row contains all population data for one country.
3. The population data for each year is contained in a column.
4. Find the annual population of Argentina in row 3.
5. In this wide format, you can quickly compare the annual population of Argentina to the annual populations of Antigua and Barbuda, Aruba, the Bahamas, or any other country.

### **Find the country with the highest population in 2010**

1. Select column **E**, which contains each country’s 2010 population data.
2. Right-click column header **E** and choose **Sort Z to A**.
3. Notice that Brazil is now at the top of the list because it had the highest population in the year 2010.

### **Find the country with the lowest population in 2013**

1. Select column **H**.
2. Right-click column header **H** and choose **Sort A to Z**.
3. Notice that the British Virgin Islands are now at the top because they had the lowest population of all countries in 2013.

## Example 2: Examine long data

Long data is data in which each row represents one observation per subject, so each subject will be represented by multiple rows. This data format is useful for comparing changes over time or making other comparisons across subjects.

1. Open the [Population, Latin, and Caribbean Countries, 2010–2019, long format](https://docs.google.com/spreadsheets/d/1NYjSNhjISWa6GUVlBifkPKStbrRzCot12BTYLo5kpqc/template/preview?pli=1&resourcekey=0-Pyk5PUaVE1gYzlQtMiiHNQ) spreadsheet.
2. Notice the data is no longer organized into columns by year. All of the years are now in one column.
3. Find Argentina’s population data in rows 12-21. Each row contains one year of Argentina’s population data.
