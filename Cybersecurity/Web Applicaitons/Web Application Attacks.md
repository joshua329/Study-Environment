# Injection Attacks
Many web applications rely on back-end software for parts of their functionality, and some of this software, like databases, receives queries based on user input. An injection attack is when an attacker makes a malicious query that tricks the software into doing something it shouldn’t.

<br>

### **SQL injection**
SQL injection attacks can be used for a variety of nefarious purposes, from reading or modifying data, to issuing commands to the operating system running the database. It’s common for web applications to use user input for database queries: Search functionality is a good example of this.

<br>

### **LDAP Injective**
Lightweight Directory Access Protocol (LDAP) is used to access directories on a network. LDAP injection targets this protocol. Some web applications create LDAP queries from user input, and since LDAP often deals with credentials such as usernames and passwords, a malicious query can have a big security impact.

<br>

### **Preventing Injection Attacks**
If a web application is going to be making a query based on user input, then you need to make sure that input can’t be used to manipulate the software answering the query. One way to do this is with input sanitization, where queries are checked to make sure they don’t contain control characters used to trick the software, but it’s better to structure queries in ways that inherently resist injection, like SQL’s parameterized queries.

<br>

# Directory Traversal
The structure of a website can correspond to the structure of a filesystem on the server the website is running on. Directory Traversal is when an attacker is able to explore parts of the filesystem they shouldn’t. This is generally accomplished using **..**, which translates to “the folder above this one” in file paths. The simplest way to do this is to just put two periods .. in the URL, like so: **www.example.com/../../...**

This can be used to read files that really shouldn’t be read, such as the /etc/passwd or /etc/shadow files on Linux, which store user information and password hashes respectively.

# XSS and CSRF
Where injection attacks target the back-end of a web application, cross-site scripting and cross-site request forgery target the front-end.

## Cross-site scripting
**Cross-site scripting (XSS)** is when user input on a website is treated as javascript and run. The severity of XSS vulnerabilities can vary from low to very high depending on what type of XSS it is, and what the site does.

**Reflected XSS** is when a website returns the malicious user input immediately, such as a search function displaying the query at the top of the screen. In order to affect other people, you would need to trick them into, for example, clicking a URL with the malicious query embedded as a parameter. This can still be dangerous, but nowhere near as dangerous as…

**Stored XSS**, where the user input is stored on the site such as in a post on a social media website or forum. Because the input can be shown to many people, it can be much more dangerous. This type of XSS has been used for everything from relatively-harmless pranks such as self-sharing social media posts, to large-scale theft of credit-card data.

<br>

## Cross-Site Request Forgery
Cross-site request forgery (CSRF) is when one website is able to send requests to another website where you are currently authenticated. This is a bit confusing, so imagine it like this:

1. You’re logged into your bank account in one tab. 2 You visit a malicious website in another tab.
2. The malicious website contains HTML that says to send a request to your bank’s website to do something evil.
3. Your browser obeys the HTML code and sends the request.
4. Your bank’s website receives the request from your browser. As far as it knows, the request comes from you, so it does the evil bidding of the request.

This type of vulnerability often takes advantage of cookies stored in the browser and can be defended against by using SameSite cookies, and CSRF tokens, which are random values generated for each session and must be included in requests for them to be executed.
