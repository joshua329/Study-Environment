# Password Attacks

## **Terminology**
**Authentication** is about proving your identity.

**Authorization** is about what privileges someone has.

**Plaintext** refers to data that has NOT been encrypted or hashed, and is stored in an insecure, easily readable format. Storing passwords in plaintext is a very bad idea.

**Hashing** is related to encyrption, but the most important difference between the two is that encryption is reversible, while hashing is not. 
You can think of hashing as a sort of cryptographic blender: Data goes in, and a hash comes out based on that data, but if you’re given a hash, it’s mathematically impossible to reverse the algorithm and obtain the original data (though there are ways that don’t involve reversing the algorithm).

<br/>

## Plaintext
The easiest and most obvious solution is to store the passwords in a plaintext file, and make sure that only you and the authentication system have permission to read that file. 

In practice, all it takes for the hacker to complete their objective is to somehow access the file. There are many ways to go about this, from privilege escalation to just tricking the system into accessing the file for them. However they go about it, once they have the file, they have the plaintext passwords.

<br/>

## Encryption
The key used to encrypt the file needs to be stored somewhere so the authentication system can access it, and if the hacker can obtain the file containing the passwords, they can probably get the file containing the encryption key too.

<br/>

## Hashing
There’s another type of cryptography that can help you in the form of hashing. Hashing the entire password file wouldn’t help you, but what you can do is hash each password within the file individually. Then, when a user enters a password, you hash the password they entered and compare it to the stored hash. If the hashes match, the password was correct.

Assuming you used a secure hashing algorithm, there’s only one way for the hacker to figure out what the original passwords were, and that’s to try running different strings of characters through the same hashing algorithm until they get a hash that matches the hashed password. The easiest way to do this is with a brute force attack, where the attacker tries a, then b, then c, etc… when they’ve tried every single character, then they move on to aa, ab, ac, etc…

<br/>

## Salting
There’s no way to perfectly protect the passwords: As long as the attacker is able to make guesses and check if they’re correct, they will ALWAYS be able to crack a password eventually. What you can do, however, is make it so impractical that the hacker gives up and goes somewhere else.

1. You pick a new hashing algorithm, which is much slower than the old one. This doesn’t matter too much for the user, but for anyone trying to make lots of guesses, it will make the process much slower.

2. For each user, you generate a random string called a salt and store it with their username. When they set their password, you append the salt to the password before running it through the hashing algorithm, and do the same procedure to check if passwords are correct. Because each user’s salt is different, the attacker can’t use rainbow tables anymore: They have to crack each salted hash individually. Weak passwords can still be cracked by dictionary attacks, but that can be partially mitigated with training and password policies.