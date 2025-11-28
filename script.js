let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let historyList = document.getElementById('historyList');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        const val = e.target.innerHTML;

        if(val === '='){
            try{
                let result = eval(string);
                historyList.innerHTML += `<li>${string} = ${result}</li>`;
                string = result;
                input.value = string;
            } catch(err){
                input.value = "Error";
                string = "";
            }
        }
        else if(val === 'AC'){
            string = "";
            input.value = "";
        }
        else if(val === 'DEL'){
            string = string.slice(0, -1);
            input.value = string;
        }
        else{
            string += val;
            input.value = string;
        }
    });
});

