$(document).ready(function(){
    console.log("We are ready");
  $("#formLogin").submit(function(event){
      alert("Hey");
      event.preventDefault();
      printValues()
  })
  function printValues()
  {
      console.log($("#exampleInputEmail1").val());
      console.log($("#exampleInputPassword1").val());
      console.log($("#exampleInputURL").val());
  }
})
