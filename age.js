var inputdob=document.getElementById('btn');
inputdob.addEventListener('click',agecalculate);
function agecalculate() {
    dob=document.getElementById('dob').value;
    day=new Date(dob);
    console.log(day);
    time=day.getTime();
    console.log(time);
    todaydate=new Date();
    console.log(todaydate);
    todaytime=todaydate.getTime();
    console.log(todaytime);
    substract=todaytime-time;
    console.log(substract);
    
    //
    sec=Math.floor(substract/1000);
    console.log(sec);
    min=Math.floor(substract/(1000*60));
    console.log(min);
    hr=Math.floor(substract/(1000*60*60));
    console.log(hr);
    days=Math.floor(substract/(1000*60*60*24));
    console.log(days);
    week=Math.floor(substract/(1000*60*60*24*7));
    console.log(week);
    month=Math.floor(substract/(1000*60*60*24*30.4375));
    year=Math.floor(substract/(1000*60*60*24*365.25));

    var insert=function(a,b) {
        document.getElementById(a).innerHTML=b; 
    }
    insert('year',year+"years");
    insert('month',month+"months");
    insert('week',week+"weeks");
    insert('days',days+"days");
    insert('hour',hr+"hours");
    insert('min',min+"minutes");
    insert('sec',sec+"seconds");

    setTimeout(agecalculate,1000);


    
}