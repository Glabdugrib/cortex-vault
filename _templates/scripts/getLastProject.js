/**
 * Get the project name from the frontmatter of the most recently edited file in the same folder,
 * or fall back to inferring it from the folder path at the given depth.
 * @param {object} tp - Templater context
 * @returns {function} - Call with ({ depth? }) to get the project name
 */
module.exports = (tp) => async ({ depth = 2 } = {}) => {
  let project;

  // Get all markdown files inside the current file's folder
  const folderPath = tp.file.folder(true);
  const vaultFiles = app.vault.getMarkdownFiles();
  const folderFiles = vaultFiles.filter(f => f.parent.path.startsWith(folderPath));

  // Pick the last file in the folder and read its frontmatter
  const lastFile = folderFiles.length > 0 ? folderFiles[folderFiles.length - 1] : undefined;
  if (lastFile) {
    const lastFrontmatter = app.metadataCache.getFileCache(lastFile)?.frontmatter;
    project = lastFrontmatter?.project;
  }

  console.debug("[getLastProject]", { folderPath, lastFile: lastFile?.path, project });

  // If no project was found in frontmatter, fall back to prompting the user
  // using the folder name at the given depth as default value
  if (!project) {
    project = await tp.user.getProject(tp)({ depth });
  }

  return project;
};