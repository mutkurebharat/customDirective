app.service('$sampleService', ['$http', function($http) {
    this.getUsers = function() {
        var p = $http.get('users.json')
            .then(function(res) {
                return res.data;
            }, function(error) {
                console.log("Error", error);
            });
        return p;
    }

    this.demoServiceFunction = function(argument) {
        alert(argument)
    }
}])
//'https://jsonplaceholder.typicode.com/todos'
