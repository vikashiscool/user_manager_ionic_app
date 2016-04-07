angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

//Get request to persons API
.controller('UsersCtrl', function($scope, $http) {
  $http.get("https://myapi.profstream.com/api/140123/persons")
    //Success promise
    .success( function (users){
      console.log(users);
      //need to assign data to the scope
        $scope.users = users;
    })
    //Error promise
    .error( function (){
      alert("Error getting users");
    });


  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
})

.controller('UserDetailCtrl', function($scope, $http, $stateParams) {
  $http.get("https://myapi.profstream.com/api/140123/persons/" + $stateParams.userId)
    .success( function (user){
    $scope.user = user;
    // Users.get($stateParams.userId)
  })

    .error( function (){
      alert("Error getting user info :(")
    })
  })

.controller('PhotoCtrl', function($scope) {
  $scope.takePicture = function (){

  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 50,
    destinationType: Camera.DestinationType.FILE_URI 
  });

  function onSuccess(imageURI) {
    $scope.picTaken = imageURI;

  }

  function onFail(message) {
  }
  };
})

.controller('MapCtrl', function($scope) {
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

  function geoSuccess(position) {
    initializeMap(position.coords.latitude,
    position.coords.longitude, "map");
  }

  function geoError() {

  }

  function initializeMap(lat, lng, where) {
    var myLatlng = new google.maps.LatLng(lat, lng);

    var mapOptions = {
        zoom: 15,
        center: myLatlng
    }

    var map = new google.maps.Map(document.getElementById(where), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });
  }


})








