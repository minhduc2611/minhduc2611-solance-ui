import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.tokenPersonal,
});

export { octokit };
