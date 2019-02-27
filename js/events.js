//define functions here

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
});

function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('form input').on('keydown', function(key){
    if(key.which === 71){
      alert("G key is pressed");
    }
  });
}

function submitIt() {
  $('fomr').on('submit', function(){
    alert("Your form is going to be submitted now.");
  });
}
