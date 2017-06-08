/**
 * Created by LABORATORIA 0017le on 8/06/2017.
 */
'use strict';

$(_=>{
    const screenVal= $("input:text");

    $("input:button").on("click",_=>{

        const eachNumber=$(this).val();
        let currentScreen = screenVal.val();
        currentScreen+= eachNumber;
        screenVal.val(currentScreen);
        if($(this).val()==="C"){
            screenVal.val("");
        }
    });

    $("button").click((event)=>{
        event.preventDefault();
        screenVal.val(eval(screenVal.val()));
    });
});
