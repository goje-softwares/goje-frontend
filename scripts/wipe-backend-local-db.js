/* eslint-disable no-undef */
const { exec } = require("child_process");
const { PowerShell } = require("node-powershell");

if (process.platform === "win32") {
  PowerShell.$`cd ../goje-backend; php artisan db:wipe; php artisan migrate`
    .then((res) => {
      console.log(res.raw);
    })
    .catch((err) => {
      console.error(err);
    });
} else {
  exec(
    `cd ../goje-backend; php artisan db:wipe; php artisan migrate`,
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
