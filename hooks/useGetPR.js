import React, { useEffect, useState } from "react";
import { octokit } from "../config/Octokit";

function useGetPR() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState();

  useEffect(() => {
    async function FetchPR() {
      try {
        const data = await octokit.request(
          "GET /repos/{owner}/{repo}/pulls{?state,head,base,sort,direction,per_page,page}",
          {
            owner: "dinhquocduy5",
            repo: "Amazon-app",
            per_page: 10,
            page: 1,
          }
        );
        setData(data);
      } catch (error) {
        setErr(error);
      }
    }
    FetchPR();
  }, []);
  return {
    data,
    err,
  };
}

export default useGetPR;
