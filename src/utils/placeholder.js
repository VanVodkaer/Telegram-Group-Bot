// placeholder.js
// 替换占位符

module.exports = (info, text) => {
  text = text.replace(/\$\{FIRST_NAME\}/g, info.first_name).replace(/\$\{ID\}/g, info.id);
  if (info.last_name) {
    text = text.replace(/\$\{LAST_NAME\}/g, info.last_name);
  }
  if (info.username) {
    text = text.replace(/\$\{USER_NAME\}/g, info.username);
  }
  console.log(text);

  return text;
};
