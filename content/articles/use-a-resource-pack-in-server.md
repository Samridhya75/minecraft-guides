---
id: minecraft01
title: How to add a resource pack in a Java or Bedrock server
date: '2025-04-10'
tags: ['minecraft','java','server','bedrock']
excerpt: In this article, we will show you how to add a resource pack to a Java or Bedrock server...
imageUrl: '/minecraft.webp'
---
---
In this article, we will show you how to add a resource pack to a Java or Bedrock server. This article has alternative methods for Java to use resource packs on the server.<br>
You can find resource packs from a lot of websites but you should be aware of downloading potential viruses or zip bombs. There are websites that hosts resource packs and are trusted by the community:
- [Planet Minecraft](https://www.planetminecraft.com/)
- [CurseForge](https://www.curseforge.com/)
- [Modrinth](https://modrinth.com)
- [MCPE DL](https://mcpedl.com)

### Java
To add a resource pack in a Java server, you need to provide a direct download link to the resource pack. You can store or host the resource pack in a file sharing platform like [Google Drive](#method-2-google-drive) or [Dropbox](#method-3-dropbox) or a dedicated resource pack hosting site called [MCPacks](#method-1-mcpacks).

#### Method 1: MCPacks
- To host a resource pack on MCPacks, you can visit the [website](https://mc-packs.net) and click on `Choose file` button. You will also need to complete the captcha. Then click Upload.
![MCPacks image](/public/images/mcpacks.png)
- The site will give you a direct download link to your resource pack, copy that link and keep it safe in a txt file.
- Go to your server, and open `server.properties` file.
- Find the option that says `resource-pack=`. Paste the link there.
- Find the option that says `require-resource-pack=`. Change it to true to force players to use the resource pack.
- Save the file and start your server. When joining it should prompt you to download and apply the resource pack.

#### Method 2: Google Drive
- Upload your resource pack which should be a .zip file to your Google Drive.
- Select it and click on Share button. Under General Access section, change `Restricted` to `Anyone with the link` and keep the role to `Viewer`. Click on `Copy Link`. Paste this link in a txt file.
- Look at the link carefully, you will see a random string of characters usually between two `/` slashes. That is your file ID which we need. You will most likely find the file ID after `https://drive.google.com/file/d/` . Copy the ID.
- Add the ID in this following link after `&id=`
```
https://drive.google.com/uc?export=download&id=
```
- After adding the ID, copy the whole link. This is your direct download link.
- Go to your server, and open `server.properties` file.
- Find the option that says `resource-pack=`. Paste the link there.
- Find the option that says `require-resource-pack=`. Change it to true to force players to use the resource pack.
- Save the file and start your server. When joining it should prompt you to download and apply the resource pack.

#### Method 3: Dropbox
- Upload the resource pack which should be a .zip file to your Dropbox account.
- Select it and click on `Copy Link` button. Paste it in a txt file.
- To get a direct download link, at the end of the link you will see `?dl=0`. Change it to `?dl=1`. Now copy this link.
- Go to your server, and open `server.properties` file.
- Find the option that says `resource-pack=`. Paste the link there.
- Find the option that says `require-resource-pack=`. Change it to true to force players to use the resource pack.
- Save the file and start your server. When joining it should prompt you to download and apply the resource pack.

### Bedrock
To add a resource pack to a Bedrock server, you need a compatible resource pack that works with your specific version of Minecraft running on the server. You will find that most of the resource pack for Bedrock is in the form of `.mcpack` or `.mcaddon`. 
- Download the file and keep it in safe place. Rename the file from `.mcpack` or `.mcaddon` to `.zip`. Now extract the zip file and you will have a folder with the name of the resource pack and the files inside it should look something like this:
![resource pack files](/public/images/resource_pack_files.png)
- Open the `manifest.json` file. You will see an `uuid` mentioned which looks something like this: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`. You will also find `version` right below `uuid`. We will need these two values later in the setup process.
![manifest json file](/public/images/manifest_json.png)
- Go to your server's root directory where all file are present. You will find a folder called `resource_packs`. There should be folders called `vanilla`,`chemistry`,`editor`. Upload the resource pack folder you extracted earlier here.
- Go back and navigate to a folder called `worlds`. There should be a folder called `Bedrock level`. Go in that folder and create a file called `world_resource_packs.json`.
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
- Now start the server and it should activate the resource pack. Players will be prompted to download the resource pack when they join the server.