const { app, BrowserWindow } = require("electron");
const path = require("path");

// const isDev = process.env.NODE_ENV === "development";

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: true,
    },
  });

  // if (isDev) {
  //   mainWindow.loadURL("http://localhost:3000");
  //   mainWindow.webContents.openDevTools();
  // } else {
  // Log the path for debugging
  const indexPath = path.join(__dirname, "..", "build", "index.html");
  console.log("Loading from:", indexPath);

  mainWindow.loadFile(indexPath);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
