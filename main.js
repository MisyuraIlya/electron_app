const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url')
const { exec } = require('child_process');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    title:'Digitrade',
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration:true,
        contextIsolation: true,
        preload: path.join(__dirname, './preload.js')
    }
  });


  const startUrl = url.format({
    pathname: path.join(__dirname, './app/build/index.html'),
    protocol: 'file',
  })

  mainWindow.loadURL("http://localhost:3000/");

  mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('submit:todoForm', (event, args) => {
    console.log(args.description)
    exec('cd .. && ls', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        return;
      }
      console.log(`Command output: ${stdout}`);
    });
})
