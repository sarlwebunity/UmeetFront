namespace app.widgets.menu {

    export interface IMenuCtrl {

    }

    export class MenuCtrl implements IMenuCtrl {
        
        /* @ngInject */
        constructor() {
        }
    }

    angular
        .module('app.widgets.menu')
        .controller('MenuCtrl', MenuCtrl);
}
