import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
/**
 *
 * @param {string} url
 * @param {Object} requestOptions
 * @param {boolean=} requestOptions.fetchOnLoad
 * @param {import("axios").AxiosRequestConfig} options
 **/
function useApi(url, requestOptions = {}, options = {}) {
  const { fetchOnLoad = true } = requestOptions;
  const [data, setData] = useState();
  const [states, setStates] = useState({
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: "",
  });
  /**
   *
   * @param {import("axios").AxiosRequestConfig} requestConfig
   */
  async function fetchData(requestConfig) {
    setStates({ isSuccess: false, isError: false, isLoading: true });
    axiosInstance({ ...options, url, ...requestConfig })
      .then((res) => {
        setData(res.data);
        setStates((prev) => ({ ...prev, isSuccess: true }));
      })
      .catch((err) => {
        setStates((prev) => ({
          ...prev,
          isError: true,
          error: err?.message || "Something not good",
        }));
      })
      .finally(() => setStates((prev) => ({ ...prev, isLoading: false })));
  }

  useEffect(() => {
    if (!fetchOnLoad) return;
    fetchData();
  }, [fetchOnLoad]);

  return { data, fetchData, ...states };
}

export { useApi };
