angular.module('TIYChocolateApp', [])
   .controller('ChocolateController', function($scope, $http, $timeout) {

        $scope.testVar = 2;

        $scope.whateverThisIs = {};

        $scope.input = {};

        $scope.makeChocolate = function(numSmalls, numBigs, numGoals) {
            // $http.get("http://localhost:8080/make-chocolate.json?smalls="+numSmalls+"&bigs="+numBigs +"&goal="+numGoals)
            $http.get("/make-chocolate.json?smalls="+numSmalls+"&bigs="+numBigs +"&goal="+numGoals)
                .then(
                    function successCallBack(response) {
                        $scope.whateverThisIs = response.data;
                            if ($scope.whateverThisIs.hasSolution) {
                            $scope.input.numBigs = $scope.input.numBigs - $scope.whateverThisIs.bigs;
                            $scope.input.numSmalls = $scope.input.numSmalls - $scope.whateverThisIs.smalls;
                        } else {
                            $scope.whateverThisIs = response.data;
                        }
                        console.log($scope.whateverThisIs);
                    },
                    function errorCallBack(response) {
                        console.log(response.data);
                    });
        };

        $scope.makeArray = function(arraySize) {
           var returnArray = [];
           for (var i = 0; i < arraySize; i++) {
               returnArray.push(i);
           }
           return returnArray;
        };

//        $scope.testTimeout = function() {
//            if ($scope.numBigs >= whateverThisIs.bigs) {
//                return;
//            } else {
//                $scope.numBigs += 1;
//                $timeout($scope.testTimeout, 500);
//                console.log("running big");
//            }
//
//            if ($scope.numSmalls >= whateverThisIs.smalls) {
//                return;
//            } else {
//                $scope.numSmalls +=1;
//                $timeout($scope.testTimeout, 500);
//                console.log("running small");
//            }
//
//            console.log("TestTimeout is Running");
//        };

        console.log("Do the thing!");
//        $scope.numBigs = 1;
//        $scope.numSmalls = 1;
        $timeout($scope.testTimeout, 500)

   });