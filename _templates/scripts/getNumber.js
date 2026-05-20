/**
 * Get the highest number from files in the same folder matching the given patterns.
 * @param {*} tp - Templater context
 * @param {*} filePattern - regex pattern to match the files to consider 
 * @param {*} fileNumberPattern - regex pattern to extract the number from the file name
 * @returns 
 */
module.exports = function (tp, filePattern, fileNumberPattern) {
  const folderPath = tp.file.folder(true);
  const vaultFiles = app.vault.getMarkdownFiles();
  const folderFiles = vaultFiles.filter(f => f.parent.path.startsWith(folderPath));
  const adrFiles = folderFiles.filter(f => filePattern.test(f.name));

  const maxNum = adrFiles.reduce((max, f) => {
    const match = f.name.match(fileNumberPattern);
    return match ? Math.max(max, parseInt(match[1])) : max;
  }, 0);

  return String(maxNum + 1).padStart(4, "0");
};