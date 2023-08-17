const getvalue1 = document.querySelector(".value1");
const getvalue2 = document.querySelector(".value2");
const getvalue3 = document.querySelector(".value3");
const getvalue4 = document.querySelector(".value4");

const counterNum = (number, position) => {
    let i = 0;
    const interval = setInterval( () => {
        position.innerHTML = i + "k+";
        i++;
        if(i > number){
            clearInterval(interval);
        }
    }, 10);
}

counterNum(688, getvalue1);
counterNum(564, getvalue2);
counterNum(968, getvalue3);
counterNum(759, getvalue4);