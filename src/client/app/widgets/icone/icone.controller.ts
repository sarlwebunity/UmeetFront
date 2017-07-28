namespace app.widgets.icone {

    export interface IIconeCtrl {

    }

    export class IconeCtrl implements IIconeCtrl {

        /* @ngInject */
        constructor() {
        }
    }

    angular
        .module('app.widgets.icone')
        .controller('IconeCtrl', IconeCtrl);
}
