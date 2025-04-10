---
id: java01
title: Optimization guide for Minecraft Java servers 2025
date: '2025-04-10'
tags: ['minecraft','java','server']
excerpt: In this article, we will show you how to optimize your Java server for high player counts and reducing lag in general..
imageUrl: '/wrench.png'
---
---
In this article, we will show you how to optimize your Java server for high player counts and reducing lag in general. These optimization tricks works with servers on any scale with low or large amount of players.
A fair bit of warning, following this guide won't 100% fix your lag issue on the server. Most of the time, it depends on the hardware and resources your host provides you with.

### General Tips
- Choose a server host that has newer hardware and uses a processor with a high single threaded performance, uses Nvme SSD for storage and has high bandwidth available to the server and has a server location nearest to you. That's what will give you the best lag-free experience.
- Throwing extra resources in your server wont solve the issue. Getting 16GB RAM and then having 2 threads of CPU will be a waste of resources. Generally you want to have a balance between CPU and RAM allocation. It depends on the use case of each individual server.
- View distance and simulation distance should be kept low around 6 to 8. This will have massive performance impact on the server if its higher than that. It could lead to longer chunk loading time when view distance is too high.
- Too many plugins/mods and datapacks will slow down your server signicantly since they need a lot of processing power to operate properly. Try to reduce the number of plugins/mods or datapacks used in the server. If you are running a modpack server, try to use optimization mods for improving the performance.
- If you are running a server with limited resources, RTP can really cause huge lag spikes since the plugin will need to randomly find a location and then teleport the player there and the server needs to use a lot of processing power to generate chunks at a far away location. If you are using a free hosting service for example, totally avoid RTP. Yes I know its a useful thing but it is what it is. If you have a good amount of resources for your server, you can definitely use RTP.
- Pregenerating a world can massively help in reducing lag spikes when someone is travelling to far away locations using an elytra or example. We have a detailed guide on this [here](/articles/pregenerate-a-minecraft-world-java).
- Mob stacker plugins are not useful at all. Imagine this,the game tries it best to spawn mobs in the world, and then the plugin collects the mobs in a single place. The game thinks the mobs are gone and again it tries to spawn more mobs. This goes on and on and just eats up CPU power. It only useful in worlds where there are a lot of spawners e.g. Networks servers. Doesn't make sense to have this plugin in a survival world.
- If you are running a SMP, you might want to do this. Spawn chunks are a 19x19 chunk area centered around the world spawn. In every world, its always loaded when the server is running and also processes every aspect of the game. That means if you have farms or entities in the spawn chunk area, it will be processes all the time. So when you don't have anything in spawn chunks, the server doesn't process them all the time saving your resources.
- Vanilla server software from Mojang is way too unoptimized to be used in servers. That's where community made server software comes in. Projects like PaperMC, Pufferfish, Purpur etc. are really useful for setting up servers with decent performance improvements over Vanilla. They have several patches and fixes which improves performance. However it does come at a cost of having altered behaviour of several mechanics in the game. If you want to use mods for your server, there are community made performance mods that also improves performance without altering the vanilla experience.
- Most server software are community made, open source and free to use. However there are paid server software that claim to improve performance by x amount but are closed source and may contain malware of some sort. You should avoid these type of software.
- Use profilers like spark to identify why the server is lagging. Sometimes its not your host. Sometimes there might be players who has secret farms with a lot of animals or farms that produce a lot of items. These can cause the server to use a lot of processing power to process the entities. Maybe someone bulit a lag machine? Spark profiler can help you understand how many entities are there in the world or it might be plugin/mod that eats up CPU power.

### Determining the lag
Use MSPT as a metric to understand if your server is lagging or not. Generally you will see that TPS is considered the metric for understanding if the server is lagging or not. However, MSPT is the real one. TPS stands for ticks per second. Tick is the measurement of time in Minecraft. 20 ticks per second generally means the game is running at normal speed. Lesser the ticks per second, slower the game runs.<br> MSPT stands for milli seconds per tick. It determines how many milliseconds the server takes to complete 1 game tick. If MSPT of your server is less 50, then your server is not lagging. Lower the MSPT, the better, however it can't go 0. If its greater than 50 then the server is lagging. Sometimes you might notice that max MSPT is a lot higher than 50 when you check your Spark report, that's completely fine and happens from time to time. However, just make sure the avg MSPT is less than 50.

### More thoughts
These tips and tricks are based on personal experience of running and maintaining servers for a long time. You may know some of these tips. That's completely fine. If you want to get nerdly and start fiddling around with configs, you can check these guides for in depth knowledge related to optimization.
- [YouHaveTrouble](https://github.com/YouHaveTrouble/minecraft-optimization)
- [Paper Chan](https://paper-chan.moe/paper-optimization/)

