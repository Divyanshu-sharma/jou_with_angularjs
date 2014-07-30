
function TodoCtrl($scope)
{
        
    $scope.add=function()
    {
        $scope.greeting=parseInt($scope.t1)+parseInt($scope.t2);
    }
    $scope.subs=function()
    {
        $scope.greeting=parseInt($scope.t1)-parseInt($scope.t2);
    }

    $scope.mul=function()
    {
        $scope.greeting=parseInt($scope.t1)*parseInt($scope.t2);
    }

    $scope.div=function()
    {
        $scope.greeting=parseInt($scope.t1)/parseInt($scope.t2);
    }
    $scope.clear=function()
    {
        $scope.t1="";
         $scope.t2="";
        $scope.greeting="";
    }


}
