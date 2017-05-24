namespace app.users {
    'use strict';
    import IPromise = angular.IPromise;

    export class Utilisateur {

        id:         number;
        nom:        string;
        prenom:     string;
        date_birth: string;
        mail:       string;
        pass:       string;
        passV:      string;

        /* @ngInject */
        constructor(id:number, nom:string,prenom:string,date_birth:string,mail:string,pass:string,passV:string) {
            this.id=id;
            this.nom = nom;
            this.prenom = prenom;
            this.date_birth = date_birth;
            this.pass = pass;
            this.passV = passV;
        }

    }
}
