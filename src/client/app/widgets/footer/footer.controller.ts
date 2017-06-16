namespace app.widgets.footer {

    export interface IfooterCtrl {

    }

    export class footerCtrl implements IfooterCtrl {

        /* @ngInject */
        constructor() {
        }
    }

    angular
        .module('app.widgets.footer')
        .controller('footerCtrl', footerCtrl);
}
