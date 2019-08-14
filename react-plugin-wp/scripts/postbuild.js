const fs = require('fs-extra');
const path = require('path');

const buildFolder = path.join(__dirname, '../build');
const distFolder = path.join(__dirname, '../dist');
const jsFolder = path.join(buildFolder, '/static/js');
const cssFolder = path.join(buildFolder, '/static/css');

if (!fs.existsSync(distFolder)) fs.mkdirSync(distFolder);

let files = fs.readdirSync(jsFolder);
files.forEach(file => fs.copyFileSync(path.join(jsFolder, file), path.join(distFolder, `/${file}`)));
//TODO: RENAME .js to plugin-name.js

files = fs.readdirSync(cssFolder);
files.forEach(file => fs.copyFileSync(path.join(cssFolder, file), path.join(distFolder, `/${file}`)));
//TODO: RENAME .css to plugin-name.css

fs.copyFileSync(path.join(__dirname, '../react-plugin-wp.php'), distFolder + "/react-plugin-wp.php");

fs.removeSync(buildFolder);
fs.moveSync(distFolder, buildFolder, (err) => {
    if (err) throw err;
});