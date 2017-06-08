/**
 * Created by LABORATORIA 0017le on 8/06/2017.
 */
'use strict';

$(function(){
    var screenVal= $("input:text");

    $("input:button").on("click",function(){

        var eachNumber=$(this).val();
        var currentScreen = screenVal.val();
        currentScreen+= eachNumber;
        screenVal.val(currentScreen);
        if($(this).val()==="C"){
            screenVal.val("");
        }
    });

    $("button").click(function(event){
        event.preventDefault();
        screenVal.val(eval(screenVal.val()));
    });
});
