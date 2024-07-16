# References

### Contents
1. Understanding References
2. Difference between References and Values
3.  Difference in Reference and Value Comparisons
4. References of Different Types
5. Arrays of References
6. Polymorphism
7. Up and Down Casting
&nbsp;
&nbsp;

## 1. Understanding References
Classes are reference types, meaning that when new classes are initiated and stored in a variable they are copying the reference information of the class from another part of the memory.

For example,

```
Dissertation diss1 = new Dissertation();
```

above shows the creation of the 'Dissertation' class. 
If we add to the above code a new instance of Dissertation class which is equal to diss1, such as

```
Dissertation diss1 = new Dissertation();
Dissertation diss2 = diss1;
```

Then the new class diss2 would be created with the reference to the diss1 class. 
What this will mean is that, if there is a property Title.

```
Dissertation diss1 = new Dissertation();
Dissertation diss2 = new Dissertation();

diss1.Title = "Bob";
diss2.Title = "Frank";
```

The titles for this would be expected, Bob and Frank.
However, if diss2 references diss1 as follow

```
Dissertation diss1 = new Dissertation();
Dissertation diss2 = diss1;

diss1.Title = "Bob";
diss2.Title = "Frank";
```

When diss2 references the same class as diss1 it is referencing also the same memory. Therefore, when we see the property allocation for Title, we can see that the result would be for both diss1 and diss2 'Frank'

&nbsp;
&nbsp;

## 2. Difference between References and Values
#### Values
All value types hold actual data. For example,
```
int num = 6;
```
`int` being the value type and the variable num which is containing the value 6
All value types are known as primitive data types.

> *Note
>```
bool falseValue = false;
bool anotherFalseValue = falseValue;
```
>This will **NOT** result in a reference type. as the value type is bool which is primitive type.

#### References
All reference types refers to a place in the memory.

For example
```
Dissertation diss = new Dissertation(50);
```

All classes are references types, such that `diss` refers to a location in the memory where the Dissertation object is located.

&nbsp;
&nbsp;

## 3. Difference in Reference and Value Comparisons
Value comparisions are quite straight forward

```
int int1 = 6;
int int2 = 6;
Console.WriteLine(int1 == int2);
```
Results in true being outputted as the data values are being compaired.


For Reference comparisions, it is quite different.

```
Dissertation d1 = new Dissertation(50);
Dissertation d2 = new Dissertation(50);
Console.WriteLine(d1 == d2);
```
Results in false being outputted. This is because they do not contain data values, but references to the memory. 

Therefore, the reason false is outputted is because it is checking if the references to the memory are the same. They are not the same, and so false is outputted.

&nbsp;
&nbsp;

## 4. References of Different Types
Reference types can do cool things based on their types, however, it is possible if the referenced class either extends another class or implements an interface. Take the following,

```
Dissertation diss1 = new Dissertation();
```
Let's say the class `Dissertation` implements an interface named `IFlippable `
References can do something because it is not a data value but a reference. This reference can be represented in different types. 
&nbsp;
So we can do this,
```
Dissertation diss = new Dissertation(50);
IFlippable fdiss = diss;
```
The following will occur when we do this. `fdiss` will  recieve access to all the functionality provided in the `IFlippable` interface. However, `fdiss` will not receive access into the functionality of `Dissertation`
&nbsp;
For example, if `Dissertation` contains a method `Define` that is not constrained by the interface.  The following who throw an error,

```
fdiss.Define(); // Error
```
For this example, if we were to change `Dissertation` to a base class and have a sub-class-let's say `Book`
The same error will occur if `Dissertation` trys to access functionality that is contained in the sub-class, but not in the base class.

&nbsp;
&nbsp;

##  5. Arrays of References
Take the following code,
```
Diary dy1 = new Diary(1);
Diary dy2 = new Diary(30);
Dissertation diss1 = new Dissertation(50);
Dissertation diss2 = new Dissertation(49);
dy1.Flip();
dy2.Flip();
diss1.Flip();
diss2.Flip();
```

Looking at this beautiful mess, we can see that each references makes a method call to `Flip()`
But wouldn't it be more convinient to loop through it somehow and just call the method? Then if we made it an array would it be of type `Diary` or type `Dissertation`? Maybe something else?
&nbsp;
There's something that we can do as `Diary` and `Dissertation` both implement an interface `IFlippable `- which would look like, 
```
IFlippable[] classroom = new IFlippable[] { 
	new Diary(1), 
	new Diary(30), 
	new Dissertation(50), 
	new Dissertation(49) 
};
```
Each element are cast to the interface. Now it is all cleaned up in an Array of the same reference type, we can implement the following
```
foreach (IFlippable f in classroom)  {
	f.Flip();
}
```
This solution does come with a caveat, in that functionality will be only contained within the interface, and therefore, accessability to unique methods in either `Diary` or `Dissertation` will be lost.

&nbsp;
&nbsp;


## 6. Polymorphism 
We just saw how useful it is to have the same interface for multiple data types. This is a common concept across many programming languages, and it’s called polymorphism.

The concept really includes two related ideas. A programming language supports polymorphism if:

1. Objects of different types have a common interface (interface in the general meaning, not just a C# interface), and
2. The objects can maintain functionality unique to their data type

For example
```
Book b1 = new Book();
Book b2 = new Diary();

Console.WriteLine(b1.Stringify());  //OUTPUT: This is a Book object!
Console.WriteLine(b2.Stringify()); // OUTPUT: this is a Diary object!
```

&nbsp;
&nbsp;


## 7. Up and Down Casting
#### Up Casting
When it comes to casting reference objects, we have been able to do it so far with out any issues. This is because `Dissertation` would extend `Book` or would add an interface `IFlippable`

As we see below, we can do this

```
Dissertation diss = new Dissertation();
Book bdiss = diss;
IFlippable fdiss = diss;
```

This process is also known as **up-casting** which can be thought of casting up the inheritance hierarchy. This easily when it is implemented as 
```
class Dissertation : Book, IFlippable { 
	...
}
```
#### Down Casting
But what about **down-casting**? Looking at the same implementation of the `Dissertation` class above.  If we implemented down casting in the folloing,

```
Book bk = new Book();
Dissertation dbk = bk; // ERROR

error CS0266: Cannot implicitly convert type `Book` to `Dissertation`. An explicit conversion exists (are you missing a cast?)
```

This would throw an error! And in C# not every downcast is possible. Even if the same methods exist, the compile can throw the same error above, as it potential throw an error at Run-time.

The way to get arround this is to do type casting.
```
Dissertation bdk = (Dissertation)bk;
```
However, this is telling the compiler I know the potential risk, execute anyways. However, still another error can be thrown at us, which is about the cast not being a valid cast. 

There are more implementations including `as` and `is` modifiers that can more information can be gone into more depth in the following documentation

https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/types/casting-and-type-conversions 

&nbsp;