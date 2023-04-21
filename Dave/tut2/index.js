const fsPromises = require('fs').promises;
const path = require('path');


const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8');
        console.log(data);
        await fsPromises.writeFile(path.join(__dirname, 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'promiseWrite.txt'), '\n\nNice to meet you');
        await fsPromises.writeFile(path.join(__dirname, 'promiseWrite.txt'), path.join(__dirname, 'starter.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'starter.txt'), 'utf8' )
        console.log(newData);

    }
    catch(err){
        console.log(err);
    }
}

fileOps()

//read file
// fs.readFile(path.join(__dirname, 'starter.txt'), 'utf8', (err,data) => {
//     if(err) throw err;
//     console.log(data);
// })

// // write file
// fs.writeFile(path.join(__dirname, 'reply.txt'), 'Nice to meet you', (err) => {
//     if(err) throw err;
//     console.log('write complete');
// })

// // Append file/ join content
// fs.appendFile(path.join(__dirname, 'reply.txt'), 'Texting text , \n\n Yes append', (err) => {
//     if(err) throw err;
//     console.log('append complete');
// })

// // rename a file
// fs.rename(path.join(__dirname, 'reply.txt'), path.join(__dirname, 'reply2.txt'), (err) => {
//     if(err) throw err;
//     console.log('append complete');
// })

// process.on('uncaughtException', err => {
//     console.error(`there was an uncaught error: ${err}`);
//     process.exit(1);
// })