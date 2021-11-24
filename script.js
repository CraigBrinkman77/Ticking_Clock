function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    var hours = Math.floor(time/3600);
    var minutes = Math.floor((time%3600)/60);
    var seconds = (time % 3600) % 60;
    
    
    

}, 1000);

