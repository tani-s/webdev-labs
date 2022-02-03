/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/


const toggleDys = () => {
    if (document.querySelector(".content").className == "content dyslexia-mode") {
        document.querySelector("h1").className = "";
        document.querySelector(".content").className = "content";
    }
    else {
        document.querySelector(".content").className = "content dyslexia-mode";
        document.querySelector("h1").className = "dyslexia-mode";
    }
};


document.querySelector("#dyslexia-toggle").addEventListener('click', toggleDys);