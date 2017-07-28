namespace app.connexion {
    'use strict';
    import IPromise = angular.IPromise;

    export class ConnexionController {

        /* @ngInject */
        constructor(private ConnexionService: IConnexionService, private $stateParams) {
        }
    }

    angular
        .module('app.connexion')
        .controller('ConnexionController', ConnexionController);
}
