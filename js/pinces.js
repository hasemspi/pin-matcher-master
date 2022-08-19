function getpin() {
    const pin = getgeneratepin();
    const pinString = pin + ''; // add empty string
    if (pinString.length === 4) { // total empty string length
        return pin;
    } else {
        // console.log('the get 4 digit pin', pin);
        return getpin();
    }
}

function getgeneratepin() {
    const getGeneare = Math.round(Math.random() * 10000);
    // console.log(getGeneare);
    return getGeneare;
}

document.getElementById('geGenereate').addEventListener('click', function () {
    const pins = getpin();
    const getValu = document.getElementById('getValue'); //select field
    const getShowValue = getValu.value = pins; //replace the field

    console.log(getShowValue);


})
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const getinput = document.getElementById('InputCal');
    const getCValue = getinput.value;
    if (isNaN(number)) {
        if (number == 'C') {
            getinput.value = '';
        } else if (number == '<') {
            const degi = getCValue.split('');
            degi.pop();
            const reminGit = degi.join('');
            getinput.value = reminGit;
        }

    } else {
        const getDatas = getCValue + number;
        getinput.value = getDatas;
    }





})