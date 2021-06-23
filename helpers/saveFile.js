const fs = require("fs");
const file = "./db/data.json";


const saveDB = ( data ) => {
    fs.writeFileSync( file, JSON.stringify(data) );
}

const readDB = () => {

    if (!fs.existsSync(file)) {
        return null;
    }

    const info = fs.readFileSync(file, { encoding: "utf-8" });
    const parsedInfo = JSON.parse(info);

    return parsedInfo;
}

module.exports = {
    saveDB,
    readDB
}