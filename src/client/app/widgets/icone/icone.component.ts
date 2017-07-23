namespace app.widgets.icone {

    export class Icone implements ng.IComponentOptions {

        public bindings:{ [binding:string]:string} = {
            image: '@',
            legende: '@'
        };
        public controller:Function = IconeCtrl;
        public controllerAs:string = 'vm';
        public templateUrl:string = 'app/widgets/icone/icone.html';
    }

    angular
        .module('app.widgets.icone')
        .component('icone', new Icone());
}
