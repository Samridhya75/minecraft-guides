---
id: minecraft02
title: How to add an Addon in a Bedrock server
date: '2025-04-10'
tags: ['server','bedrock']
excerpt: Find out how to add an addon to a Bedrock server.
imageUrl: '/minecraft.webp'
---
---
In this article, we will show you how to add an addon to a Bedrock server. If you need to add a resource pack then you can follow this [guide](/articles/use-a-resource-pack-in-server).<br>
You can find resource packs from a lot of websites but you should be aware of downloading potential viruses or zip bombs. There are websites that hosts resource packs and are trusted by the community:
- [Planet Minecraft](https://www.planetminecraft.com/)
- [CurseForge](https://www.curseforge.com/)
- [MCPE DL](https://mcpedl.com)

### Method 1: Adding addon to new world

To add an addon to a Bedrock server, you need an addon pack that works with your specific version of Minecraft running on the server. You will find that most of the addon for Bedrock is in the form of `.mcpack` or `.mcaddon`. 
- Download the file and keep it in safe place. Rename the file from `.mcpack` or `.mcaddon` to `.zip`. Now extract the zip file and you will have a folder with the name of the addon and the files inside it should look something like this:
![resource pack files](/public/images/resource_pack_files.png)
- Open the `manifest.json` file. You will see an `uuid` mentioned which looks something like this: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`. You will also find `version` right below `uuid`. We will need these two values later in the setup process.
![manifest json file](/public/images/manifest_json.png)
- Go to your server's root directory where all file are present. You will find a folder called `behavior_packs`. There should be folders called `vanilla`,`chemistry`,`editor` and a lot more. Upload the resource pack folder you extracted earlier here.
- Go back and navigate to a folder called `worlds`. There should be a folder called `Bedrock level`. Go in that folder and create a file called `world_behavior_packs.json`.
- Open the file and paste this in the file:
```
[
    {
        "pack_id": "",
        "version": [1,0,0]
    }
]
```
- In `pack_id`, copy and paste the `uuid` from the `manifest.json` file and in `version`, copy and paste the version number mentioned in [] brackets. Double the `pack_id` and `version`. Save the file.
- If you want to add multiple addons, then follow the previous steps. When you are done with that, edit the `world_resource_packs.json` like this:
```
[
    {
        "pack_id": "",
        "version": [1,0,0]
    },
    {
        "pack_id": "",
        "version": [1,1,0]
    }
]
```
You just need to add the addon's `uuid` and `version` in the file as shown above.
- Now start the server and it should activate the addon. Most addons are accompanied by a resource pack. Players will be prompted to download the resource pack when they join the server.

### Method 2: Using an existing world
You can upload any existing world to your server if it already has addons installed. 
- Locate the world you have in the `Worlds` section of Bedrock client, and then click on the `Edit` button on the right side.
- Scroll down and under File Management, click on `Export world` button. It will prompt you to save a `.mcworld` file. Store it in a safe place.
- Right click and rename the file's type from `.mcworld` to `.zip`.
- Upload this zip file to `worlds` folder in your server. Extract or unzip it. Rename the folder just created after extracting the zip file to whatever you want. This name will be used later.
- Go back and find the file `server.properties`. It should be there in the root of the server.
- Find the option `level-name=` option in `server.properties`. Add your world name here. Save the file.
- Now start the server and your world should be loaded.
