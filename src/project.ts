import { getInput, endGroup, startGroup } from "@actions/core";
import { exec } from "@actions/exec";

export const setupProject = async () => {
  startGroup("Setup Project");
  const projectId = getInput("project_id");
  const path = getInput("project_path");

  if (path && projectId) {
    await exec(`cd ${path} && firebase use --add ${projectId}`);
  } else if (projectId) {
    await exec(`firebase use --add ${projectId}`);
  }
  endGroup();
};
