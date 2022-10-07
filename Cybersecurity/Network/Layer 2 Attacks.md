# Layer 2 Attacks
e’ll be looking at attacks that target layer 1 and 2 networking protocols. We’ll start with a brief review of the OSI model, focusing on layers 1 and 2. Then, we’ll look at two examples of how protocols in these layers can be attacked.

<br>

## **OSI Layer 1 & 2**
The OSI model divides networking protocols into 7 layers, but the relevant layers for today are layer 1 (Physical), and layer 2 (Data Link). 

Layer 1 involves the physical transmission of data between two devices, like sending a current through a wire. Layer 2 manages the transmission of data between two devices.

<br>

## **Switches**
Switches are a type of networking equipment that forward packages to other nodes of the network. Switches have multiple ports, and so can be connected to multiple machines. For example, you might have a router connected to a switch, and a switch connected to several computers.

<br>

# ARP Poisoning Attacks

**Address Resolution Protocol (ARP)** is a protocol for figuring out what the MAC address associated with an IP address is. When a device wants to know the MAC address associated with an IP, it broadcasts a request on its local network segment, asking what mac address is associated with `$IP?`. All other devices on the network segment see this broadcast, but only the device that has the IP is supposed to respond, providing its MAC address in response. 

<br>

## **Poisoning ARP**
ARP was not designed with security in mind, and you may be able to see a flaw with how it works: When a request is sent, only the device with the correct IP is supposed to respond, but there’s nothing stopping an attacker from responding instead, providing their MAC address, causing data to be sent to that MAC address instead of the intended recipient. This is known as ARP Poisoning, and has a variety of uses, from denial of service to man-in-the-middle attacks.

<br>

## **MAC Spoofing**
The MAC addresses are split into two 24-bit sections, with the first section identifying the manufacturer and the last 24 bits serving as a unique ID for that manufacturer. However, it is entirely possible for devices to “lie” about their MAC address, which is known as **MAC Spoofing**. It is NOT a difficult process, and security measures such as keeping a deny-list of MAC addresses can be easily circumvented.

<br>

## **MAC Flooding**
MAC Flooding is an attack that targets switches on a network. Switches have multiple ports that devices can connect to, and in order to forward data to its destination, the switch needs to know what MAC addresses correspond with what ports. Switches store this information in their memory. MAC Flooding tries to cause the switch to run out of room for storing MAC Addresses by spamming it with data that claims to be from a large number of different MAC addresses.
