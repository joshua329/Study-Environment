# Basic Redirection Attacks
So, an attacker wants to trick someone into visiting a website they don’t intend to visit. What options does the attacker have?

<br>

## **URL Redirection**
**URL Redirection** is a feature of HTTP requests that allow requests to be redirected to a different page. For example, if you attempt to view a page of a website that requires you to log in, you might be redirected to a login page. While this has plenty of innocent uses, it can also be used to trick victims into going somewhere they didn’t mean to. Setting up this sort of redirection usually requires some sort of access to a website that a victim wants to visit, meaning that it’s of limited utility, but it can be combined with other techniques, like phishing.

<br>

## **Domain Hijacking**
**Domain Hijacking** is when an attacker takes control of a domain name without the owner’s consent, via hacking, social engineering, or just snagging a domain that somebody forgot to renew. Domain hijacking doesn’t target the DNS but is aimed at the domain registrar and sometimes the domain owner.

**Domain Reputation** refers to how much trust the public has in a domain. If a domain is compromised, it may be used for spam and scams, decreasing its reputation and getting the domain blacklisted, even if its proper owner is able to regain control.

<br>

# DNS Poisoning

Another way an attacker can send people to websites they don’t intend to visit is via interfering with DNS, and causing domain names to point to the wrong IP address.

## **Man in the Middle**

The first way an attacker can accomplish this is by pretending to be a DNS server on a local network. By using ARP poisoning, they can imitate a DNS server, and respond to DNS queries with an IP address of their choosing.

## **Client Cache Poisoning**
In the old days, before DNS, there was still a way to tell your computer to associate domain names and IP addresses: The HOSTS file. This is a file, stored on your computer, with a list of domain names and IP addresses. The HOSTS file is still around and is still respected by most operating systems, allowing for the manual association of domain names and IP addresses on computers.

You probably see where this is going: If an attacker is able to modify the HOSTS file on a target computer and add a malicious entry, that computer will use the IP address in the HOSTS file, rather than the one provided by DNS, to resolve the associated domain name. This is known as **DNS Client Cache Poisoning**.

## **Server Cache Poisoning**
While client cache poisoning targets a client, **server cache poisoning** targets DNS servers themselves. Not every DNS server ‘knows’ about every domain. DNS servers keep caches of domains and IP addresses, and when they receive a request, they check the cache first, then request the information from a server above them in the hierarchy if they don’t have it cached.

If an attacker is able to insert malicious data into this cache, the DNS server will return the falsified result to anyone who requests a compromised domain, at least until the cache is refreshed. Similar to the method involving ARP poisoning, this is often accomplished through a combination of Denial-of-Service and impersonation, though on a much larger scale.