namespace app.evenements.sorties {
    'use strict';
    import IPromise = angular.IPromise;
    import Sortie = app.evenements.Sortie;
    import Logo = app.evenements.Logo;

    export class SortiesController {

        sorties: Array<Sortie> = [];

        isCollapsed: boolean = true;

        /* @ngInject */
        constructor(private $state, private SortiesService: ISortiesService, private $uibModal) {
            this.getSorties();
        }

        getSorties() {
            let self = this;
            this.SortiesService.getSorties().then(function (sort) {
                //On récupère la sortie
                self.sorties = sort;
            })
        }

        goToSortie(id: number) {
            this.$state.go('home.evenements.sortie', {"id": id});
        }

        goToUserProfile(id: number) {
            this.$state.go('home.users.profile', {"id": id});
        }

        openComponentModal() {
            var modalInstance = this.$uibModal.open({
                animation: true,
                component: 'modal',
                resolve: {
                    items: function () {
                        return ['item1', 'item2', 'item3'];
                    }
                }
            });

        }
    }
    angular
        .module('app.evenements.sorties')
        .controller('SortiesController', SortiesController);
}
