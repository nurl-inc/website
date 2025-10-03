# System File

## Overview

Game systems are a way to create, validate, and test your own game mechanics. Each repository can contain a single game system.

For example, D&D 5e would be it's own repository. Within that repository, you would have all of the core rules, player's handbook, monster manual, etc. Those items would reference the associated game system of the repository.

In Nurl Sanctum, we simplify and enhance the process of creating and extending game systems through our file dependency system. This means you can associate an existing game system with your files and gain access to the mechanics and rules of that game system.

To put simply, a "system" file in Sanctum is the acting SRD for that game system. System files are the only files that licenses can be associated with.

## System File Features

The system file contains features related to core game mechanics and anything else that is related to a game system.

### Core Mechanic Features

#### Blocks

Blocks are the core components of a game system. They can be anything from an attribute to a spell. Think of this as your "Lego factory" where you are creating the Lego pieces that will be used to build your game.

#### Dice

This is the area where you can do everything from register a set to analyze and use interactive dice-related tools. We call this section the [Dice Workshop](./dice-workshop).

#### Formulas

The formula section will save any complex formulas that you plan on using within your game system. You can reference your dice and blocks in these formulas to create a formula that will be used within your game system.

Even more, this is where Sanctum will create the magic of providing video-game level automation to the Play app when you are ready for testing.

> Important: This is used to provide video-game level automation to the Play app when you are ready for testing.

#### Rules

Rules determine the outcome of events and is the last piece of the system mechanics. Here you can reference blocks, dice, and formulas to create a rule which documents the steps to take when an event occurs.

> Important: This is used to provide video-game level automation to the Play app when you are ready for testing.

### Assets

Assets are anything that is used within your system but not directly created by the system. This is where you can find the "Systems Library" which is a collection of 3rd party files that you can import and use within your system.

Likewise, this is where you can publish your own system file for yourself (or others) to use.

## Creating a new system file

In order to create a system file, you need to first create a repository. Licenses are optional but recommended if you plan on publishing your system file for others to use.

### Create a new repository

To create a system file, you need to first [create a new repository](https://nurlttrpg.com/docs/repository-management). This will provide the dedicated space for all content related to the game that will use the system.

### Create a custom license (optional)

Next, you need to [create a license](./creating-a-license.md) to associate with the game system. This allows Sanctum to ensure you are covering your own intellectual property rights to protect your game system and is highly recommended if you plan on publishing your system file for others to use.

### Create the system file

Once you have created the repository and license, you can create the system file. This will be the shared component blocks used within all your game system content within the repository.

Click the "Create" button in the repository and select the "System" option. This will create a new system file in the repository with the following default options:

- Name: Untitled System
- Visibility: Private (only you can see it)
- License: None (no license associated)

You can then edit these options to your liking.
