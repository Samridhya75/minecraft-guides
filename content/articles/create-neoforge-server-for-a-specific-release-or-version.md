---
id: neoforge01
title: How to create a Neoforge server for a specific release or version
date: '2025-03-24'
tags: ['minecraft','mods','neoforge','server']
excerpt: In this article, We will show you how to create a Neoforge server for a specific Neoforge release or version..
imageUrl: '/neoforge.png'
---
---

In this article, We will show you how to create a Neoforge server for a specific Neoforge release or version. This article focuses on running the server in server hosting where custom jars and files are allowed.

### Prerequisites
- A PC or laptop with Java installed.
- A server hosting that allows custom jars and files to be uploaded.
- Basic understanding of file management.

### Instructions
> This process must be done on your local machine (Laptop/PC) before uploading files to your server.

#### Steps to install:
- Download the desired Neoforge installer version from their [wesbite](https://projects.neoforged.net/neoforged/neoforge).
- Run the installer on your PC. You should have Java installed on your PC for this to work.
- Select `Install Server`, click on the `Server starter jar` (needed step for properly running the server on some hostings) checkbox and choose a temporary folder to install. Wait for the installer to finish downloading necessary files.
- Once done delete the `run.sh` & `run.bat` from the folder.
> If you wish to run the server on a Windows PC or Linux you will need the run.bat and run.sh files respectively.
- Navigate to the following location in your temporary folder: `libraries/net/neoforged/neoforge/<version>`.
- You will see few files in there. Move `unix_args.txt` file to the root of your temporary folder.
- Now that this is done, select all the files in the folder and make a archive (zip or 7z or rar) file.
- Upload the archive file to the root of your server hosting where the rest of the files for your server is.
- Unarchive or extract the file and after some time you should see all the files there.
- Start the server and there you have your Neoforge server ready to play!

If you encounter any problem with the server itself, you should go and ask the dev team of Neoforge. You can also join our discord server if you have questions regarding the installation process.

Links:
- [Neoforge Website](https://neoforged.net/)
- [Neoforge Discord](https://discord.neoforged.net/)
- [Modrinth for mods](https://modrinth.com/mods?g=categories:neoforge)