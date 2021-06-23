require("colors");
const { inquirerMenu, pauseMenu } = require("./helpers/inquirer");


const main = async () => {
    let opt = "";
    do {
        opt = await inquirerMenu();

        await pauseMenu();

    } while (opt !== "0")

}

main();



