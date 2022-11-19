window.addEventListener('load', function (event){
    const firstContainer =  document.getElementById('first');
    firstContainer.animate([
        
           
     //{ transform: 'translateX(-300px)' },
      {opacity: '0'},{opacity:1}
        
    ], {
       duration: 1000
    }
    );
    
    });


for(let i=0; i<6;i++){
const cont = document.querySelectorAll('.content1')[i];

window.addEventListener('scroll', (e)=>{
cont.animate([
    {opacity: '0'},{opacity:1}

], {
    duration: 1000
});
});


}

const slider=document.querySelector('#slider-container');
//slider.scroll(1000, function(e){
    //animate([
        //       {opacity: '0'},{opacity:1}
            
         //  ], {
           //    duration: 1000
          // });
//});

    window.addEventListener('scroll', (e)=>{
       slider.animate([
           {opacity: '0'},{opacity:1}
        
       ], {
            duration: 1000
       });
       });




//const content1= document.querySelectorAll('.content1')[0];
//const content2=document.querySelectorAll('.content1')[1]


//window.addEventListener('scroll', (event)=>{
//content1.animate([
  //  {opacity: '0'},{opacity:1}

//], {
  //  duration: 1000
//});
//});

//window.addEventListener('scroll', (e)=>{
//content2.animate([
   // {opacity: '0'},{opacity:1}

//], {
    //duration: 1000
//});
//})