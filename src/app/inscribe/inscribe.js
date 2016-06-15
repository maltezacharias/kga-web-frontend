angular.module( 'kga.inscribe', [
	'ui.router',
	'ui.bootstrap',
	'kga.studygroups',
	'kga.groupNumberFilter'
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'inscribe', {
		url: '/inscribe',
		views: {
			"main": {
				controller: 'InscribeCtrl as inscribe',
				templateUrl: 'inscribe/inscribe.tpl.html'
			}
		},
		data:{
			pageTitle: 'In Kleingruppe anmelden',
			roles: ['student']
		}
	});
})

.controller( 'InscribeCtrl', function InscribeCtrl( studygroups ) {
	var vm = this;
	vm.groups= studygroups.groups;
	vm.filter = '';
});
