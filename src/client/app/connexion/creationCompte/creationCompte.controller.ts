namespace app.connexion.creationCompte {
    'use strict';
    import IPromise = angular.IPromise;
    import Utilisateur = app.users.Utilisateur;

    export class CreationCompteController {
        
        newUser:Utilisateur;
        /* @ngInject */
        constructor() {
        }
    }

    angular
        .module('app.connexion.creationCompte')
        .controller('CreationCompteController', CreationCompteController);
}
