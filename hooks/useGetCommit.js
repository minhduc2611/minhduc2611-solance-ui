import React, { useEffect, useState } from "react";
import { octokit } from "../config/Octokit";

function useGetCommit() {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function FetchCommit() {
      try {
        const data = await octokit.request(
          "GET /repos/{owner}/{repo}/commits{?sha,path,author,since,until,per_page,page}",
          {
            owner: "dinhquocduy5",
            repo: "Amazon-app",
          }
        );
        setData(data.data);
      } catch (error) {
        setError(error);
      }
    }
    FetchCommit();
  }, []);
  return { data, error };
}

export default useGetCommit;
