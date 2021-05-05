//Code originally written by Allvaa
const { createWriteStream } = require('fs')
const { default: { stream } } = require("got");
const fetch = require('node-fetch')
const { execSync } = require('child_process')

setInterval(() => fetch('URL HERE'), 5 * 60 * 1000);

const url = 'http://cdn.glitch.com/771d0f62-dfc0-4717-bc57-1a0add2b3289%2FLavalink.jar?v=1619724701424'

const start = () => {
    const download = stream(url).pipe(createWriteStream('Lavalink.jar'));
    download.on("finish", () => {
        execSync("java -jar Lavalink.jar");
    });
};

start();
