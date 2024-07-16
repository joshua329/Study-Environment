### Jump Statements
**BREAK**
```
while (playerIsAlive) 
{ 
// this code will keep running
 
  if (playerIsAlive == false) 
  { 
    // eventually if this stopping condition is true, 
    // it will break out of the while loop
    break; 
   } 
 } 
```
**CONTINUE**
```
int bats = 10;
 
for (int i = 0; i <= 10; i++)
{
  if (i < 9)
  {  
    continue;
  }
  // this will be skipped until i is no longer less than 9
  Console.WriteLine(i);
}
```
**RETURN**
```
class MainClass {
 public static void Main (string[] args) {
   UnlockDoor();
 
  // after it hits the return statement, it will move on to this method
   PickUpSword();
 }
``` 
```
 static bool UnlockDoor()
 {
   bool doorIsLocked = true;
 
   // this code will keep running
   while (doorIsLocked)
   {
     bool keyFound = TryKey();
 
      // eventually if this stopping condition is true,
      // it will break out of the while loop
     if (keyFound)
     {
      // this return statement will break out of the entire method
      return true;
     }
   }
   return false;
 }
}
```
