angular.module('articles').controller('ArticlesController',['$scope',
    '$routeParams','$location','Authentication','Articles',
    function($scope,$routeParams,$location,Authentication,Articles ) {
        $scope.authentication = Authentication;


    $scope.create = function() {
        var article = new Articles({
            title : this.title,
            date : this.date,
            place : this.place,
            topic : this.topic,
            content : this.content,
            approver : this.approver,
            approverDate : this.approverDate,
            approver2 : this.approver2,
            approverDate2 : this.approverDate2,
            personalDetails : this.personalDetails
        });


        article.$save(function(response) {
            $location.path('articles/' + response._id);
        }, function(errorResponse) {
            $scope.error = errorResponse.data.message;
        });
    };

    $scope.find = function() {
        $scope.articles = Articles.query();
    };

    $scope.findOne = function() {
        $scope.article = Articles.get({
            articleId : $routeParams.articleId
        });
    };

    $scope.update = function() {
        $scope.article.$update(function(){
            $location.path('articles/' + $scope.article._id);
        }, function(errorResponse){
            $scope.error = errorResponse.data.message;
        });
    };


    $scope.delete = function(article) {
        if (article) {
            article.$remove(function() {
                for (var i in $scope.articles) {
                    if($scope.articles[i] === article) {
                        $scope.articles.splice(i, 1);
                    }
                }
            });
        } else {
            $scope.article.$remove(function() {
                $location.path('/');
            });
        }
    };
    $scope.personalDetails = [
      {
        'company':" ",
        'rank':" ",
        'name':' '
      }
    ];
    $scope.addNew = function(personalDetail){
      $scope.personalDetails.push({
        'company':" ",
        'rank':" ",
        'name':' ',
      });
    };

    $scope.remove = function(){
      var newDataList=[];
      $scope.selectedAll = false;
      angular.forEach($scope.personalDetails, function(selected){
        if(!selected.selected){
          newDataList.push(selected);
        }
      });
      $scope.personalDetails = newDataList;
    };
  
    $scope.checkAll = function() {
      if (!$scope.selectedAll) {
        $scope.selectedAll = true;
      } else {
        $scope.selectedAll = false;
      }
      angular.forEach($scope.personalDetails, function(personalDetail) {
        personalDetail.selected = $scope.selectedAll;
      });
    };
}]);
