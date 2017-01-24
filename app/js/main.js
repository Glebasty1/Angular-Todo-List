(function () {

  'use strict';

  require('angular');

  var mainCtrl = require('./controllers/mainctrl');

  angular.module('SampleApp', [])


  //Load controller
  .controller('MainController', ['$scope', mainCtrl]);

}());