//define functions here

$(document).ready(function(){

// call functions here
  getIt();
  frameIt();
  pressIt();
  submitIt();
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
    alert("your form is going to be submitted now.");
  });
}
