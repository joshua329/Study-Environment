# Exploiting Math

## Hash Collisions
When a hashing algorithm produces the same output for two separate inputs, this is known as a hash collision.

In general, the larger the output size of a hashing algorithm, the harder it is to find hash collisions in that algorithm.

<br>

## Birthday Attacks
A birthday attack is a method of forging digital signatures that exploit this property of hash collisions. If you have a legitimate file, and you’re trying to find a malicious file with the same hash, it’s going to be easier if you have multiple, subtly different versions of the legitimate file that produce different hashes.

Birthday attacks are named after the birthday paradox, in which the odds are 50% that at least one pair of people in a group of 23 will have the same birthday.

<br>

# Exploiting Implementation
A door is only as strong as the frame that it’s mounted on, and while some types of cryptography can be attacked mathematically, it’s often much easier to just “go around” the cryptographic security altogether.

<br>

## SSL Stripping
HTTPS is a version of the HTTP protocol that is secured by SSL. A clever attacker can downgrade a connection from HTTPS to insecure HTTP, in what is known as SSL stripping. This allows an attacker to bypass the security implemented by HTTPS, such as verifying that a website is a website it claims to be.

SSL stripping is fairly easy to prevent, by configuring browsers and servers to refuse standard HTTP connections and only use HTTPS. The HTTP Strict Transport Security (HSTS) header is one tool that servers can use to prevent SSL stripping.

<br>

## Session Reply Attacks
**Session replay attacks** are where an attacker “replays” stolen information. For example, if an attacker is able to intercept a communication where you log into your bank, they might be able to resend the same information and get into your bank account, even if they didn’t know your credentials.

Preventing session replay attacks can involve timestamping requests, identifying suspicious information in a request, or ensuring that each request is unique in some way, and is only valid once.

<br>

## Pass the hash attacks
Properly stored passwords are stored as salted hashes and are very difficult to crack. To check if an entered password is correct, it is run through the same process, and compared to the hash for the correct password. If they match, the password is correct… But what if an attack is able to steal the correct hash?

Most systems won’t be vulnerable to simply entering the correct hash in the password field, since it would get hashed again and produce a different result. However, some systems do accept password hashes as authentication credentials. This is known as a **pass the hash attack** and is often used to log onto other computers within a compromised network.

<br>

## Initialisation Vectors
**An initialization vector (IV)**, also known as a nonce (“number only used once”), is a value that sets the initial state of a cryptographic algorithm. In a well-designed system, the IV will be difficult to predict, since a predictable IV means a predictable output from the cryptographic algorithm.

Unfortunately, not all systems are well-designed. An initialization vector attack is where an attacker is able to predict the IV used for encryption, allowing them to defeat the encryption and access supposedly secure data. A poorly implemented IV might start from the same value each time the machine is powered on, or use a badly designed pseudo-random number generator that allows an attacker to predict future IVs from past IVs.