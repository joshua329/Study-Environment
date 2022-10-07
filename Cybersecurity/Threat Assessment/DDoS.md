# DDoS

**DDoS stands for Distributed Denial of Service**. A DDoS attack is when an attacker attempts to make a resource, such as a website’s various servers, go offline by overwhelming it with web traffic. It is similar to trying to drive during rush hour: the more cars there are, the slower everyone goes. How does an attacker do this? They make requests to a resource with a large number of computers, overwhelming the resource and making it run slower and slower until eventually, it goes offline entirely.

Because an attacker must use a large number of computers, the attack is “distributed” across multiple devices. The goal is to knock the resource offline so that it “denies service”; hence the name “distributed denial of service”.

This traffic comes from  **botnets** . Botnets are “robot networks” made up of computers infected by malware. These botnets can be made up of millions of bots, and can even include IoT devices. A single attacker can spread malware to many devices, and then use all of those devices in concert to act together, oftentimes without the victims ever knowing that their devices are infected.

## **Types of DDoS Attacks**
Network connections are defined by layers with each layer responsible for a different part of data transmission. Different types of DDoS attacks target different network layers, specifically, layers 3, 4, and 7, known respectively as the Network, Transport, and Application layers. Different DDoS attacks target different layers in different ways.

On the other hand, **“SYN Flooding”** targets the Transport layer by taking advantage of something called a TCP Handshake. Basically, it asks the server to wait for confirmation of a connection, but then never gives that confirmation. This is like a large group of people all asking the same person to hold something for them, but no one ever takes their item back, until the person holding everything eventually becomes overwhelmed.

## **Fighting DDoS**
There are a number of ways that websites try to guard against DDoS attacks, for example, by **rate-limiting** (limiting the number of requests a server will accept in a single time). 

**CAPTCHAs** can also provide some protection. Theoretically, a CAPTCHA can determine whether a user is a human or a “bot”, allowing legitimate web traffic to attempt to log in while blocking malicious automated traffic.

In general, it is difficult to guard against DDoS attacks. This is why websites seek protection from organizations such as Cloudflare, which provides protection against DDoS attacks by sitting between the server and the client, and forwarding legitimate traffic to the server while hiding malicious traffic. 