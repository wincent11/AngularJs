angular.module('myApp', [])
		.controller('myCtrl', ['$scope', function($scope) {
    		$scope.result = 0;
    		$scope.firstNumber = $scope.result;
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
    			if ($scope.result!=0) {
        			$scope.result=$scope.result+''+number;
        		}
        		else{
        			$scope.result=$scope.result+number;
        		}
    		};

    		function initAction(action){
    			if ($scope.action==null) {
					$scope.result=$scope.result+action;
					$scope.action = action;
				}
    		}

    $scope.calculate = function(){
    	$numbers = $scope.result.split($scope.action);
    	$scope.firstNumber = $numbers[0];
    	$scope.secondNumber = $numbers[1];

    	switch($scope.action){
    	case '+':
    		$scope.result = parseFloat($scope.firstNumber) + parseFloat($scope.secondNumber);
    		break;
    	case '-':    	
    		$scope.result = parseFloat($scope.firstNumber) - parseFloat($scope.secondNumber);
    		break;
    	case '*':
    		$scope.result = parseFloat($scope.firstNumber) * parseFloat($scope.secondNumber);
    		break;
    	case '/':
    		$scope.result = parseFloat($scope.firstNumber) / parseFloat($scope.secondNumber);
    		break;
    	}
    	$scope.action = null;
    }
    
}]);