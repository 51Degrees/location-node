# 51Degrees Geo-Location Engines

![51Degrees](https://51degrees.com/DesktopModules/FiftyOne/Distributor/Logo.ashx?utm_source=github&utm_medium=repository&utm_content=readme_main&utm_campaign=node-open-source "Data rewards the curious") **Pipeline API**

[Developer Documentation](https://docs.51degrees.com?utm_source=github&utm_medium=repository&utm_content=documentation&utm_campaign=node-open-source "developer documentation")

## Introduction

This repository contains the geo-location engines for the Node.js implementation of the Pipeline API.

## Pre-requesites

The Pipeline engines are written in Node.js and target 6 and above.

## Packages
- **geoLocationCloud** - A Node.js engine which retrieves geo-location results by consuming data from the 51Degrees cloud service.
- **geoLocationPipelineBuilder** - Contains the geo-location engine builders.

## Installation

You can either reference the projects in this repository or you can reference the [NPM][npm] packages in your project:

```
npm install fiftyone.geolocation
```

Make sure to select the latest version from [NPM.][npm]

## Examples

Examples can be found in the `examples/` folder. See below for a list of examples.

|Example|Description|Implemtation|
|-------|-----------|------------|
|gettingStarted.js|This example uses geo-location to determine the country from a longitude and latidude.|Cloud|
|combiningServices.js|This example uses geo-location alongside device detection to determine the country and device.|Cloud|

## Project documentation

For complete documentation on the Pipeline API and associated engines, see the [51Degrees documentation site][Documentation].

[Documentation]: https://docs.51degrees.com
[nuget]: https://www.npmjs.com/package/fiftyone.geolocation