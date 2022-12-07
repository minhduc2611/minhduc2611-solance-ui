import React from "react";
import useGetPR from "../../hooks/useGetPR";

function PullRequest() {
  const { data, err } = useGetPR();
  console.log(data);
  return <div>PullRequest</div>;
}

export default PullRequest;
