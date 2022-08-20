/* eslint-disable no-undef */
const { PowerShell } = require("node-powershell");
const { Bash } = require("node-bash");

if (process.platform === "win32") {
  PowerShell.$`get-process php -ea 0 | Stop-Process`
    .then((res) => {
      console.log(res.raw);
    })
    .catch((err) => {
      console.error(err);
    });
} else {
  Bash.$`pgrep -f lampp | xargs -I {} sudo kill {}; pgrep -f php | xargs -I {} kill {}`
    .then((res) => {
      console.log(res.raw);
    })
    .catch((err) => {
      console.error(err);
    });
}
