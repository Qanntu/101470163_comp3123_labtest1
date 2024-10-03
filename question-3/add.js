const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if(!fs.existsSync(logsDir)){
    fs.mkdirSync(logsDir);
    console.log('Logs directory created');
}

for (let i = 0; i < 10; i++){
    const filePath = path.join(logsDir, `log${i}.txt`);
    fs.writeFileSync(filePath, `file number ${i}` );
    console.log(`Created: log${i}.txt`);
}