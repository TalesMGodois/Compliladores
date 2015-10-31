/**
 * Created by tales on 29/10/15.
 */
import gulp = require("./node_modules/gulp");
import FileFilter = require('./tsLibs/FileFilter');

var ff = new FileFilter();

ff.importFile('Txts/strings.txt');
ff.setFileArray();


