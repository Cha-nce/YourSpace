app.controller("newsController", function ($scope, newsService) {
    
  // Array of articles stored in $scope.entertainment
  newsService.getEntertainment().then(function(response) {
    $scope.entertainment = response.data.articles;
  })

  $scope.articleCount = 1;
})