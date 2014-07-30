function TodoCtrl($scope) 
{
    
    $scope.fruits = [];
    
     if(localStorage.valu)
           {
               
               $scope.fruits=JSON.parse(localStorage.valu);
               $scope.fruit=$scope.fruits;
                                   
           }
    
    $scope.ok=function (a,b)
    {  
        
        if(a.indexOf()==b.indexOf())
        {
            $scope.ans = b+"";
        }
    };
   
    $scope.r=function(){
       
       if($scope.t1!=null && $scope.t2!=null)
       {
           
           $scope.fruits.push({name:$scope.t1,des:$scope.t2});
           
       }
      else
        { 
        alert("Please fill both entries..");
        }
          
   };
    
    $scope.arr=function()
    {
    localStorage.valu=JSON.stringify($scope.fruits);
    
    };
    
    
}
     
