# Threat Hunting
**Threat Hunting** is a proactive security technique, where defenders will actively search for threats in their systems, guided by threat intelligence. A good analogy for this would be museum security: Passive security measures might be locked doors or alarms on display cases, while threat hunters would be guards actively patrolling and searching for any intruders that might be present.

The longer a threat goes undetected in a system, the more damage it can do. By proactively searching for threats, they can be detected before reactive security measures are triggered, limiting the damage done.

## **When to threat hunt**
Threat Hunting is relatively costly in terms of resources when compared with many reactive security measures. It requires trained security personnel to dedicate their time, and it’s important to use that time effectively. For this reason, threat hunting isn’t usually done without a particular threat in mind.

**Threat Intelligence** is information about threats that are targeting or are likely to target an organization, and it is used to determine when threat hunting should be carried out. Sources such as advisories or security bulletins are usually good sources for threat intelligence. Threat intelligence can be both that there is a threat (for example, a new type of malware), and specific information about threats (indicators of compromise that the malware creates).

<br>

# How threat hunting works

## **Intelligence fusion**
Good security environments will log a lot of data, and that data can be used to search for threats. However, searching this data manually is not practical. Instead, a piece of software called SIEM (Security Information and Event Management) collects this data and allows that data to be easily searched and queried. Intelligence Fusion is the process of searching and correlating data from many sources, in order to look for indicators that a threat is present.

**Threat Feeds** are feeds of threat intelligence that can be used for this type of threat hunting. Often, threat feeds contain information about Indicators of Compromise (IOC) that indicate a threat is present. The process of intelligence fusion can be automated by combining data logged from the security environment with data from threat feeds.

## **Adversarial hacking**
Threat hunting often involves hacking, and hacking is adversarial. Most threats would like to avoid detection, and threat actors who are people (as opposed to say, malware) are likely to be skilled hackers who will actively attempt to avoid detection. 

In cybersecurity, a maneuver is a strategy employed by hackers (both attacking and defending) to gain an advantage over the other side. An important maneuver for defensive hackers is stealth: While it may be relatively easy to kick an attacker out of a network temporarily, they can get right back in if the vulnerability they used isn’t fixed. What’s more, they may have obtained persistence using backdoors, providing even more ways for them to reenter. Until the security team has developed a remediation plan, it may be best to stay undetected and observe the attacker’s actions.