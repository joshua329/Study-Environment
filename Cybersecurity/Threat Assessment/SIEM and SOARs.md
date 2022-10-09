# SIEM & SOARs
SIEMs are powerful tools for cybersecurity, allowing defenders to focus their attention where it is required, and filter out irrelevant information. They can provide active monitoring and generate alerts when unusual behavior is detected, and assist with the investigation by providing data that is easily searched and cross-referenced.

## **SIEMS**
**SIEM (Security Information and Event Management)**, are tools used in cybersecurity to aggregate large amounts of information collected from throughout a security environment and present it in a way that is useful for security teams. This data is used both for real-time monitoring, as well as analysis of past events within the environment.

## **How do SIEMs Work?**
SIEMs take data from inputs and aggregate it, from many different things: Endpoint security software, intrusion detection systems, firewalls, and much more. If it creates a log, it can probably be fed into a SIEM. The process of collecting and combining this log data is referred to as log aggregation.

The data can be analyzed and cross-referenced. This ability to cross-reference data from many sources is what makes SIEMs so powerful: suspicious behavior that might go unnoticed on its own can be picked out when combined with information from other sources.

## **What do we use SIEMs For?**
SIEMs have two main purposes: **Monitoring** and **investigation**. Monitoring is done in real-time and allows suspicious behavior to be quickly identified as it happens. The investigation is done after the fact, using the data aggregated by the SIEM.

- **Monitoring**, in particular, is an incredibly useful tool: You can monitor any data collected by the SIEM, from how much network traffic there is to how many emails are being sent and received each second. If you’re monitoring the number of emails received across your organization each second, and there’s suddenly a huge spike, that may indicate a large-scale phishing campaign. If the number of failed logins across the organization spikes, that may indicate that someone is trying to brute-force credentials.
- **Investigation** is looking at historical data to figure out exactly what happened during an incident. For example, packet captures from a malware attack can be analyzed to determine what IP addresses the malware was communicating with.

# SOARs
SIEMs are great, but they still require a human in the loop to actually respond to security incidents. SOARs (Security Orchestration, Automation, and Response) partially remove this requirement. SOARs work very similarly to SIEMs, but they can be configured to respond automatically to certain types of incidents. This can decrease response time, and help prevent damage while security teams are getting up to speed.
