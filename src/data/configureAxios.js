import Axios from "axios";

export const configureAxios = () => {
  Axios.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("token");
    const serverCallUrl = new URL(config.url);
    console.log(serverCallUrl);
    if (serverCallUrl.pathname.includes("/auth")) return config;

    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  });
};
