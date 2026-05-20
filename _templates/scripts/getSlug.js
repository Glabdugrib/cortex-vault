/**
 * Get a slug from user input
 * @param {*} tp - Templater context
 * @returns 
 */
module.exports = async function (tp) {
  let slug = await tp.system.prompt("Slug", null, true);
  return slug.trim().toLowerCase().replaceAll("  ", "-").replaceAll(" ", "-");
};