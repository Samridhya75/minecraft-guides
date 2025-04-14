---
id: forge02
title: How to create a new Forge server(1.17 or newer) for a specific release or version
date: '2025-03-28'
tags: ['mods','forge','server']
excerpt: Tutorial on how to create a Forge server for a specific Forge release or version.
imageUrl: '/forgemc.png'
---
---

In this article, We will show you how to create a Forge server for a specific forge release or version. This article focuses on running the server in server hosting where custom jars and files are allowed.

### Prerequisites
- A PC or laptop with Java installed.
- A server hosting that allows custom jars and files to be uploaded.
- Basic understanding of file management.

### Instructions
> This process must be done on your local machine (Laptop/PC) before uploading files to your server.

#### Steps to install:
- Download the desired Forge installer version from their [wesbite](https://projects.neoforged.net/neoforged/neoforge).
- Run the installer on your PC. You should have Java installed on your PC for this to work.
- Select `Install Server` checkbox and choose a temporary folder to install. Wait for the installer to finish downloading necessary files.
- Once done delete the `run.sh` & `run.bat` from the folder.
> If you wish to run the server on a Windows PC or Linux you will need the run.bat and run.sh files respectively.
- Navigate to the following location in your temporary folder: `libraries/net/minecraftforge/forge/<version>`.
- You will see few files in there. Move `unix_args.txt` file to the root of your temporary folder.
- Now that this is done, select all the files in the folder and make a archive (zip or 7z or rar) file.
- Upload the archive file to the root of your server hosting where the rest of the files for your server is.
- Unarchive or extract the file and after some time you should see all the files there.
- Start the server and there you have your Forge server ready to play!

If you encounter any problem with the server itself, you should go and ask the dev team of Neoforge. You can also join our discord server if you have questions regarding the installation process.

Links:
- [Neoforge Website](https://neoforged.net/)
- [Neoforge Discord](https://discord.neoforged.net/)
- [Modrinth for mods](https://modrinth.com/mods?g=categories:neoforge)