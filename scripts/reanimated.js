const fs = require('fs');
const path = require('path');

const reanimated = path.resolve(__dirname, '../node_modules/react-native-reanimated');

// Copy the plugin to `plugin-standalone.js` to include it in the runtime
fs.copyFileSync(path.join(reanimated, 'plugin.js'), path.join(reanimated, 'plugin-standalone.js'));
