const makeBigger = () => {
    content = document.querySelector(".content")
    h1 = document.querySelector("h1")
    contentCurrSize = parseFloat(window.getComputedStyle(content, null).getPropertyValue('font-size'));
    h1CurrSize = parseFloat(window.getComputedStyle(h1, null).getPropertyValue('font-size'));

    document.querySelector(".content").style.fontSize = (contentCurrSize + 2) + "px";
    document.querySelector("h1").style.fontSize = (h1CurrSize + 2) + "px";
};

const makeSmaller = () => {
    content = document.querySelector(".content")
    h1 = document.querySelector("h1")
    contentCurrSize = parseFloat(window.getComputedStyle(content, null).getPropertyValue('font-size'));
    h1CurrSize = parseFloat(window.getComputedStyle(h1, null).getPropertyValue('font-size'));

    document.querySelector(".content").style.fontSize = (contentCurrSize - 2) + "px";
    document.querySelector("h1").style.fontSize = (h1CurrSize - 2) + "px";
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

