const { writeFileSync } = require('fs');

const MAX_SIZE = 131072;

const htmlFill = `a`.repeat(MAX_SIZE - `<template></template>`.length);
const html = `<template>${htmlFill}</template>`;
writeFileSync(`force-app/main/default/lwc/lwcMaxSize/lwcMaxSize.html`, html, 'utf8');

const PLACEHOLDER = `{PLACEHOLDER}`;
const JS_BASE = `import { LightningElement } from 'lwc';
export default class LwcMaxSize extends LightningElement {}
var ${PLACEHOLDER};`;
const JS_BASE_LENGTH = JS_BASE.length - PLACEHOLDER.length;
const JS_FILL = `a`.repeat(MAX_SIZE - JS_BASE_LENGTH);
const js = JS_BASE.replace(PLACEHOLDER, JS_FILL);
writeFileSync(`force-app/main/default/lwc/lwcMaxSize/lwcMaxSize.js`, js, 'utf8');

