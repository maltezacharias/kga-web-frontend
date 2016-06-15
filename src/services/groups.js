(function() {

	angular.module('kga.studygroups', [])
		.factory('studygroups', studygroupsFactory);

	function studygroupsFactory() {
		var studygroupsService = {
			groups: []
		};

		for (counter = 0; counter < 80; counter++) {
			studygroupsService.groups.push(new Studygroup(counter,'Kleingruppe '+counter,10, counter % 2));
		}

		return studygroupsService;
	}

	// Constructorfunction for studygroup objects
	function Studygroup(number, identifier, capacity, locked) {
		var _this = this;
		this.locked = locked;
		this.number = number;
		this.identifier = identifier;
		this.remaining = Math.floor(Math.random()*capacity);
		this.capacity = capacity;
		Object.defineProperty(this,"full", {
			enumerable: true,
			get: function() { return !this.locked && this.remaining <= 0; }
		});
		Object.defineProperty(this,"available", {
			enumerable: true,
			get: function() { return !this.locked && !this.full; }
		});

	}


})();
