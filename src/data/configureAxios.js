import Axios from "axios";

export const configureAxios = () => {
  Axios.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("token");
    const serverCallUrl = new URL(config.url);

    if (serverCallUrl.pathname.includes("/auth")) return config;

    config.headers["authorization"] = `Bearer ${accessToken}`;
    return config;
  });
};
