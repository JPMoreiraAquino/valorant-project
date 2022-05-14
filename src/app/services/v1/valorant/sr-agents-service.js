import srValorantApi from "./sr-valorant-api.js";
class SrAgenstService {
  async getAgentsUsables () {
    const getAgents = await srValorantApi.getAgents();
    const filterAgentsUsables = getAgents.data.filter(it => it.isPlayableCharacter === true);
    return [filterAgentsUsables, getAgents];

  }

  async getListAgents() {
    const [getAgentsfilter, getAgents] = await this.getAgentsUsables();
    const listAgents = getAgentsfilter.map(it => ({
      agentName: it.displayName
    }));
    return { 
      statusCode: getAgents.status,
      data:listAgents
    };
  }
}

export default new SrAgenstService();