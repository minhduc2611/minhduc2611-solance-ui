import React from "react";
import useGetCommit from "../../hooks/useGetCommit";

function CommitPage() {
  const { data, error } = useGetCommit();
  return <div>CommitPage</div>;
}

export default CommitPage;
