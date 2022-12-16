import React, { useEffect, useState } from "react";
import { AxiosClient } from "../config/axiosClient";

function useGetAllUser() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function load() {
      try {
        const res = await AxiosClient.get("/users");
        setData(res.data);
      } catch (error) {
        setError(error);
      }
    }
    load();
  }, []);
  return { data, error };
}

export default useGetAllUser;
