const { writeFileSync } = require('fs');

const maxSize = 131072;

const htmlFill = `a`.repeat(maxSize - `<template></template>`.length)
const html = `<template>${htmlFill}</template>`;
writeFileSync(`force-app/main/default/lwc/lwcMaxSize/lwcMaxSize.html`, html, 'utf8');

const jsBase = `import { LightningElement } from 'lwc';
export default class LwcMaxSize extends LightningElement {}
var ;`;
const jsFill = `a`.repeat(maxSize - jsBase.length);
const js = `import { LightningElement } from 'lwc';
export default class LwcMaxSize extends LightningElement {}
var ${jsFill};`;
writeFileSync(`force-app/main/default/lwc/lwcMaxSize/lwcMaxSize.js`, js, 'utf8');

