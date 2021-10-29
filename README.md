<div align="center">
  <h1>Snack Custom Runtime</h1>
  <p>Experimental project demonstrating Snack in custom native runtimes</p>
  <p>
    <a href="https://github.com/byCedric/snack-custom-runtime#-app-structure"><b>App</b></a>
    &ensp;&mdash;&ensp;
    <a href="https://github.com/byCedric/snack-custom-runtime#-how-to-start-it"><b>Start it</b></a>
    &ensp;&mdash;&ensp;
    <a href="https://github.com/byCedric/snack-custom-runtime#-how-to-customize-it"><b>Customize it</b></a>
    &ensp;&mdash;&ensp;
    <a href="https://github.com/byCedric/snack-custom-runtime#-snack-examples"><b>Examples</b></a>
    &ensp;&mdash;&ensp;
    <a href="https://github.com/byCedric/snack-custom-runtime#%EF%B8%8F-caveats"><b>Caveats</b></a>
    &ensp;&mdash;&ensp;
    <a href="https://github.com/byCedric/snack-custom-runtime#-common-errors"><b>Common Errors</b></a>
  </p>
  <br/>
</div>

## 📁 App Structure

This demo app uses [`expo-dev-clients`](https://docs.expo.dev/clients/introduction/) and contains the Snack Runtime to load and render [Snacks](https://snack.expo.dev).

- [`src/assets`](./src/assets) - The default assets necessary to build the app, configured through **[app.json](./app.json)**
- [`src/providers`](./src/providers) - Containing the theme and navigation providers, used in **[App.tsx](./src/App.tsx)**
- [`src/screens`](./src/screens) - Separate screens all working together, most interesting one is **[screens/Snack.tsx](./src/screens/Snack.tsx)**
- [`src/types`](./src/types) - Containing shared TypeScript files
- [`src/App.tsx`](./src/App.tsx) - The main app entrypoint

## 🚀 How to start it

To get your hands dirty, follow these steps.

- `$ npm i -g expo-cli` - Make sure you installed the [**expo-cli**](https://docs.expo.dev/workflow/expo-cli/)
- `$ yarn install` - Install all modules with yarn
- `$ yarn run postinstall` - Should run automatically, but in some cases it doesn't 🤷

### Running on Android

- `$ expo run:android --device` - Builds the app on an emulator or real device
  > _`adb devices -l` - Real devices have to be usb-connected and listed under that command_
- _Follow the steps in the terminal_

> In some occasions, the app might close when running `expo run:android`. If you manually open the app again, and scan the QR code from your terminal, it should work fine.

### Running on iOS

- `$ expo run:ios --device` - Builds the app on a simulator or real device, devices have to be usb-connected
- _Follow the steps in the terminal_

## 👷 How to customize it

You should be able to add any native modules to the app. Install it, add the required native code, and run the above Android and/or iOS commands.

> If the native module has a [config plugin](https://docs.expo.dev/guides/config-plugins/), you can remove the **/android** and **/ios** folders and run the above commands again.

## 🍿 Snack examples

Here are some Snacks that you can use as inspiration, and load it in the client.

- [**Moti Snack**](https://snack.expo.dev/@bycedric/snack-example-moti) - The [Hello World code](https://moti.fyi/examples/hello-world) for Moti (_JS-only_)
- [**Blurhash Snack**](https://snack.expo.dev/@bycedric/snack-example-blurhash) - Simple [React Native Blurhash example](https://github.com/mrousavy/react-native-blurhash) (_custom native code_)

## ⚠️ Caveats

### Missing native libraries

Snack assumes that certain native modules are preinstalled. Although this works well for [Expo Go](https://docs.expo.dev/guides/sharing-preview-releases/#expo-go), using a custom native runtime brings some added complexity to this assumption.

> _**Every module that requires native code has to be installed natively before it can be used in the loaded Snack**_

This means that if you want to use [**expo-location**](https://docs.expo.dev/versions/latest/sdk/location/) in the Snack you want to load, it has to be installed in the native build before you can use it.

### Snack and Snackager

Snack uses a node module bundler called "Snackager". Snackager will automatically build a JS-only bundle if you include it in your Snack. In some rare cases this bundling process might fail, usually because it tries to refer React Native internals [like these files](https://github.com/expo/snack/blob/main/snackager/src/bundler/externals.ts#L23-L28). Let us know if you run into Snackager failures.

## ❌ Common Errors

_If anything comes up during development or testing, it will be added here_

<div align="center">
  <br />
  with&nbsp;❤️&nbsp;&nbsp;<strong>Expo</strong>
  <br />
</div>
