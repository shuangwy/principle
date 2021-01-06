Function.prototype.myBind = function (context, ...args) {
  let self = this;
  let fBound = function () {
    return self.apply(this instanceof fBound ? this : context || window, args);
  };
  fBound.prototype = Object.create(this.prototype);
  return fBound;
};
