---
id: fabric01
title: How to create a Fabric server for a specific release or version
date: '2025-03-25'
tags: ['mods','fabric','server']
excerpt: Tutorial on how to create a fabric server for a specific fabric release or version..
imageUrl: '/fabricmc.png'
---
---

In this article, We will show you how to create a Fabric server for a specific fabric release or version.

### Prerequisties
- A laptop or PC with Java installed.
- Basic understanding of file management and Minecraft.

### Instructions
> This process must be done on your local machine (Laptop/PC) before uploading files to your server.

#### Steps to install:

Using the jar in a minecraft hosting:
- Download the Fabric installer from the Fabric [website](https://fabricmc.net/use/server/). Select your desired Minecraft Version, Fabric Loader version and Installer version and click on `Executable Server (.jar)` button to download it.
- Rename the downloaded file to *server.jar*.
- Upload the renamed file to the root of your server. Set the desired Java version from Settings and start your server.
- The jar should start executing and download all necessary files for the server.

Using the jar in Windows, Linux or Mac:
- Move the downloaded file to a temporary folder. Rename it to *server.jar*.
- Create a file named `run.bat` for Windows or `run.sh` for Linux and Mac and add the following to the file: *java -Xms1024M -Xmx2048M -jar server.jar nogui*. Place it in the same place as your server.jar file.
- Run the `run.bat` or `run.sh`. The jar should should start executing and downloading the necessary files.

Links:
- [Fabric Website](https://fabricmc.net/)
- [Aikar flags](https://docs.papermc.io/paper/aikars-flags)
