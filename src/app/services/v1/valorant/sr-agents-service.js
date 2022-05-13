// Forma 1 !!!
/*
const {
readFile
} = require('fs');

const { promisify } = require('util'); 

const readFileAsync = promisify(readFile);

async obterAgents() {
  const file = await readFileAsync(this.FILE_NAME, 'utf8' )
  return JSON.parse(file.toString());
}
*/
const SrAgenstService = require('./agents.json')

class SrAgenstService {
  obterAgents() {
    const agentsData = database;
    return agentsData
  }

  obterDataAgents() {

  }

  async listAgent(name) {
    const agentsData = await this.obterAgents();
    const filterData = agentsData.data.filter(item => (name ? (item.displayName === name) : true));

    return filterData
  }
}

module.exports = new SrAgenstService();