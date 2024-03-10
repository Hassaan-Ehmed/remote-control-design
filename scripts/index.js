document.getElementById('head-button1').addEventListener('click',()=>{
    alert("Head Button Up");
})

document.getElementById('head-button2').addEventListener('click',()=>{
    alert("Head Button Down");
})

document.getElementById('leg-button1').addEventListener('click',()=>{
    alert("Leg Button Up");
})

document.getElementById('leg-button2').addEventListener('click',()=>{
    alert("Leg Button Down");
});

document.getElementById('full-button1').addEventListener('click',()=>{
    alert("Full Up");
})

document.getElementById('full-button2').addEventListener('click',()=>{
    alert("Full Down");
})

document.getElementById('leg-button1').addEventListener('click',()=>{
    alert("Leg Button Up");
})

document.getElementById('seat-button').addEventListener('click',()=>{
    alert("Seat");
});

document.getElementById('tbackward-button').addEventListener('click',()=>{
    alert("Backward Posture");
})

document.getElementById('tforward-button').addEventListener('click',()=>{
    alert("Forward Posture");
})

document.getElementById('tneck-button').addEventListener('click',()=>{
    alert("Neck Support");
})

document.getElementById('tflat-button').addEventListener('click',()=>{
    alert("Bed Flat");
});



// Toggle and thier Connects

document.getElementById('toggle-button').addEventListener('click',(event)=>{
    
  let isDisabledClassExsist =  document.getElementById('tbackward-button').classList.contains("connect-btn-disabled");


  let backwardPosture = document.getElementById("tbackward-button");
  let forwardPosture = document.getElementById("tforward-button");
  let neckPosture = document.getElementById("tneck-button");
  let flatPosture = document.getElementById("tflat-button");




  if(backwardPosture.hasAttribute("disabled")){

      backwardPosture.removeAttribute("disabled");
      forwardPosture.removeAttribute("disabled");
      neckPosture.removeAttribute("disabled");
        flatPosture.removeAttribute("disabled");
  }else{

      backwardPosture.setAttribute("disabled", "");
      forwardPosture.setAttribute("disabled", "");
      neckPosture.setAttribute("disabled", "");
    flatPosture.setAttribute("disabled", "");

  }


  if(isDisabledClassExsist){


    

    backwardPosture.classList.add('connect-btn-enabled');
    forwardPosture.classList.add('connect-btn-enabled');
    neckPosture.classList.add('connect-btn-enabled');
    flatPosture.classList.add('connect-btn-enabled');
    
    backwardPosture.classList.remove('connect-btn-disabled');
    forwardPosture.classList.remove('connect-btn-disabled');
    neckPosture.classList.remove('connect-btn-disabled');
    flatPosture.classList.remove('connect-btn-disabled');
    
}else{
    


    
    backwardPosture.classList.remove('connect-btn-enabled');
    forwardPosture.classList.remove('connect-btn-enabled');
    neckPosture.classList.remove('connect-btn-enabled');
    flatPosture.classList.remove('connect-btn-enabled');
    
    backwardPosture.classList.add('connect-btn-disabled');
    forwardPosture.classList.add('connect-btn-disabled');
    neckPosture.classList.add('connect-btn-disabled');
    flatPosture.classList.add('connect-btn-disabled');
  }


})
