---
title: "Introducing CharacteristicKit"
date: 2023-01-30T21:25:00+01:00
draft: true
description: "A library for creating models of complex BLE devices."
# extra:
#     local_image: "/projects/vhdl-game-of-life/cover.png"
taxonomies:
    tags: ["Bluetooth", "Swift", "Apple"]
---

## Motivation

In an academic project I work on, [pulse.loop], we are developing a wearable device that measures the heart rate and other physiological parameters. The device is based on an ESP32C3 SoC, which has a Bluetooth Low Energy (BLE) radio. Since we're still in the development phase, we need to receive lots of data from the device, and we also need to be able to change its configuration without reflashing the firmware. This means that tens of BLE services and characteristics are needed.

Working with so many characteristics implies the creation of massive event handlers, which are hard to maintain and to debug. Moreover, the code is not very readable, and it's hard to understand what's going on. We don't want to end up with a thousand-line `switch` statement, so we decided to create a library that would help us with this problem. This solution might be overkill for smaller devices, but I believe it's a good solution for more complex peripherals.

## Overview

CharacteristicKit allows you to create structs that contain special properties that are automatically mapped to the device's characteristics.
In order to do that, I created a `Characteristic<T>` wrapper class and some protocol you have to conform to.

[pulse.loop]: https://github.com/pulse-loop
