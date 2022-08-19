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
    // console.log(getShowValue);
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

document.getElementById('verfiy').addEventListener('click', function () {
    const getRendom = document.getElementById('getValue');
    const finalGetReandomValu = getRendom.value;
    //console.log(finalGetReandomValu);
    const getCheckingValue = document.getElementById('InputCal');
    const getChecking = getCheckingValue.value;
    //console.log(getChecking);
    //checking code sms
    const getverfiysms = document.getElementById('verfiymas');
    const getNotverfiysms = document.getElementById('notferfiymas');

    if (finalGetReandomValu === getChecking) {

        getverfiysms.style.display = 'block';
        getNotverfiysms.style.display = 'none';
    } else {
        getNotverfiysms.style.display = 'block';
        getverfiysms.style.display = 'none';
    }


})