
let dt=new Date(new Date().setTime(0));
let time =0;
let sec=Math.floor((time%(100*60))/1000);
let min=Math.floor((time%(1000*60*60))/(1000*60));

setInterval(function()
{
   if(sec<59)
    {
        sec++;
    }
    else{
        min++;
        sec=0;
    }
    let new_sec=sec<10? `0${sec}`: `${sec}`;
    let new_min=min<10? `0${min}`: `${min}`;
    document.querySelector(".time").innerHTML = `${new_min} : ${new_sec}`;
},1000)

// 1 min= 1000 mini second
