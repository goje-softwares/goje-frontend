/* eslint-disable no-undef */
const { exec } = require("child_process");
const { PowerShell } = require("node-powershell");

if (process.platform === "win32") {
  PowerShell.$`get-process php -ea 0 | Stop-Process`
    .then((res) => {
      console.log(res.raw);
    })
    .catch((err) => {
      console.error(err);
    });
} else {
  exec(
    `echo 'write command to stop the php process'`,
    (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        return;
      }
      if (stderr) {
        console.error(stderr);
        return;
      }
      console.log(stdout);
    }
  );
}
