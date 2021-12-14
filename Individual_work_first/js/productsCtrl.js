app.controller('productsCtrl', function($scope) {
    $scope.services = [
        { "title": "Susi", "time": "0:40", "price": 200, "image": "images/Susi.jpg" },
        { "title": "Spagetty", "time": "0:50", "price": 350, "image": "images/Spagetty.jpg" },
        { "title": "Raviolly", "time": "0:45", "price": 200, "image": "images/Raviolly.jpg" },
        { "title": "Pelmeny", "time": "0:50", "price": 300, "image": "images/Pelmeny.jpg" },
        { "title": "Chicken", "time": "0:50", "price": 150, "image": "images/Chicken.jpg" },
        { "title": "Pork", "time": "0:10", "price": 450, "image": "images/Pork.jpg" },
        { "title": "Meet", "time": "0:45", "price": 250, "image": "images/Meet.jpg" },
        { "title": "Varenity", "time": "0:10",  "price": 300, "image": "images/Varenity.jpg" },
        { "title": "Food", "time": "0:20", "price": 800, "image": "images/Food.jpg" },
          ];

    $scope.inputLogin = "";
    $scope.inputPass = "";

    $scope.login = "admin";
    $scope.password = "password";
    $scope.isSignIn = false;
    $scope.editing = false;


    $scope.signIn = function() {
        if ($scope.inputLogin === $scope.login) {
            if ($scope.inputPass == $scope.password) {
                $scope.isSignIn = true;
                document.getElementById('myModal').style.display = "none"
            }
        }
    };

    $scope.removeProduct = function(itemTitle) {
        const index = $scope.services.findIndex(x => x.title === itemTitle);

        $scope.services.splice(index, 1);

        console.log(index);
    }
	


    $scope.addNewService = function() {
        newService = {
            title: "Unknown",
            price: 0,
            image: "images/logo.png"
        }

        $scope.services.push(newService);
    }


    $scope.orderByMe = function(item) {
        $scope.myOrderBy = item;
        $scope.reverseOrder();
    }

    $scope.myReverseBy = false;
    $scope.reverseOrder = function() {
        $scope.myReverseBy = !($scope.myReverseBy);
    }


});