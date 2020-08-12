const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;



const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const { log } = require('console');
let mainWindow;
const mkdirp = require('mkdirp')

const folder_path = `file://${path.join(__dirname, '../build/index.html')}`
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900, height: 680, webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
