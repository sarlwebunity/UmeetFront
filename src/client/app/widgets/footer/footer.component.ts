namespace app.widgets.footer {

    export class footer implements ng.IComponentOptions {

        public bindings:{ [binding:string]:string} = {
            active: '@',
        };
        public controller:Function = footerCtrl;
        public controllerAs:string = 'vm';
        public templateUrl:string = 'app/widgets/footer/footer.html';
    }

    angular
        .module('app.widgets.footer')
        .component('footer', new footer());
}
