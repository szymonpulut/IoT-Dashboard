# IoT Dashboard

## Description

A full stack web application to display and interact with custom smart home system. It is designed to be run on RPi, and displayed on a tablet.

React frontend interacts with an on-premise Node.js backend server through GraphQL, utilizing HTTP for queries and WebSockets for subscriptions. Node.js server integrates with external APIs (weather, air quality, Google Calendar) through REST, alongside MQTT broker connectivity via WebSockets, enabling efficient messaging queue capabilities and “smart” device control.

As you can check out in this repo's history, I created the original version of this application in 2020, then I significantly refactored it in 2023. As such this might have some small bits of legacy code here and there (mostly it's around styling).

## Quick overview

![iot-dashboard](https://github.com/szymonpulut/IoT-Dashboard/assets/1353480/6a3fdb7e-41e2-488f-8908-d2f401fb95cb)

Displays current time, weather, forecast, air quality data. Connects to Google Calendar to show upcoming events. Displays camera feed. Shows data from smart home sensors, and can open small and main gate; plays audio alert when gate opens. Features automatic night mode.

## Technologies used & features

Frontend: Vite, TypeScript, React, styled-components, Apollo Client, GraphQL, WebSockets<br />
Backend: TypeScript, Express.js, Apollo, GraphQL, MQTT, Zod

## TODO

- Implement a seamless way of launching both apps (Docker?)
- A few things specific to BE/FE
