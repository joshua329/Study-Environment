# Penetration Testing
The goal of pen testing is to help clients improve their security by simulating an attack by a threat actor, to find vulnerabilities, and giving the blue team hands-on experience in adversarial environments. Done well, penetration testing can be an incredibly effective way to improve security.

## **What is Penetration Testing?**
**Penetration testing** is the process of identifying an organization’s vulnerabilities and providing recommendations on how to fix them. By breaking into the organization’s network environment. Penetration testing uses the same tools and skills that malicious hackers use, in order to test the security of the environment. In cybersecurity, the environment is usually networks and computers, but physical pen testing also exists. Usually, penetration testing is carried out by external groups hired by an organization.

The main benefit of penetration testing is that it gives a realistic test of security measures, without causing the damage of a real cyberattack. Pen testing can reveal hidden security weaknesses or oversights that otherwise might have gone unnoticed, provide defensive security teams with hands-on experience countering active cyberattacks, and direct efforts to improve security.

# The basics of Pen Testing
While pen testing does involve hacking, it’s not usually an “anything goes” scenario. Organizations don’t normally want pen testers to cause actual damage, just see if they could. **Rules of Engagement (ROE)** are documents that specify the parameters of the penetration test (also referred to as the engagement).

## **Attack Profile**
Organizations may want to simulate from various sources, both internal and external. Attack profiles are an important consideration in penetration testing and refer to how much information the pen testers are given about the environment ahead of time.

- **White-Box** pen testing is done with full knowledge of the environment, simulating attacks from knowledgeable insiders. This type of pen test can also be used to follow up on discoveries made during other types of pen testing.
- **Grey-Box** pen testing is done with partial knowledge of the environment, simulating an attacker with some insider knowledge. They require some reconnaissance on the part of the pen tester.
- **Black-Box** pen testing is done with no knowledge of the environment, simulating an external attack. The pen tester can only obtain information through reconnaissance.

## **Teams**
The people defending the network are just as much a part of the pen test as the people attacking it. Rather than saying “attackers” or “defenders”, we refer to different groups involved in the pen test as teams.

**Red Team** and **Blue Team** are the most common types of teams to have, but there are others.
- **Red Team** is the team doing the ‘attacking’. They have goals set out in the ROE, such as breaching a specific server and aiming to complete their objective.
- **Blue Team** are the defenders. Their goal is to defend the environment and prevent the red team from accomplishing their goals.
- **White Team** is a team that serves as referees. For example, if the red team isn’t sure whether something they’re considering is allowed, or if an actual attack takes place, the white team will be able to provide guidance or stop the exercise completely.
- **Purple Team** is less of a team and more of a methodology. In a purple-team scenario, the red and blue teams meet regularly to discuss how the pen test is going. This diminishes the adversarial nature of the exercise but can be useful for teaching the blue team about defense.