[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![tests][tests]][tests-url]
[![coverage][cover]][cover-url]
[![chat][chat]][chat-url]

<div align="center">
  <img width="160" height="180"
    src="https://worldvectorlogo.com/logos/json.svg">
  <a href="https://github.com/webpack/webpack">
    <img width="200" height="200"
      src="https://webpack.js.org/assets/icon-square-big.svg">
  </a>
  <h1>Threejs Contrib Loader</h1>
</div>

<h2 align="center">Install</h2>

```bash
npm install --save-dev three-contrib-loader
```

> ⚠️ **I don't know if threejs core project will change the release mental to correct this inconvenient issue, so this loader is a hot-fix hack and you should watch the threejs project to follow the future change.**

<h2 align="center">Usage</h2>

```js
import * as THREE from "three";
import * as OrbitControlsFactory from "three/examples/js/controls/OrbitControls";

OrbitControlsFactory(THREE);

// Now, THREE entity should have OrbitControls appended.
let controls = new THREE.OrbitControls();
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        // The delimiter of path fragment of stupid windows has the format "//"
        test: /three.*examples.*js/,
        use: [
          {
            loader: "three-contrib-loader"
          }
        ]
      }
    ]
  }
};
```

<h2 align="center">Maintainer</h2>

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150" src="https://avatars.githubusercontent.com/sevenryze?v=3">
        </br>
        <a href="https://github.com/sevenryze">Seven Ryze</a>
      </td>
    </tr>
  </tbody>
</table>

[npm]: https://img.shields.io/npm/v/three-contrib-loader.svg
[npm-url]: https://npmjs.com/package/three-contrib-loader
[node]: https://img.shields.io/node/v/three-contrib-loader.svg
[node-url]: https://nodejs.org
[deps]: https://david-dm.org/webpack/three-contrib-loader.svg
[deps-url]: https://david-dm.org/webpack/three-contrib-loader
[tests]: http://img.shields.io/travis/webpack/three-contrib-loader.svg
[tests-url]: https://travis-ci.org/webpack/three-contrib-loader
[cover]: https://coveralls.io/repos/github/webpack/three-contrib-loader/badge.svg
[cover-url]: https://coveralls.io/github/webpack/three-contrib-loader
[chat]: https://badges.gitter.im/webpack/webpack.svg
[chat-url]: https://gitter.im/webpack/webpack
