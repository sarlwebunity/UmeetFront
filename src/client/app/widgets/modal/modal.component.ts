namespace app.widgets.modal {

    export class Modal implements ng.IComponentOptions {

        public bindings:{ [binding:string]:string} = {
            resolve: '<',
            close: '&',
            dismiss: '&'
        };
        public controller:Function = ModalCtrl;
        public controllerAs:string = 'vm';
        public templateUrl:string = 'app/widgets/modal/modal.html';
    }

    angular
        .module('app.widgets.modal')
        .component('modal', new Modal());
}
