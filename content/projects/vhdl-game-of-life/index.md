---
title: "VHDL Game of Life"
description: "A simple implementation of Conway's Game of Life in VHDL, with a web frontend."
draft: true
extra:
    local_image: "/projects/vhdl-game-of-life/cover.png"
taxonomies:
    tags: ["Carbon", "Docker", "Python", "Svelte", "University", "VHDL"]
---

## Overview

An interactive web-app that drives a VHDL backend to simulate Conway's Game of Life.

This is the final project for the "Embedded Systems" course at the University of Udine.
It demostrates various aspects of the course, including:

- VHDL
- Object-oriented programming
- Containerisation
- Unit testing
- Shell scripting

![Screenshot of the frontend](screenshot.png)

## Architecture

{% mermaid() %}
graph TB;
    Kombinatorik-->Alle;
    Alle-->leer1-->id1[Mit Wiederholung ja]--- id11([F1]):::fuellungrot;
    Alle-->leer2-->id4[Mit Wiederholung nein]--- id12([F2]):::fuellungrot;

    Kombinatorik-->Auswahl;
    Auswahl-->id7[Reihenfolge wichtig ja];
    Auswahl-->id8[Reihenfolge wichtig nein];
    id7[Reihenfolge wichtig ja]-->id2[Mit Wiederholung ja] --- id13([F3]):::fuellungrot;
    classDef fuellungrot fill:#f96;
    id7[Reihenfolge wichtig ja]-->id5[Mit Wiederholung nein]--- id14([F4]):::fuellungrot;
    id8[Reihenfolge wichtig nein]-->id3[Mit Wiederholung ja]--- id15([F5]):::fuellungrot;
    id8[Reihenfolge wichtig nein]-->id6[Mit Wiederholung nein]--- id16([F6]):::fuellungrot;
{% end %}
