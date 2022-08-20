/* eslint-disable no-undef */
const { PowerShell } = require("node-powershell");
const { Bash } = require("node-bash");

if (process.platform === "win32") {
  PowerShell.$`cd ../goje-backend; php artisan db:wipe; php artisan migrate; php artisan serve`
    .then((res) => {
      console.log(res.raw);
    })
    .catch((err) => {
      console.error(err);
    });
} else {
  Bash.$`sudo /opt/lampp/lampp startmysql`
    .then((res) => {
      console.log(res.raw);
    })
    .catch((err) => {
      console.error(err);
    });
  Bash.$`cd ../goje-backend; php artisan db:wipe; php artisan migrate; php artisan serve`
    .then((res) => {
      console.log(res.raw);
    })
    .catch((err) => {
      console.error(err);
    });
}
