# Complicated and Esoteric Cyber Attacks

## Supply Chain Attacks
In cybersecurity, there is a concept known as pivoting, where an attacker will compromise one computer, then use that computer to compromise another computer. Supply chain attacks are the same idea, but with organizations instead of single computers.

For example, suppose you’re targeting a defense contractor to steal their secret documents: The defense contractor probably has good security, as mandated by their contract with the government. However, you happen to know that the contractor uses a piece of commercial software developed by a different company with weaker security. By hacking the software company, you could inject malware into the software they develop that gives you a backdoor into the computers it is installed on. When the defense contractor next updates their software, you now have access to their computers.

<br>

## Adversarial AI Attacks

### **AI and Cybersecurity**
AI is a very useful tool for cybersecurity, especially when trying to secure large or complicated environments. AI can be used to help identify abnormal or suspicious behavior, and report it to analysts who can investigate further.

However, like many cybersecurity tools, AI can also be used for more nefarious purposes, such as identifying vulnerabilities and methods of circumventing security. This is known as adversarial AI.

<br>

### **Machine Learning**
Some types of machine learning allow us to create algorithms that cannot practically be manually programmed. However, these algorithms have a downside: We don’t really understand how they make decisions. For example, if you train an algorithm to tell whether or not a picture is a cat or a dog, it’s very difficult to determine the algorithm’s “thought process”, even if its decisions are accurate.

<br>

### **Tainted Training Data**
Machine Learning algorithms require training data to learn how to function: If you want an algorithm to tell cats from dogs, you’re going to need a lot of pictures of both. This introduces an opportunity for malicious actors to influence the algorithm: By modifying the data used to train the algorithm, they can modify how the resulting algorithm will function. Maliciously modified training data is known as tainted training data.

<br>

## AI vs AI
While we may not be able to understand exactly how machine learning algorithms think, that doesn’t mean we can’t trick them. In fact, we have an excellent tool for developing ways to trick machine learning algorithms: other machine learning algorithms. By training one algorithm to fool another, we can create data that looks normal to us but will trick the target algorithm into giving nonsensical answers.

<br>

## Protecting your AI
There’s no foolproof way to prevent adversarial AI attacks, but there are some steps that can be taken to help protect against these attacks:

- Keeping training data secret can help prevent the data from being maliciously modified, and makes it harder for malicious parties to analyze the data.
- Training algorithms to detect and block against adversarial AI attacks is also an option.

