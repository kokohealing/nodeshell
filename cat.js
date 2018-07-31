const fs = require('fs');

module.exports = function (cmd){
    if (cmd[0] === "cat"){
        fs.readFile(`./${cmd[1]}`, 'utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
        }); 
    }
}