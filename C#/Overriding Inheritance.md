### Overriding Inheritance
When we are Inheriting classes, there may be methods that are also inhertied by the sub-classes. Then if there are some methods that need to be a little different, that is when the use of ***virtual*** and ***override*** are used.

>**1. Virtual**
'virtual' is used by the inhertied class, in which the methods has the potential to be different in the subclasses.

```
public virtual void SpeedUp()
```

>**2. Override**
'override' is used in the sub-classes that inherits the methods and applies the override modifier to say to the complier that this method is not the same as the class.

```
public override void SpeedUp()
```

>**3. Abstract**
'abstract' is used in inherited classes, and its implementation is seen similar to an interface, which is to make sure that the sub-classes, all contain definitions of the method. However, each sub-class will have their own implementation.

```
public abstract string Describe();

```

to contain an abstract method, the class must also be an abstract class
```
abstract class Vehicle
```