angular.module('write',[])
.controller('fill',function($scope){
        $scope.price={
            p1:999999,
            p2:248,
            p3:600,
            num1:1,
            num2:1,
            num3:1,
            bx:10,
            numCount:function(){
                this.num1++
            },
            numCount2:function(){
                this.num2++
            },
            numCount3:function(){
                this.num3++
            },
            numCut:function(){
                if (this.num1>1)this.num1--
            },
            numCut2:function(){
                if (this.num2>0)this.num2--
            },
            numCut3:function(){
                if (this.num3>0)this.num3--
            },
            sum:function(){
                return this.num1*this.p1+this.num2*this.p2+this.num3*this.p3+this.bx;
            }
        }
    })