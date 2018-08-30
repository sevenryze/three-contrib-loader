module.exports = function(content) {
  this.cacheable && this.cacheable();

  return `module.exports = THREE => { ${content} };`;
};
