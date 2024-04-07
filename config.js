const fs = require('fs');
const chalk = require('chalk');

// Website Api
global.APIs = {
    xfarr: 'https://api.xfarr.com',
};

// Apikey Website Api
global.APIKeys = {
    'https://api.xfarr.com': 'Uc3LRsLE2d',
};

// Set your URL and API key here
global.APIs = {
    xfarr: {
        baseURL: 'https://api.xfarr.com',
        Key: 'Uc3LRsLE2d'
    }
};
 

// Other
global.apikey = https://telegra.ph/file/be51b14c863c11dd8ccc6.jpg;
global.ownername = .Nazeerkk236🍬🧃;
global.owner = [''923317715206];
global.premium = ['923317715206'];
global.packname = 'Nazeerkk236🍬🧃';
global.author = 'Nazeerkk236🍬🧃';
global.sessionName = 'https://chat.whatsapp.com/HLaHhHH9RedKDSgoBtNzDQsession';
global.prefa = ['', '!', '.'];
global.sp = '✪';
global.mess = {
    banned: '`You are *Banned* fron using commands!`',
    bangc: '`This Group is *Banned* from using Commands!`',
    success: '`✓ Success`',
    admin: '`This feature is only for group admins`',
    botAdmin: '`I am not an admin!`',
    owner: '`You are not my owner`',
    group: '`You can use this command only in groups ❌`',
    private: '`Feature is used only for private chats!`',
    bot: '`Bot number user special features`',
    wait: '*Processing Your request*',
    endLimit: '`Your daily limit has expired, the limit will be reset every 12 hours`',
};
global.link = 'https://whatsapp.com/channel/0029VaFNrVHBfxoBuY2TzH2w'
global.linkGroup = 'https://chat.whatsapp.com/E3PWxdvLc7ZCp1ExOCkEGp'
global.autoswview = process.env.AUTO_STATUS_SEEN || "true",
global.typemenu = 'v1' // 'v1' => 'v5'
global.onlygroup = false // onlygroup
global.onlypc = false
global.AUTO_ABOUT = true
global.limitawal = {
    premium: 'Infinity',
    free: 10
};

// Add anticall option
global.config = {
    options: {
        antiCall: true, // Set to true for anticall functionality, false otherwise
    },
};

// Ensure config object is defined before using it
if (config && config.options && config.options.antiCall) {
    let file = require.resolve(__filename);
    fs.watchFile(file, () => {
        fs.unwatchFile(file);
        console.log(chalk.redBright(`Update'${__filename}'`));
        delete require.cache[file];
        require(file);
    });
}
