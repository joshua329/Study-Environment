# Exploratory Analysis

**Exploratory analysis** is the next step after descriptive analysis. With exploratory analysis, we look for relationships between variables in our dataset. While our exploratory analyses might uncover some fascinative patterns, we should keep in mind that exploratory analyses cannot tell us why something happened: correlation is not the same as causation.

## Clustering

**Unsupervised machine learning** techniques, such as **cultering** algorithms, are useful tools for exploratory analysis. These techniques "learn" patterns from untagged data, or data that do not have classifications already attached to them, and they help us see relationships between many ariables at once

check out how cluster analysis works with penguin data that scientists collected in Anatartica ( [https://allisonhorst.github.io/palmerpenguins/](https://allisonhorst.github.io/palmerpenguins/) )

- We have four measurements (weight, beak length, beak depth, and flipper length) from Gentoo, Adelie, and Chinstrap penguins living on three islands. It's pretty difficult to see relationships between the measurements looking at the raw data
- Ideally, we want to see how all the measurements relate to each other, but plotting them all would be a lot to look at. Instead, we can perform a **Principal Component Analysis** or PCA, which compresses the variables into principal components that can be plotted against each other. After PCA, we can use **k-means culterings** to look  for trends in the data. we see that the penguins fall into three distinct clusters in the PCA plot.
