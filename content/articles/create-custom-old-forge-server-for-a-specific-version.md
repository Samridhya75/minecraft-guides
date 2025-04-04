---
id: forge01
title: How to create a Old forge (1.7-1.16.5) server for a specific release or version
date: '2025-03-24'
tags: ['minecraft','mods','forge','server']
excerpt: In this article, We will show you how to create a forge server for a specific forge release or version..
imageUrl: '/forgemc.png'
---
---

In this article, We will show you how to create a older Forge server for a specific Forge release or version. This article focuses on running the server in server hosting where custom jars and files are allowed.

### Prerequisites
- A PC or laptop with Java installed.
- A server hosting that allows custom jars and files to be uploaded.
- Basic understanding of file management.

### Instructions
> This process must be done on your local machine (Laptop/PC) before uploading files to your server.

#### Steps to install:
- Download the installer from Forge [website](https://files.minecraftforge.net/net/minecraftforge/forge/). Select your desired version and release.
- Run the Forge installer & select `Install Server` → Choose a temporary folder. You need to have Java installed for this to work.
- Rename the `forge-1.12.2.jar` or whatever the version number is to `server.jar`. This is the jar that runs the server. You can create a script 
- Select all the files in the folder and make a zip file and upload it to the root of your server where rest of the files are.
- Set java version to Java8 (Java11 in case of 1.16.5) in Settings.
- Unarchive the file and start the server to use the custom Forge version.