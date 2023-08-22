(function(){
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let eq = document.querySelector('.btn-equal');
    // let back = document.querySelector('.btn-back');


    buttons.forEach(function(button){
        button.addEventListener("click", function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    eq.addEventListener("click", (e) => {
        if (screen.value !== "") {  
            const letit = screen.value;                
            let answer = eval(letit)          
            screen.value = " ";                                  
            screen.value += answer;                   
        }
    })

    clear.addEventListener('click', function(e){
        screen.value = ""; 
    })

})(); 

