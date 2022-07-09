
### 1. Alternative expressions
**1. Expression-bodied Definitions**
```
bool IsEven(int num)
{
    return num % 2 == 0;
}
```
We can convert the method here to the following
```
bool isEven(int num) => num % 2 == 0;
```

**2. Method as Arguments**
We can pass a function into a method which is used
```
int[] numbers = {1, 3, 5, 6, 7, 8};

public static bool IsEven(int num)
{
   return num % 2 == 0;
}
```

given the array parameter and the method, we can pass both into a method for example
```
bool hasEvenNumber = Array.Exists(numbers, IsEven);
```
the method IsEven is called for each number

**3. Lambda Expressions**
```
int[] numbers = {1, 3, 5, 6, 7, 8};

public static bool IsEven(int num)
{
   return num % 2 == 0;
}
bool hasEvenNumber = Array.Exists(numbers, IsEven);
```

We can write the function *IsEven* as a lambda function with the same effect
```
bool hasEvenNumber = Array.Exists(numbers, (int num) => num % 2 == 0 );
```
**4. Shorter Lambda Expressions**
we can build a lambda expression as follows
```
bool hasEvenNumbers = Array.Exists(numbers, (int num) => num % 2 == 0 );
```
But we can shortern it
```
bool hasEvenNumbers = Array.Exists(numbers, num => num % 2 == 0 );
```