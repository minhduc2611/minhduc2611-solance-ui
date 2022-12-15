import React, { useEffect, useState } from "react";
import { AxiosClient } from "../config/axiosClient";

function useGetAllProject() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function load() {
      try {
        const res = await AxiosClient.get("/projects");
        setData(res.data);
      } catch (error) {
        setError(error);
      }
    }
    load();
  }, []);
  return { data, error };
}

export default useGetAllProject;
