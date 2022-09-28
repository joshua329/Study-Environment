# Memory 101
Random Access Memory (RAM) is where a computer stores everything that it’s currently “thinking” about, in the form of a sequence of bytes. The text you’re reading right now is somewhere in your computer’s RAM, but so are the processor instructions that make up the browser you’re using to read it, and the operating system the browser is running on.

Each of these bytes has a unique address, and in most cases, there isn’t a distinction made between what bytes are data and what bytes are instructions for the computer to follow. When you create a variable in a program, you are telling the computer to allocate a little part of its memory for that variable when the program runs.

<br>

# Pointers
A pointer is a variable that stores the address of another variable. Most programming languages don’t require you to worry about pointers, but some, like C and C++, do. However, just because you don’t need to worry about pointers while programming doesn’t mean they aren’t used “under the hood” of the language.

A null pointer is a pointer that points to nothing. This is not the same as a pointer pointing to a variable with a value of 0: a pointer to a value of 0 is like being handed a paper with 0 written on it, and a null pointer is like being handed nothing. Attempting to dereference a null pointer will usually cause a crash, but can sometimes allow for arbitrary code execution.

<br>

# Messing with Memory

## **Memory leaks**
Computers have a finite amount of memory, so it’s important to be efficient. If everything is working correctly, programs will deallocate memory that they no longer need, but sometimes things go wrong. A memory leak occurs when allocated memory is not released when it’s no longer being used. This can cause a program to consume more and more memory over time, until no more are available, causing a crash.

Memory leaks are an example of resource exhaustion, where a computer runs out of finite resources like memory, disk capacity, network capacity, etc. Attackers can use resource exhaustion for denial of service attacks.

<br>

## **Overflow Attacks**
Not all of our data fits neatly into a single byte, which is why it’s important to be able to handle larger quantities of data. One method used for this is a buffer: a section of memory allocated by a program to store data in. If a program knows it’s going to receive 10 bytes of data, it can allocate a 10-byte buffer to store that data.

What happens if a buffer receives more data than it can handle? In the worst-case scenario, a buffer overflow happens, where data continues to be written outside of where it should be. Recall that computer memory contains not only data but also the instructions executed by the processor. If a program writes outside its buffer, it may unintentionally overwrite its own code, leading to unexpected behavior.

This can be used for a buffer overflow attack, where an attacker intentionally passes data that overflows a buffer, allowing an attacker to overwrite program instructions with malicious instructions of their own choosing.

<br>

# DLL Injection
A dynamic link library (DLL) is a file that contains instructions that other programs can use. This is very useful for programmers, as it means they don’t have to write all their programs from scratch: They can use DLLs that implement the functionality they need.

Unfortunately, not all DLLs are trustworthy. DLL injection is when an attacker is able to attach a malicious DLL to a legitimate program. As far as the program knows, the DLL is harmless, when in reality it’s doing the attackers’ bidding while masquerading as part of the legitimate program.

Antivirus software is well aware of malicious DLLs, so attackers will attempt to evade detection by refactoring their DLLs so that they don’t match the antivirus’s signatures for known malicious files.

DLLs are also used to maintain compatibility with legacy applications via a process known as shimming, where a DLL is injected into a program to ‘translate’ outdated function calls into ones supported by the current operating system. This is a popular way of injecting malicious DLLs into a program.
