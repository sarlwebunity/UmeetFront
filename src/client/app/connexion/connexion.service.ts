/**
 * Created by blosa on 21/09/2016.
 */
module app.connexion {

    'use strict';
    import IPromise = angular.IPromise;

    // Interface du controller
    export interface IConnexionService {

    }

    class ConnexionService implements IConnexionService {

        /* @ngInject */
        constructor(private $resource) {
        }

    }

    angular
        .module('app.connexion')
        .service('ConnexionService', ConnexionService);
}
