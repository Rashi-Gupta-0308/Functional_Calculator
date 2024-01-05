let btns = document.querySelectorAll("button");
let result = document.querySelector(".display");

for(let i=0; i<btns.length; i++)
{
    btns[i].addEventListener("click", () => {
        const btnval = btns[i].textContent;

        if(btnval === "C")
        {
            clearresult();
        }
        else if(btnval === "=")
        {
            calculate();
        }
        else
        {
            appendValue(btnval);
        }
    });
}

function clearresult() {
    result.value = "";
}

function calculate() {
    result.value = eval(result.value);
}

function appendValue(btnval) {
    result.value = result.value + btnval;
}