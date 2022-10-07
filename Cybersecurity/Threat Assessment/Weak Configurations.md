# Weak Configurations
The vast majority of cyberattacks are preventable, and a key part of preventing attacks is proper configuration. In cybersecurity, weak configuration refers to configuration settings that decrease the security of an asset such as a computer or network.

<br>

# Host Configurations
## **Open Permissions**
Open permissions is a type of weak configuration where the principle of least privilege is breached, and access to data or applications isn’t properly restricted to only those who require it. Things like allowing anyone to view sensitive information, or to edit payroll databases can be considered examples of open permissions. Depending on what the improperly secured resource is, this can be very bad.

Best practices to prevent this type of weak configuration include using role-based access control and implementing a “default-deny” scheme that requires access to be explicitly granted to resources.

## **Unsecured root accounts**
Root accounts (also known as “superuser” or “admin” accounts) are accounts that have essentially unlimited access to a computer. Having an attacker gain access to a root account on a computer is known as “Getting Owned” ( or pwned), and means that the attacker has gained full access to that computer. Unsecured root accounts are vulnerable to takeover due to poor security configuration, such as weak passwords, or allowing remote logins as root.

Best practices to prevent this type of weak configuration include heavily restricting access to root accounts, disabling remote login as root accounts, enforcing strong passwords for root accounts, and using non-root accounts for administration when possible, in accordance with the principle of least privilege.

## **Insecure default settings**
Many pieces of hardware and software ship with insecure default settings, which as the name implies, are settings that are insecure by default. In the worst cases, this can be something like web server software having “admin/admin” as the default administrator username and password. Many insecure default settings are not so obvious, but still pose a threat: Hacking toolkits often have tools designed to identify and exploit vulnerabilities created by insecure default settings.

On a meta-level, this type of weak configuration can “contain” all the other types of weak configuration on this list, and even some that aren’t.

Best practices to prevent this type of weak configuration involve conducting a thorough review of the configuration settings for newly acquired assets and researching best practices for security for the particular asset being reviewed.

<br>

# Weak Network Configurations
## **Insecure Protocols**
Not all protocols are created equal, and some are less secure than others. Weak configurations can allow Insecure Protocols to be used instead of secure alternatives, causing data to be transferred unencrypted and opening the possibility of interception and man-in-the-middle attacks. An example of an insecure protocol is HTTP, as opposed to secure HTTPS.

Best practices to prevent using insecure protocols are to simply disallow the use of insecure protocols or to implement a default-deny schema that only allows secure protocols.

## **Weak Encryption**
Weak encryption refers to the use of a weak encryption algorithm and/or flawed implementation of encryption to secure data. Algorithms with known mathematical vulnerabilities or that are weak to brute force are weak encryption, but an improper key generation or improper distribution and management of keys can also cause weak encryption.

Best practices to prevent weak encryption include using up-to-date encryption algorithms that are still considered secure, and using implementations that have been “battle-tested”.

## **Revealing Errors**
Hacking often involves some element of trial and error. Revealing Errors are errors that make this process easier for an attacker, by providing them with useful information. For example, an attacker attempting SQL injection would gain much more information from an error that included the name and version of the database software than from an error that said: “oops, something went wrong”.

Best practices to prevent revealing errors include designing software in such a way that it does not reveal sensitive information if/when something goes wrong. This doesn’t mean the information can’t be logged, just that it should be treated as potentially sensitive information.

## **Open Ports and Services**
Computers would be very limited if only one program could communicate over the network at a time, and part of the way this is addressed is through the use of ports. Not physical ports, mind you, but virtual ports that exist within protocols like TCP and UDP. When a port is open, it means that there is some piece of software on a computer listening for incoming connections on that port. For example, software hosting a website might be listening on ports 80 (HTTP) and 443 (HTTPS).

Open ports can cause or exacerbate security problems. For instance, if an unused, outdated piece of software is listening to a port, that software and port can become an attack vector. Unmonitored ports can also be used by attackers to move around and transfer data undetected. Especially for servers that face the outside world, only the ports that need to be open should be open. Going back to the webserver example, you probably wouldn’t want people to be able to connect to, say, port 22 (SSH) from the outside world.

