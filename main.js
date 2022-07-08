const content = document.getElementById("content");


function getInfoText() {
    return "안녕하십니까. 저는 부산에 살고 있는 프론트엔드 개발자 지망생입니다."
}


function getGoalText() {
    return `제가 가진 목표는 두가지 입니다. <br>
    첫번째 목표는 프론트엔드 개발자가 되는 것이고, <br> 
    두번째 목표는 저희 나라 웹환경에 친화적인 웹프레임워크를 만드는 것입니다.`
}


function getInterestText() {
    return `제가 희망하는 분야는 프론트엔드입니다. <br>
    따라서 <b >React.js </b> 와 <b> Vue.js </b>에 관심을 가지고 있습니다.<br> `
}


function getExpectText() {
    return `저는 프론트엔드 개발자를 지망하고 있습니다.<br>
    프론트엔드 개발자는 프론트엔드 관련 기술만 아는 것뿐만 아니라<br>
    백엔드와 CS 와 같은 것들도 충분히 알아야만 합니다.<br>
    그래서 AI트랙에서 알려주는 Node.js와 Express.js, MongoDB가 가장 기대됩니다.<br>
    또한 이 과정에서 만나게 될 수많은 사람들과의 네트워크도 매우 기대됩니다.`
}


function getEndingText() {
    return `AI트랙에 여러분들과 함께할 수 있게되어서 너무 영광입니다.<br>
    앞으로 약 5개월동안 서로를 의지해서 전원 낙오없이 잘 수료하고 수료후 원하는 바와 꿈을 꼭 이루었으면 좋겠습니다.<br>
    감사합니다.`
}


document.addEventListener("click", (event) => {
    const className = event.target.id

    switch(className) {
        case "info":
            content.innerText = getInfoText();
            break;
        case "goal":
            content.innerHTML = getGoalText();
            break;
        case "interest":
            content.innerHTML = getInterestText();
            break;
        case "expect":
            content.innerHTML = getExpectText();
            break;
        case "ending":
            content.innerHTML = getEndingText();
            break;
    }
})
