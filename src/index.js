const readLogsFile = require('./actions/read-file');

const readGameLogsFile = async () => {
  try {
    const gamesLogFile = 'logs/games.log';
    const gameLogs = await readLogsFile(gamesLogFile);
  
    console.log(gameLogs);
    return gameLogs;
  } catch (err) {
    console.log(`Não foi possível ler o arquivo ${logsFile}\n Erro: ${err}`);
    process.exit(1);
  }
}

readGameLogsFile();

module.exports = readGameLogsFile;