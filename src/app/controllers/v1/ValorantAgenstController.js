import SrAgenstService from '../../services/v1/valorant/sr-agents-service.js'

class ValorantAgentsController {
  async getAgents(req, res) {
    const result = await SrAgenstService.getListAgents();
    return res.json(result);
  }

}

export default new ValorantAgentsController();