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


const IMPORT_BASE1 = `import { LightningElement } from 'lwc';
import * as jsimport2 from './jsimport2';
export default class JsImport extends LightningElement {}
var ${PLACEHOLDER};`;
const IMPORT_BASE1_LENGTH = IMPORT_BASE1.length - PLACEHOLDER.length;
const import1 = IMPORT_BASE1.replace(PLACEHOLDER, `a`.repeat(MAX_SIZE - IMPORT_BASE1_LENGTH));
writeFileSync(`force-app/main/default/lwc/jsImport/jsImport.js`, import1, 'utf8');

const IMPORT_BASE2 = `
var ${PLACEHOLDER};
export default {};`;
const IMPORT_BASE2_LENGTH = IMPORT_BASE2.length - PLACEHOLDER.length;
const import2 = IMPORT_BASE2.replace(PLACEHOLDER, `a`.repeat(MAX_SIZE - IMPORT_BASE2_LENGTH));
writeFileSync(`force-app/main/default/lwc/jsImport/jsimport2.js`, import2, 'utf8');

