# Back-End Web Architecture

The back-end is the code that runs on the server, that receives requests from the clients, and contains the logic to send the appropriate data back to the client, and contains the logic to send the appropriate data back to the client. The back-end also includes the database, which will persistently store all of the data for the application. This article focuses on the hardware and software on the server-side that make this possible.

## What are the clients?

The clients are anything that send requests to the back-end. They are often browsers that make requests for the HTML and JavaScript code that they will execute to display websites to the end user. However, there are many different kinds of clients: they might be a mobile application, an application running on another server, or even a web enabled smart appliance

## What is a back-end?

the back-end is all of the teachnology required to process the incoming request and generate and send the response to the client. This typically includes three major parts:

- the server. Thisis the computer that receives requests.
- The app. This is the application running on the server that listens for requests, retrieves information from the database, and sends a response.
- The database. Databases are used to organise and persist data.

## What is a server?

A server is simply a computer that listens for incoming requests. Though there are machines made and optimised for this particular purpose, any computer that is connected to a network can act as a server. In fact, you will often use your very own computer as a server when developing apps.

## What kinds of responses can a server send?

The data that the server sends back can come in different forms. For example, a server might serve up an HTML file, send data as JSON, or it might send back only an HTTP status code

http://www.restapitutorial.com/httpstatuscodes.html

You've probably seen the status code "404 - Not Found" whenever you've tried navigating to a URI that doesn't exist, but there are many more status codes that indicate what happened when the server received the request.

## What is a database, an why do we need to use them?

Databases are commonly used on the back-end of web applications. These databases provide an interface to save data in persistent way to memory. Storing the data in a database both reduces the load on the main memory of the server CPU and allows the data to be retrieved if the server crashes or loses power.

Many requests sent to the server might require a database query. A client might request information that is stored in the database, or a client might submit data with their request to be added to the database.

## What is a Web API, really?

An API is a collection of clearly defined methods of communication between different software components. More specifically, a *Web API* is the interface created by the back-end: the collection of endpoints and the resouces these endpoints expose.

A Web API is defined by the types of requests that it can handle, which is determined by the routes that it defines, and the types of responses that the clients can expect to receive after hitting those routes.

One Web API can be used to provide data for different front-ends. Since a Web API can provide data without really specifying how the data is viewed, multiple different HTML pages or mobile applications can be created to view the data from the Web API.

## Other principles of the request-response cycle

- The server typically cannot initiate responses without requests
- Every request needs a response, even if it's just a 404 status code indicating that the content was not found. Otherwise your client will be left hanging (indefinitely waiting).
- The server should not send more than one response per request. This will throw errors in your code.
