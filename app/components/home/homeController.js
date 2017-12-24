angular
  .module('app')
  .controller('homeController', homeController);

function homeController() {
  const vm = this

  vm.$onInit = function () {
    vm.time = new Date()
  }

  vm.updateTime = function () {
    vm.time = new Date()
  }
}
