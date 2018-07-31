const pwd = require('./pwd');
// const fs = require('fs');
const ls = require('./ls');
const cat = require('./cat');

// output prompt
process.stdout.write('prompt > ');

// the stdin data event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    const input = cmd.split(" ");

    // process.stdout.write("You typed: " + cmd);

    // if (cmd === "pwd"){
    //     process.stdout.write(process.cwd());
    // }

    pwd(cmd);
    ls(cmd);
    cat(input);

    process.stdout.write("\nprompt > ");
});



