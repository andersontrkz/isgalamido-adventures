const fs = require('fs').promises;

module.exports = async (file) => {
  try {
    const fileContent = await fs.readFile(file, 'utf8');
    return fileContent;
  } catch {
    return null;
  };
};