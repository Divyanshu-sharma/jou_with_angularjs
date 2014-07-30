function TodoCtrl($scope) 
{
    
    $scope.fruits = [];
    
     if(localStorage.valu)
           {
               
               $scope.fruits=JSON.parse(localStorage.valu);
               $scope.fruit=$scope.fruits;
                                 
           }
    
    
    $scope.ok=function(a,b)
    {  
      
      
        $scope.ans=b+"";
        $scope.ans1=a+"";
     
        //alert(b[(q.indexOf(a))]);
      //alert($scope.fruits);
      //var w=b[e.indexOf(a)];
       //$scope.ans=w+"";
       //alert(a[0].indexOf());
    
    }
   
    $scope.rr=function(){

       if($scope.t1!=null && $scope.t2!=null)
       {
          $scope.fruits.push({name:$scope.t1,des:$scope.t2});
       }
      else
        { 
        alert("Please fill both entries..");
        }
          
   }
    
    $scope.arr=function()
    {
    localStorage.valu=JSON.stringify($scope.fruits);
    window.document.getElementById("ds").innerHTML="Press ok to exit";
    }
    $scope.refresh=function()
    {
        location.reload();
    }

    
    
   
}
    
    
     
