(function () {
    'use strict';

    angular
        .module('app')
        .factory('ResService', Service);

    function Service($http, $q) {
        var service = {};

        service.Create = Create;
        service.Delete = Delete;
        service.Edit = Edit;
        service.Check = Check;

        return service;

        function Create(rsrv) {
            return $http.post('/api/public/reservation', rsrv).then(handleSuccess, handleError);
        }

        function Delete(_id) {
            return $http.delete('/api/protected/reservation/' + _id).then(handleSuccess, handleError);
        }

        function Edit(_id, rsrv) {
            return $http.put('/api/protected/reservation/' + _id, rsrv).then(handleSuccess, handleError);
        }

        function Check(_id, rsrv) {
            return $http.get('/api/public/reservation/check', {params: rsrv}).then(handleSuccess, handleError);
        }

        // private functions
        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
