namespace app.widgets.modal {

    export interface IModalCtrl {

    }

    export class ModalCtrl implements IModalCtrl {

        resolve;
        items;
        selected;
        dismiss;

        /* @ngInject */
        constructor(private $uibModal, private $onInit, private $document, private $log) {
        }

        open = function (size, parentSelector) {
            alert('test');
            var parentElem = parentSelector ?
                angular.element(this.$document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = this.$uibModal.open({
                animation: true,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$ctrl',
                size: size,
                appendTo: parentElem,
                resolve: {
                    items: function () {
                        return ['item1', 'item2', 'item3'];
                    }
                }
            });
            modalInstance.result.then(function (selectedItem) {
                this.selected = selectedItem;
                alert('test');
            }, function () {
                this.$log.info('Modal dismissed at: ' + new Date());
            });
        };
    }

angular
    .module('app.widgets.modal')
    .controller('ModalCtrl', ModalCtrl);
}
