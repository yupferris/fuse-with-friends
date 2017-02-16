# fuse-with-friends
A simple UI Kit made with Fuse, and a test project/server presented at our [Fuse With Friends](https://www.meetup.com/Oslo-Fusers-Meetup/events/235928921/) event.

## Repo structure

This repo consists primarily of 3 projects:

 - EVOLVE-UI-Kit - A simple UI kit made in Fuse. Note that this is a bit out-of-date with regards to best practices these days, but there should definitely still be some useful things in there.
 - TestApp - The basic app we put together at the Fuse With Friends event.
 - TestServer - A simple node.js server that serves the basic data used in the app. TestApp expects this to be running, otherwise the app won't have any data to show.

## Running TestServer

The test server which provides basic JSON data is in the `TestServer` directory. It's built with node, so `npm install` in that directory is required to set things up.

Afterwards, simply running `node app` in that directory will start the server listening on port 6502. This can be overridden using an env var, like so: `httpPort=[port] node app`.

## Running TestApp

With the TestServer running, `fuse preview`/`fuse build` in the `TestApp` repo is all you need. :)

## License

This code is licensed under the MIT license (see LICENSE). The shoe images used in the example app (under `TestApp/Assets/Categories` and `TestApp/Assests/Shoe Images`) are copyright 2013 Leopold Terence, and distributed under a Creative Commons license (specifically, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/)). The font files used in the UI kit (`EVOLVE-UI-Kit/Assets/Roboto-*.ttf`) are copyright Google and distributed under the Apache 2.0 license (see https://github.com/google/roboto/blob/master/LICENSE).
