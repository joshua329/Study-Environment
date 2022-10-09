# PTES
The **Pen testing Execution Standard (PTES)** is a standard for conducting penetration testing. It is divided into 7 phases, with some phases forming a loop that continues until the exercise comes to an end. The phases are as follows:

## **1. Pre-Engagement**
At this stage, there is a collaborative effort between the client and the pen tester, with the goal of tailoring the pen test to the client's needs. 

**The Rules of Engagement (ROE)** should be defined during this stage. It's important in delivering a pen test that meets the client's needs.

## **2. Intelligence Gathering**
At this stage, there is the gathering of information about the target. In black and gray-box pen tests, this means using passive and active reconnaissance techniques. In gray and white-box pen tests, this means going over the provided information about the environment.

## **3. Threat Modeling**
Once there is the information obtained in the previous stage. That information is used to determine what potential targets should actually be targeted. 

This involves:
- Determining how valuable a potential target it is.
- How difficult it would be to target.
- The capabilities of the adversary the pen test is trying to simulate.

## **4. Vulnerability Assessment**
With a target in mind, the red team now decides how to attack it. Using the information gathered in phase 2, and prioritizing the targets chosen in phase 3, the red team will look for vulnerabilities that they can exploit in order to advance their goal. 

## **5. Exploitation**
This phase is about actually exploiting vulnerabilities. This can be done in many different ways: Using tools like **Metasploit** to automate the process, using custom pre-existing exploits, or even developing entirely new exploits.

## **6. Post-Exploitation**
Once an exploit is completed, there’s still work to do. Here are some of the key activities that take place in the post-exploitation phase:

- **Obtaining Persistence:** The ability to maintain access even if the initial attack vector is closed.
- **Privilege Escalation:** Exploiting some vulnerabilities to increase one’s access in the environment.
- **Cleanup:** Removing evidence of the exploit.
- **Pivoting:** Using the access gained in the exploitation stage to repeat stage 2-6. For example, the red team might compromise an IT worker’s computer, then use stored credentials to pivot to a web server that they had not been able to access before. This is also referred to as lateral movement.

## **7. Reporting**
Throughout the pen test, the pen testers should be documenting everything they do. In this phase, the information they collect is turned into a report for the client: Every vulnerability, every recommendation, etc. Remember, the purpose of a pen test is to improve the client’s security, so this is a crucial step, albeit less exciting than some of the others. Even a “failed” pen test where the red team didn’t accomplish their goals can still provide useful information for the client.

