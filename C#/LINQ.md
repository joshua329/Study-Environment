# References

### Contents
1. Importing LINQ
2. Method and Query Syntax 
3. Query Syntax
&nbsp;
&nbsp;

## 1. Importing LINQ
To start using list object queries, we will need to import the following
```
using System.Collections.Generic;
using System.Linq;
```
We will need to also import the collections namespace a lot of the times, due to it being used with the collections.

&nbsp;
&nbsp;

## 2. Method and Query Syntax
When in comes to LINQ queries can be written in 2 ways
	1. Query Syntax,
	2. Method Syntax

#### Query Syntax
Query Syntax can be written in a multi-line statement. Such as
```
var longLoudHeroes = from h in heroes
								 where h.Length > 6
								 select h.ToUpper();
```

#### Method Syntax
While, Method Syntax can be written with method calls on a collection as such,
```
var longHeroes = heroes.Where(h => h.Length > 6);
var longLoudHeroes = longHeroes.Select(h => h.ToUpper());
```

we can also chain the method syntax 
```
var longLoudHeroes = heroes
.Where(h => h.Length > 6)
.Select(h => h.ToUpper());
```

&nbsp;
&nbsp;

## 3. Query Syntax
Within the query Syntax there are the 3 main parts.
1. `from` is the operator that can iterate through a sequence on elements.
2. `where` is the operator that contains the condition to whether an element satisfy or not.
3. `select` is the operator that determines what is returned for each element

&nbsp;
&nbsp;