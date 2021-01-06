Function.prototype.myCall = function (context = window, ...args) {
  //apply  parameters is args
  let func = this;
  let fn = Symbol("fn");
  context[fn] = func;
  let res = context[fn](...args); //call
  delete context[fn];
  return res;
};

function person(name) {
  console.log(arguments);
}
const obj = { name: "123" };

person.myCall(obj, 123, 45);
