const mineflayer = require('mineflayer');

function createMyBot() {
  const bot = mineflayer.createBot({
    host: 'golresseason2.playwithbao.com', // ⚠️ CHANGE THIS to your BaoHost IP
    port: 43938,                       // ⚠️ CHANGE THIS if your port is different
    username: 'BaoBot247',             // Give your bot a name
    version: '1.21.1'                  // Match your server version
  });

  bot.on('spawn', () => {
    console.log('Bot successfully joined the BaoHost server!');
  });

  bot.on('end', () => {
    console.log('Disconnected. Reconnecting in 10 seconds...');
    setTimeout(createMyBot, 10000); 
  });

  bot.on('error', (err) => {
    console.log('Error: ', err.message);
  });
}

createMyBot();
// This tiny web server keeps Render's free tier happy!
const http = require('http');
http.createServer((req, res) => res.end('Bot is alive!')).listen(process.env.PORT || 3000);
