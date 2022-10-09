# Passive and Active Reconnaissance
Reconnaissance is the process of acquiring information about a target. That target might be a computer, a network, or a future victim of a social engineering attack. Reconnaissance can be passive or active, depending on how it acquires information.

**Active reconnaissance** involves actively interacting with the target. For example, a hacker performing active reconnaissance on a server might send unusual packets to that server, to try and get a response containing information.

**Passive reconnaissance** does NOT involve actively interacting with the target. Instead of sending packets to a server, a hacker might observe the traffic the server sends and receives, instead of sending traffic themselves.

<br>

# Passive Reconnaissance techniques

## **OSINT**
**Open-source intelligence (OSINT)** is a reconnaissance that uses publicly available information. There is an alarming amount of information floating around the internet that can be of use to threat actors. For example, a threat targeting an organization might collect information on employees such as their name, role, social media accounts, email addresses, etc. They might also be able to find out technical information, from what hardware vendors the organization uses, to what brand of elevators they have in their office building.

OSINT relies heavily on social media platforms and search engines to find information.

## **Footprinting (passive version)**
Footprinting (also called fingerprinting) is the process of determining what software a network host is running. This is very useful information for an attacker, and footprinting can be done both passively and actively. Passive footprinting usually involves observing the traffic that a target receives, and how it responds to it.

<br>

# Active Reconnaissance
## **Social engineering**
**Social engineering** can be a useful tool for reconnaissance, in some ways serving as an active counterpart to OSINT. For example, OSINT might use publicly posted information on an employee’s social media, while social engineering might involve posing as a fellow employee in order to gain information.

The ethics of using social engineering in a penetration test can be complicated, but most real threat actors have no such qualms, and it’s important for personnel to be able to defend themselves against social engineering attacks.

## **Footprinting (active version)**
The active version of footprinting involves sending data to the target, and observing how it responds. One common example of this is port scanning with tools like Nmap, which is a powerful and versatile tool for pen testing. Active footprinting provides a more detailed and complete picture of a network or host’s configuration, but well-configured environments will attempt to detect and alert when active scanning takes place.

## **War Driving**
**War Driving** is a hybrid digital/physical technique where an attacker will drive around, scanning for wifi networks. In pen testing, this can be used to create maps of network coverage, and search for insecure networks. The information collected from this can be used for wifi attacks like Rogue Access Points or Evil Twin Attacks.

## **Drones and UAVs**
As drones and UAVs get cheaper and more accessible, they become an increasingly popular tool for hackers. One of the simplest uses for drones is war flying, which is just wardriving but using a drone instead of a car. This has the advantage of allowing the hacker performing the reconnaissance to stay further away from security guards and cameras.

Drones can also be used to deliver physical devices to otherwise inaccessible places or drop malicious USB drives around an area, hoping someone will pick one up and plug it in.
