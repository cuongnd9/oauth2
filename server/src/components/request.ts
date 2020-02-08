import axios, { AxiosRequestConfig } from "axios";

/**
 *
 * @param {string} url A url from a network.
 * @param {object} options Options to config request.
 * See more option here: https://github.com/axios/axios
 */
async function request(url = "", options: AxiosRequestConfig = {}) {
  const { method = "get", responseType = "json", data = {}, ...config } = options;
  const { data: result } = await axios({
    method,
    url,
    responseType,
    data,
    ...config
  });
  return result;
}

export default request;
