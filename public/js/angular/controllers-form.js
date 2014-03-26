'use strict';

/* Controllers of the form page */

angular.module('ezPAARSE.form-controllers', ['ngCookies'])
  .controller('FormCtrl', function ($scope, $location, $cookieStore, requestService) {

    $scope.customHeaders = [];
    $scope.files         = [];
    $scope.totalSize     = 0;
    $scope.showHelp      = false;

    $scope.proxyTypes = [
      'EZproxy',
      'Apache',
      'Squid'
    ];

    $scope.encodings = [
      'UTF-8',
      'ISO-8859-1'
    ];

    $scope.resultFormats = [
      { type: 'CSV', mime: 'text/csv' },
      { type: 'TSV', mime: 'text/tab-separated-values' },
      { type: 'JSON', mime: 'application/json' }
    ];

    $scope.tracesLevels = [
      { level: 'error', desc: 'Erreurs uniquement' },
      { level: 'warn', desc: 'Warnings sans conséquences' },
      { level: 'info', desc: 'Informations générales' },
      { level: 'verbose', desc: '-- vraiment nécessaire? --' },
      { level: 'silly', desc: 'Détails du traitement' }
    ];

    var defaultSettings = {
      remember: true,
      outputFields: [],
      headers: {
        'Accept':           'text/csv',
        'Traces-Level':     'info',
        'Response-Charset': 'UTF-8',
        'Request-Charset':  'UTF-8'
      }
    };

    $scope.loadDefault = function () {
      $scope.settings = angular.copy(defaultSettings);
    };

    $scope.loadCookie = function () {
      $scope.loadDefault();

      var settings = $cookieStore.get('settings');
      if (!settings) { return; }

      for (var opt in settings) {
        $scope.settings[opt] = settings[opt];
      }
    };

    $scope.loadCookie();

    $scope.$watch('settings', function saveCookie() {
      if ($scope.settings.remember) {
        $cookieStore.put('settings', $scope.settings);
      } else {
        $cookieStore.put('settings', { remember: false });
      }
    }, true);

    $scope.toggleHelp = function () {
      $scope.showHelp = !$scope.showHelp;
    };

    $scope.addField = function (type) {
      var input = (type == 'plus') ? 'plusField' : 'minusField';

      if ($scope[input]) {
        $scope.settings.outputFields.push({ name: $scope[input], type: type });
        $scope[input] = '';
      }
    };

    $scope.addCustomHeader = function () {
      if (!$scope.settings.customHeaders) {
        $scope.settings.customHeaders = [];
      }
      $scope.settings.customHeaders.push({ name: '', value: '' });
    };

    $scope.removeCustomHeader = function (index, evt) {
      evt.stopPropagation();
      $scope.settings.customHeaders.splice(index, 1);
    };

    $scope.removeField = function (index, evt) {
      evt.stopPropagation();
      $scope.settings.outputFields.splice(index, 1);
    };

    var updateTotalSize = function () {
      $scope.totalSize = 0;
      for (var i = 0, l = $scope.files.length; i < l; i++) {
        $scope.totalSize += $scope.files[i].size;
      }
    };

    $scope.addFiles = function (files) {
      if (!files) { return; }

      $scope.$apply(function () {
        for (var i = 0, l = files.length; i < l; i++) {
          $scope.files.push(files[i]);
        }
        updateTotalSize();
      });
    };

    $scope.removeFile = function (index) {
      $scope.files.splice(index, 1);
      updateTotalSize();
    };

    $scope.selectFiles = function (fileInput) {
      var input = $(fileInput);
      var files = input.prop('files') || [];
      $scope.addFiles(files);
      input.val('');
    };

    $scope.start = function (ajax) {
      var formData = new FormData();
      var settings = $scope.settings;
      var headers  = angular.copy(settings.headers);

      if (settings.proxyType && settings.logFormat) {
        headers['Log-Format-' + settings.proxyType] = settings.logFormat;
      }

      // Create Output-Fields
      if (settings.outputFields && settings.outputFields.length) {
        var outputFields = '';
        settings.outputFields.forEach(function (field) {
          outputFields += field.type == 'plus' ? '+' : '-';
          outputFields += field.name + ',';
        });
        headers['Output-Fields'] = outputFields.substr(0, outputFields.length - 1);
      }

      settings.customHeaders.forEach(function (header) {
        if (header.name && header.value) { headers[header.name] = header.value; }
      });

      $scope.files.forEach(function (file) {
        formData.append("files[]", file);
      });

      requestService.send(formData, headers);

      $location.path('/process');
    };
  });