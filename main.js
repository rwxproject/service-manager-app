const path = require("path");
const electron = require("electron");
const SystemTray = require("./src/electron/system_tray");
const MainWindow = require("./src/electron/main_window");

const { app } = electron;

let mainWindow;
let tray;

app.on("ready", () => {
  app.dock.hide();

  mainWindow = new MainWindow(`file://${__dirname}/dist/index.html`);
  // mainWindow.webContents.openDevTools();

  const icon =
    process.platform === "win32"
      ? "system-manager-icon-tray.png"
      : "system-manager-icon-tray.png";
  const iconPath = path.join(__dirname, `./src/assets/${icon}`);

  tray = new SystemTray(iconPath, mainWindow);
});
