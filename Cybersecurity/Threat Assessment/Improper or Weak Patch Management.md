# Improper or Weak Patch Management
In cybersecurity, **patch management** is the process of regularly applying patches (fixes, updates, improvements, etc.) to software, in order to prevent existing vulnerabilities from being exploited by cyberattacks. Almost all software needs to be patched, from applications to operating systems. Even firmware needs to be patched sometimes.

## **Why patch?**
Zero-day vulnerabilities are software vulnerabilities that are not known to the developer when they are exploited. Known vulnerabilities are vulnerabilities that are known to the developer, and often have patches available for them.

Zero-day vulnerabilities are powerful but rare, often known to a very small number of people, if known about at all. Even if you know about a zero-day vulnerability, exploiting it often requires developing an exploit from scratch. In comparison, known vulnerabilities are much more accessible and often have exploits already developed for them, lowering the skill barrier required to take advantage of the vulnerability.

For these reasons, the vast majority of vulnerabilities that are exploited “in the wild” are known vulnerabilities, often ones that have been patched by the software developer.

## **How not to do patch management**
Let’s look at some of the ways NOT to do patch management. Obviously, these are things to avoid doing, unless you’re designing a pen-testing challenge or something.

- Not apply patches at all (especially if the patch fixes known vulnerabilities): This is one of the simplest and easiest ways to mess up patch management because all it requires is inaction.
- Don’t set up automatic patch management. Most environments offer some way to automatically handle patch management for you. Some software will even patch itself by default. If you’re trying to do bad patch management, you should avoid using automatic patch management whenever possible.
- Don’t document your assets: If you document what assets you have, someone might be able to use that documentation to patch things: The horror! If you don’t document what assets you have, it makes it much easier to leave them unpatched and forget about them until a hacker uses them to compromise your network.
- Apply patches unequally: An often-overlooked way to mess up patch management is to patch some, but not all, of your assets. This makes it difficult for anyone trying to patch those assets to figure out which ones need patches and which ones don’t.
- Remove patches: If someone has brought your assets up-to-date despite your best efforts, you could always remove patches, reintroducing vulnerabilities in the process. This is another great way to let vulnerabilities slip through the cracks, especially if you combine it with poor documentation.

## **What to do when you cannot patch**
Legacy software is software that is no longer supported or maintained by its developer. Applications, firmware, and even whole operating systems can become legacy software, and since it won’t be patched even if severe vulnerabilities are discovered, it can be incredibly dangerous to use.

The best way to avoid this problem is to not use legacy software, but that isn’t always a viable option; some organizations rely on legacy software to function, and that software needs to be secured somehow.

# Case Study - Wannacry Ransomeware
On April 4th, 2017, an exploit known as EternalBlue was leaked to the public. Eternal blue was an exploit developed by the United States National Security Agency (NSA). Eternal blue allowed for remote code execution on vulnerable Windows machines. At the time EternalBlue was leaked, a patch had been available from Microsoft for one month; The NSA had alerted Microsoft to the underlying vulnerability only after the exploit was stolen.

Two months later, in May of 2017, when EternalBlue had been patched for approximately three months, a piece of ransomware known as WannaCry exploded onto the internet. Making use of Eternalblue, it spread incredibly quickly, jumping from computer to computer. The initial wave lasted less than 7 hours but infected over 200,000 computers, causing an estimated billions of dollars in damages.

All due to a vulnerability that had been patched for three months.