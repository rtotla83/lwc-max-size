Max size of Lightning Web Component

## Generate

- $ `node make-lwc.js`

## Deploy

- $ `sfdx force:source:push`

```
=== Pushed Source
STATE  FULL NAME                   TYPE                      PROJECT PATH
─────  ──────────────────────────  ────────────────────────  ────────────────────────────────────────────────────────────
Add    Home                        FlexiPage                 force-app/main/default/flexipages/Home.flexipage-meta.xml
Add    lwcMaxSize/lwcMaxSize.html  LightningComponentBundle  force-app/main/default/lwc/lwcMaxSize/lwcMaxSize.html
Add    lwcMaxSize/lwcMaxSize.js    LightningComponentBundle  force-app/main/default/lwc/lwcMaxSize/lwcMaxSize.js
Add    lwcMaxSize/lwcMaxSize.js    LightningComponentBundle  force-app/main/default/lwc/lwcMaxSize/lwcMaxSize.js-meta.xml
```

If deployed with size over

```
PROJECT PATH                                                  ERROR
────────────────────────────────────────────────────────────  ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
force-app/main/default/lwc/lwcMaxSize/lwcMaxSize.js-meta.xml  Failed to save Lightning Component Resource [lwc/lwcMaxSize/lwcMaxSize.html] of Lightning Component Bundle [lwcMaxSize]. Error: Value too long for field: Source maximum length is:131072
force-app/main/default/lwc/lwcMaxSize/lwcMaxSize.js           No base file for markup://c:lwcMaxSize
force-app/main/default/lwc/lwcMaxSize/lwcMaxSize.js-meta.xml  Failed to save Lightning Component Resource [lwc/lwcMaxSize/lwcMaxSize.js] of Lightning Component Bundle [lwcMaxSize]. Error: Value too long for field: Source maximum length is:131072
```
