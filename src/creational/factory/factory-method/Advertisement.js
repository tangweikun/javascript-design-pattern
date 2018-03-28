// HELP:

export const Advertisement = function(type, content) {
  // 这段代码到底有什么用?
  if (this instanceof Advertisement) {
    return new this[type](content)
  }

  return new Advertisement(type, content)
}

Advertisement.prototype = {
  Java: function(content) {
    this.getContent = function() {
      return content
    }
  },
  PHP: function(content) {
    this.getContent = function() {
      return content
    }
  },
}
