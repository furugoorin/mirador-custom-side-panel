# Custom Companion Window Plugin

README adapted from [this repository](https://github.com/jabrah/mirador-side-panel-plugin-test)

This plugin currently adds a custom side panel to the Mirador Viewer. Please note that this is functional, but it produces Material UI errors in the JS console.

## Prerequisites 

* [Node.js](https://nodejs.org/en/) >= 8 must be installed
* [nwb](https://github.com/insin/nwb) install globally by running the command: `npm i -g nwb`

Make sure to install all of the repos dependencies: `npm i`

## Development

Note the helpful scripts defined in `package.json`.

You can run the demo app locally, defined in `demo/src/`, by running the command `npm start`. 

## Usage

To bring this plugin into your project: 

1. Within project, add this repository to `package.json` dependencies using the `username/repo#branch-name` format. 
```
//package.json
...

"dependencies:" { 
  "mirador-custom-panel": "furugoorin/mirador-custom-side-panel#master"
}

...
```
2. Run `npm install`
3. Within your component that contains the Mirador Viewer: 
  * import module 
  ```
  import CustomSidePanel from 'mirador-custom-panel/es/components/index';
  ``` 
  * add to plugin array in Mirador 
  ```
  Mirador.viewer(config, [CustomSidePanel])
  ```
## Custom Panel notes

* Any custom side panel will need a second plugin to define a custom `WindowSideBarButtons` button, or else there will be no UI element to toggle your new panel. 
* The custom panel MUST define a unique `companionWindowKey`. The new button to open your custom panel must then set its TabButton value to this key.
* Assuming you want to use this panel in a window sidebar, you should wrap your UI in a Mirador CompanionWindow to get its features and theme. See `side-panel-a`

## In-progress

* Currently, the custom side panel's properties cannot be dynamically changed. 
  * A potential solution is to alter the plugin configuration so that `mode: 'wrap'` is used, instead of `mode: 'add'`. [See ProjectMirador's official documention on wrap. ](https://github.com/ProjectMirador/mirador/wiki/Mirador-3-plugins#using-modewrap-to-override-mirador-behavior)