const response = require("../helpers/response");
module.exports = {
  tesData: async (req, res) => {
    const id = req.params.id;
    if (id == 1) {
      return response(res, "id is required", 400, false);
    } else {
      const data = { data: { id: "2", name: "tes data" } };
      return response(res, "tes data resposne : " + id, 200, true, data);
    }
  },
  tesDataFailed: async (req, res) => {
    return response(res, "tes data resposne failed edited v2", 400);
  }
};
