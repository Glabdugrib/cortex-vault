/**
 * Get the project name going N layers back in the folder path.
 * @param {object} tp - Templater context
 * @returns {function} - Call with (depth?) to get the project name
 */
module.exports = (tp) => async ({ depth = 1 } = {}) => {
  const parts = tp.file.folder(true).split("/");
  const index = parts.length - depth;
  const defaultProject = index >= 0 ? parts[index] : parts[0];

  console.debug("[getProject]", { parts, depth, index, defaultProject });

  return await tp.system.prompt("Project", defaultProject);
};