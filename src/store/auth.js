import axios from "axios";

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getAuthRequest(_, payload) {
      try {
        const { data } = await axios.get("https://track-api.leadhit.io/client/test_auth", {
          headers: {
            "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo",
            "Leadhit-Site-Id": payload,
          },
        });
        if (data.message === "ok") {
          localStorage.setItem("leadhit-site-id", payload);
          return true;
        } else {
          return false;
        }
      } catch (_) {
        return false;
      }
    },
  },
};
