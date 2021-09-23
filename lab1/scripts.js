angular.module('myApp', [])
		.controller('myCtrl', ['$scope', function($scope) {
            $scope.number = 0;

    		$scope.one = function() {
    			initNumber(1);
    		};

    		$scope.two = function() {
    			initNumber(2);
    		};

    		$scope.three = function() {
    			initNumber(3);
    		};

    		$scope.four = function() {
    			initNumber(4);
    		};

    		$scope.five = function() {
    			initNumber(5);
    		};

    		$scope.six = function() {
    			initNumber(6);
    		};

    		$scope.seven = function() {
    			initNumber(7);
    		};

    		$scope.eight = function() {
    			initNumber(8);
    		};

    		$scope.nine = function() {
    			initNumber(9);
    		};

    		$scope.zero = function() {
        		initNumber(0);
    		};
    		$scope.plus = function() {
    			initAction('+')
    		};
    		$scope.minus = function() {
    			initAction('-')
    		};
    		$scope.multiplication = function() {
    			initAction('*');
    		};

    		$scope.devide = function() {
    			initAction('/');
    		};

    		function initNumber(number) {
    			if ($scope.number!=0) {
        			$scope.number=$scope.number+''+number;
        		}
        		else{
        			$scope.number=$scope.number+number;
        		}
    		};

    		function initAction(action){
    			if ($scope.action == null) {
                    if ($scope.result == null) {
                        $scope.result = $scope.number;
                    }
					$scope.result = $scope.result + action;
					$scope.action = action;
                    $scope.number = 0;
				}
    		}

    $scope.calculate = function(){
        $scope.result = $scope.result;
    	switch($scope.action){
    	case '+':
    		$scope.result = parseFloat($scope.result) + parseFloat($scope.number);
    		break;
    	case '-':    	
    		$scope.result = parseFloat($scope.result) - parseFloat($scope.number);
    		break;
    	case '*':
    		$scope.result = parseFloat($scope.result) * parseFloat($scope.number);
    		break;
    	case '/':
    		$scope.result = parseFloat($scope.result) / parseFloat($scope.number);
    		break;
    	}
    	$scope.action = null;
        $scope.number = 0;
    }
    
}]);