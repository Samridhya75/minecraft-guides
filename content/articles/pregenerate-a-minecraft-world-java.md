---
id: server01
title: How to pregenerate a Java minecraft world
date: '2025-04-08'
tags: ['java','server']
excerpt: Tutorial on how to pregenerate a Minecraft Java world for a server..
imageUrl: '/minecraft.webp'
---
---
In this article , we will show you how to pregenerate a Minecraft Java world for a server. We will use plugins/mods to achieve this. But first the big question WHY? The minecraft world generation is very CPU intensive and very poorly optimized. It requires a lot of CPU power to generate new chunks when a player is travelling in fast pace using an elytra. When the chunks are generating in real time, it also causes the server to slow down and lags the game pretty hard. That's where pregenerating the world comes in handy.<br>

When the chunk are already generated and stored in the storage, its easier for the server to load the chunks faster since the CPU doesnt have to spend time generating the chunks. Instead it can just render the chunks for the player. This improves the overall gameplay experience and also doesnt slow down the server severly. This is specially helpful in resource constraint situations for example in low powered servers.<br>

All right enough yapping let's get to business. We will need few things: a decently powerful PC/Laptop with latest Java LTS version installed, a Paper/Fabric/Forge server to use the plugin or mod, and the star of the show Chunky plugin/mod.<br>

### Setting up the server
You need either a Paper or Fabric or Forge server to proceed. For Paper and Fabric server the setup process is similar to what will be shown here. For Forge server, you can read this [article](/articles/create-custom-new-forge-server-for-a-specific-release-or-version) to setup a Forge server and follow the steps from.<br>
You also need to download Chunky plugin from [here](). Download the plugin/mod version for whichever server you want to use later.<br>
- Create a temporary folder and place the downloaded Paper/Fabric server jar in this folder.
- Rename the jar file to `server.jar` for ease of use.
- Create a new file called `run.bat`(Windows) or `run.sh`(Linux or Mac) and add the following lines:
```
//Windows
java -Xms1024M -Xmx4096M -jar server.jar nogui

//Linux or Mac
#!/bin/bash
java -Xms1024M -Xmx4096M -jar server.jar nogui
```
- Once done, double click on the `run.bat` to start the server. It will generate all the neccessary files to run the server. If you are on Linux or Mac, you might need to make the shell script executable. Run this command below in your terminal. 
```
//Linux
chmod u+x run.sh

//Mac
chmod 755 run.sh
```
- Then use `./run.sh` command in terminal to start the server.
- After the server is done loading everything, stop the server. You will see that there are folders called plugins/mods.
- You need to place the Chunky plugin or mod in the plugins/mods folder depending on the server you have.
- After placing the plugin/mod in correct place, start the server again. Let the server start and finish loading the plugin/mod.
- Now you can use these commands to generate the world:
```
chunky world overworld     (to set the selected world to overworld)
chunky world the_nether    (to set the selected world to nether)
chunky world the_end       (to set the selected world to the end)

chunky radius 2000         (set block radius for the current selected world )
chunky start               (starts the chunk generation process)
```
- So in short, you start with selecting the world you want to generate with `chunky world overworld`, then set the radius using `chunky radius 2000` and then start the chunk generation using `chunky start`. 
- Now the chunk generation speed entirely depends on the CPU processing power of your PC. The metric to look out for is how much *cps*(chunks per second) you are getting. The higher the *cps* the faster its gonna generate the chunks.
- A bit of warning, don't pregenerate on a server hosting,it can lead to suspension of your server as it is against the usage policy on most providers. 
- You can keep increasing the radius and generate more chunks although its not a good idea to generate a very large world. You will face issue when uploading the world to your hosting provider.
- After you are done pregenerating the world, its time to upload it to the server. Select the `world` folder in case of Fabric/Forge server and `world`, `world_nether`, `world_the_end` in case of Paper server. Make a zip file of them.
- Upload this zip file to your server and unarchive it.

That's it. The world is pregenerated and ready to go! If you have any queries, please join our Discord server.

### Links
- [PaperMC]()
- [FabricMC]()
- [Forge]()
- [Chunky]()

