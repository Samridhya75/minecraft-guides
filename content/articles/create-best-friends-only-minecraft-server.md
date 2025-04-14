---
id: paper01
title: How to create a Friends only Minecraft server using Paper and plugins.
date: '2025-04-04'
tags: ['plugins','paper','server','java']
excerpt: Find out how to create a friends only minecraft server using Paper and plugins.
imageUrl: '/papermc.webp'
---
---

In this article, We will show you how to create a friends only minecraft server using Paper and best plugins in the market. This article will show you the best plugins that you can use in the server to really level up a basic Minecraft server to an exciting one.

### Step 1: Choosing a good seed for your survival world
When starting a brand new world, it is important to choose a seed with a good spawn. You can find a good seed using two methods: <br><br>
**Method 1**: Creating singleplayer worlds<br> You can open your Minecraft client and keep creating singleplayer worlds and finding the best one which you prefer. Once you find the perfect seed with a good spawn, you can use the command `/seed` to get the seed of the world.<br><br>
**Method 2**: Finding seeds online <br> If you have watched Minecraft content on Youtube or other platforms, you might have come across videos where people showcase exotic seeds, you can take these seeds and play with them. Or you can search on Google and get ton of really good seeds from places like Reddit.<br><br>
Ideally, you would want to get a spawn in relatively flat area in a plains biome. This would drastically reduce the effort needed to terraform the landscape once you start doing your builds.

### Step 2: Find a Minecraft Server host
There are a ton of Minecraft hosts available throughout the world that offers various tiers of servers with varying prices. Ideally you would want to get a server which is hosted closest to where you and your friends(assuming you have friends) live. Since the following server is going to be using PaperMC as the server software, you would want to have atleast 2 CPU cores or threads, 6GB RAM and 10GB storage for the server. These are just a general recommendation that can help keep the experience smooth and snappy. You can always upgrade later.

### Step 3: Preparation
Now comes the part where you have to prepare some things before proceeding further:
- World Pregeneration: It is really important to pregenerate your world with your preferred seed before you start playing on the server. This helps with chunk rendering and puts less stress on the CPU when players travel long distances away from spawn. It also makes sure that the server doesnt start lagging when players are travelling. We have a detailed guide on how to pregenerate your world [here](/articles/pregenerate-a-minecraft-world-java).
- Resource packs: If you want to have resources packs for the server, you can check this [guide](/articles/use-a-resource-pack-in-server) on how to use resource packs on a server.

### Step 4: Setting up the server
Our base for the server will be PaperMC. PaperMC is a server software developed by the PaperMC Team for Minecraft Java. It supports plugins, has patches that fixes performance deficiencies and a whole host of patches and fixes useful for servers. You can download the server jar from [here](https://papermc.io/downloads/paper). Most hosting providers have the option to install server software in their panel.<br>
Once the server software is installed, its time to get the pregenerated world. Locate the world folder(s), select them and make a zip file of them. Go to the dashboard of the hosting site, navigate to the file manager and upload the archive there. Once the file upload is complete, unarchive the file. Make sure the folder is named `world`. 
> If its a singleplayer world then it should have only one folder. If it was a Spigot/Paper server before then there should be three folders: `world,world_nether and world_the_end`.

You can now start the server. It should generate all the necessary files. After the server has finished loading everything, stop the server. We need to configure the server properly. The files needed to modify are: *server.properties*, *paper-world-defaults.yml*, *paper-global.yml*, *bukkit.yml*. Note that this portion is not an optimization guide, you can check that [here](/articles/java-server-optimization-guide). This is more of an configuration guide for QOL changes.<br>
#### server.properties
```
allow-flight=true   
difficulty=normal
enforce-whitelist=false        (change this to true to force whitelist on players)
max-players=20     
motd=A Minecraft Server 
online-mode=true               (subjective. change this to false if you want an offline server)
pause-when-empty-seconds=0 
pvp=true 
require-resource-pack=false 
resource-pack= 
simulation-distance=10 
sync-chunk-writes=false 
view-distance=10               (change this to your choice, a good number is 6 but dont go above 10-12, affects performance a lot)
white-list=false               (change this to true if you want to enable whitelist. Highly recommended for friends only server)
```

The next section has some optional config changes. 
#### bukkit.yml
```
allow-end=true     (change to false if you dont want to allow players to enter end dimension. Can be changed later)
```

#### paper-global.yml
```
unsupported-settings:
  allow-headless-pistons: false               (change this to true to allow headless piston exploits)
  allow-permanent-block-break-exploits: false (change this to true to allow bedrock breaking exploits)
  allow-piston-duplication: false             (change this to true to allow piston duplication)
```

### Step 5: Setting up the plugins
Now that the server is done setting up, we can move on to the plugins. We will mostly use FREE plugins for this guide. If you have purchased any plugins to use, you can do that.<br>
#### Plugin List:
- GeyserMC (*for allowing bedrock players to join*)<br>
- Floodgate (*companion plugin for Geyser*)<br>
- SkinRestorer (*useful for restoring skins in offline servers*)<br>
- GSit (*sit plugin for having fun*)<br>
- ViaVersion (*for adding support for later minecraft versions if server is on an older version*)<br>
- ViaBackwards (*for adding support for older minecraft versions upto 1.9*)<br>
- ViaRewind (*for adding support for 1.7-1.8 minecraft versions*)<br>
- ProtocolLib (*companion plugin for a lot of other plugins*)<br>

These plugins are mostly what you need to get started with your friends-only server. You can add whatever plugins since every other plugin works with above mentioned plugins.<br>
To add the plugins to your server, you can upload the downloaded jar files to the `plugins` folder in your server. Make sure the server is off before uploading the files. After finishing uploading the files, start the server to load the plugins.
### Step 6: Finishing up
Now that the plugins  are uploaded and ready to go, we need to do some last configuration so that everything works as intented. Here are the following configurations required:<br>
- GeyserMC
```
bedrock:
  port: 19132               (change to the port of your Java server)
  server-name: "Geyser"     (change this to whatever your server name is)

remote:
  port: 25565               (change to the port of your Java server)
  auth-type: floodgate      (changed to use floodgate for authentication)

emote-offhand-workaround: "emotes-and-offhand"   (changed to allow offhand swapping for bedrock players)

above-bedrock-nether-building: true              (changed to true to allow bedrock players to see and build above bedrock in nether)
```
That's it. The server is now ready to go. Happy Mining and Crafting! If you need help with your server, please join our [Discord]() server!

### Links for plugins
- [Hanger](https://hangar.papermc.io/)**
- [Modrinth](https://modrinth.com/plugins)**
- [SpigotMC](https://www.spigotmc.org/resources/categories/spigot.4/)**

#### **We are not affliated with any of the above mentioned websites. This is just for educational purpose only.