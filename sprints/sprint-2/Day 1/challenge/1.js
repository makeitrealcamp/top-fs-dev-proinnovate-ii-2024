/* Global Scope */
let test1Variable = 1;
(function () {
  let test1Variable = 'Cambie'
})();
console.log(test1Variable)