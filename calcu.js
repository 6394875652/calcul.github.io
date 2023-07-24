(function(){
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let clear=document.querySelector('.btn-clear');
    let eqaul=document.querySelector('.btn-equal');


    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value=e.target.dataset.num;
            screen.value+=value;

        })
    });

    eqaul.addEventListener('click',function(e){
        if(screen.value ===''){
            screen.value="Please enter";
        }else{
            let answer=eval(screen.value);
            screen.value=answer;
        }
    })
    clear.addEventListener('click',function(e){
        screen.value="";

    })



})();
function eqaul(){
    var equal=document.getElementById("input");
    equal.value=eval(equal.value)
}
