function capitalize(s) {
  return String(s).charAt(0).toUpperCase() + String(s).toLowerCase().slice(1);
}

/**
 * Get a title from user input, with a default value derived from the slug.
 * @param {*} tp - Templater context
 * @param {*} slug - the slug to derive the default title from
 * @returns 
 */
module.exports = async function (tp, slug) {
  const defaultTitle = slug.split("-").map(s => capitalize(s)).join(" ");
  return tp.system.prompt("Title", defaultTitle);
};