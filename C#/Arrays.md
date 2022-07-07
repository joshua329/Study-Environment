### Arrays

> Array Documentation
> https://docs.microsoft.com/en-us/dotnet/api/system.array?view=net-6.0

**SORT**
int[] plantHeights = { 3, 6, 4, 1 };
 
// plantHeights will be { 1, 3, 4, 6 }
Array.Sort(plantHeights); 

documentation (https://docs.microsoft.com/en-us/dotnet/api/system.array.sort)

**INDEX OF**
int[] plantHeights = { 3, 6, 4, 1, 6, 8 };
 
 // returns 1
Array.IndexOf(plantHeights, 6);

documentation (https://docs.microsoft.com/en-us/dotnet/api/system.array.indexof)


**FIND**
int[] plantHeights = { 3, 6, 4, 1, 6, 8 };
 
// Find the first occurence of a plant height that is greater than 5 inches
int firstHeight = Array.Find(plantHeights, height => height > 5);

documentation (https://docs.microsoft.com/en-us/dotnet/api/system.array.find)