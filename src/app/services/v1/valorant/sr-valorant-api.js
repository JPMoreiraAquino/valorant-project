import axios from "axios";
class SrValorantApi {
  async getAgents() {
    const { data }  = await axios.get(`${process.env.VALORANT_BASE_URL}/agents`)
    return data;
  }
}

export default new SrValorantApi();