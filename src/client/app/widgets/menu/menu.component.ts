namespace app.widgets.menu {

    export class Menu implements ng.IComponentOptions {

        public bindings:{ [binding:string]:string} = {
            test: '='
        };

        public controller:Function = MenuCtrl;
        public controllerAs:string = 'vm';
        public templateUrl:string = 'app/widgets/menu/menu.html';
    }

    angular
        .module('app.widgets.menu')
        .component('mainMenu', new Menu());
}
