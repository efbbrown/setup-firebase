import { getInput, endGroup, startGroup } from "@actions/core";
import { exec } from "@actions/exec";

export const setupProject = async () => {
  startGroup("Setup Project");
  const projectId = getInput("project_id");
  const path = getInput("project_path");
  console.log("Setting up projectId ", projectId);
  console.log("Changing directory to path ", path);

  if (path && projectId) {
    await exec(`firebase use --add ${projectId}`, [], { cwd: path });
  } else if (projectId) {
    await exec(`firebase use --add ${projectId}`);
  }
  endGroup();
};
