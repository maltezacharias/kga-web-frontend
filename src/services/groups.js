(function() {

  angular.module('kga.studygroups', [])
  .factory('studygroups', studygroupsFactory);

  function studygroupsFactory() {
    var studygroupsService = {
      groups: []
    };

    for (counter = 0; counter < 80; counter++) {
      studygroupsService.groups.push(new Studygroup(counter,'KG '+counter,10));
    }

    return studygroupsService;
  }

  // Constructorfunction for studygroup objects
  function Studygroup(number, identifier, capacity) {
    var _this = this;
    this.number = number;
    this.identifier = identifier;
    this.remaining = Math.floor(Math.random()*capacity);
    this.capacity = capacity;
  }


})();
