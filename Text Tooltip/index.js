const svgs = `
<button class="btn" onclick="addInput()">
  <div class="tooltip__icon icon1">
  
    <svg class="tooltip__icon__svg">
      <path d="M19.074 21.117c-1.244 0-2.432-.37-3.532-1.096a7.792 7.792 0 0 1-.703-.52c-.77.21-1.57.32-2.38.32-4.67 0-8.46-3.5-8.46-7.8C4 7.7 7.79 4.2 12.46 4.2c4.662 0 8.457 3.5 8.457 7.803 0 2.058-.85 3.984-2.403 5.448.023.17.06.35.118.55.192.69.537 1.38 1.026 2.04.15.21.172.48.058.7a.686.686 0 0 1-.613.38h-.03z" fill-rule="evenodd"></path>
    </svg>
  </div>
  </button>
  <div class="tooltip__icon icon2">
  <button class="btn">
  <svg class="tooltip__icon__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve">
  <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M0,0v455h455V0H0z M352.751,163.259c0.123,2.773,0.186,5.561,0.186,8.36  c0,85.403-65.002,183.876-183.873,183.876c-36.496,0-70.466-10.697-99.065-29.037c5.056,0.601,10.199,0.907,15.417,0.907  c30.278,0,58.143-10.331,80.262-27.668c-28.28-0.519-52.148-19.204-60.373-44.88c3.948,0.757,7.997,1.163,12.161,1.163  c5.894,0,11.604-0.794,17.027-2.268c-29.563-5.939-51.841-32.057-51.841-63.368c0-0.273,0-0.544,0.006-0.814  c8.712,4.84,18.676,7.748,29.271,8.084c-17.342-11.589-28.748-31.371-28.748-53.79c0-11.845,3.187-22.945,8.751-32.492  c31.873,39.101,79.493,64.828,133.203,67.526c-1.103-4.732-1.677-9.665-1.677-14.729c0-35.688,28.938-64.623,64.626-64.623  c18.589,0,35.385,7.847,47.173,20.406c14.719-2.895,28.551-8.276,41.038-15.681c-4.824,15.092-15.071,27.754-28.415,35.754  c13.074-1.563,25.528-5.038,37.118-10.178C376.336,142.766,365.38,154.149,352.751,163.259z"/>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  <g>
  </g>
  </svg>
  </button>
  </div>
  <button class="btn" id="buttonId" onclick="highlightText()">
  <div class="tooltip__icon icon3">

  <svg class="tooltip__icon__svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 29.94 29.94" style="enable-background:new 0 0 29.94 29.94;" xml:space="preserve">
<g>
	<path d="M27.56,0.684H2.383C1.065,0.684,0,1.748,0,3.064v23.813c0,1.312,1.065,2.379,2.383,2.379H27.56   c1.312,0,2.38-1.066,2.38-2.379V3.064C29.939,1.748,28.871,0.684,27.56,0.684z M20.125,9.167c-0.619-0.362-1.11-0.648-1.727-0.648   c-0.604,0-1.12,0.151-1.384,0.405c-0.264,0.252-0.395,0.74-0.395,1.461v1.067h3.229l-0.699,2.968h-2.53v9.862h-4.056V14.42H10.67   v-2.968h1.895v-1.133c0-1.193,0.143-1.907,0.425-2.496c0.281-0.587,0.826-1.241,1.584-1.611c0.757-0.369,1.877-0.555,3.036-0.555   c1.188,0,2.116,0.396,3.254,0.715L20.125,9.167z"/>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
	<g>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>

  </div>
  </button>
  <div class="tooltip__divider"></div>
  <div class="tooltip__icon icon4">
  <button class="btn">
  <svg class="tooltip__icon__svg" xmlns="http://www.w3.org/2000/svg" width="26px" height="26px" viewBox="0 0 512 512"><path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"/></svg>
  </button></div>
`;

const toolTip = document.createElement("div");
toolTip.classList.add("tooltip");
toolTip.innerHTML = svgs;

const toolTipTail = document.createElement("div");
toolTipTail.classList.add("tooltip__tail");

const articleElement = document.getElementsByClassName("article")[0];

const commentDiv = document.createElement("div");
commentDiv.classList.add("comment");
let addComment = document.createElement("textarea");
addComment.setAttribute("id", "text");
addComment.classList.add("text");
let count = 0;

function removeText() {

    let text = document.getElementById("text");
    let close = document.getElementById("close");
    close.style.opacity = 0;
    text.style.opacity = 0;


    count++;

}

function highlightText() {
    if (inputId.selectionStart == inputId.selectionEnd) {
        return; // nothing is selected
    }
    let selected = inputId.value.slice(inputId.selectionStart, inputId.selectionEnd);
    inputId.setRangeText(`/*${selected}*/`);
};


function addInput() {
    /*    if (count > 0) {
           let text = document.getElementById("text");
           text.style.opacity = 0;
           text.style.zIndex = -10;
   
   
           let addComment = document.createElement("input");
   
           addComment.type = "text";
           addComment.classList.add("comment");
           count = 0;
           return
       } */
    if (count === 0) {
        let addComment = document.createElement("textarea");
        addComment.setAttribute("id", "text");
        addComment.classList.add("text");
        document.body.appendChild(addComment);
    }
    let inner = document.getElementById("text");
    inner.innerHTML += ("");
    text.style.opacity = 1;
    let close = document.getElementById("close");
    close.style.opacity = 1;

    count++;
}
/* function toolTipHighlight() {
    if ()
} */
function removeTooltip() {
    if (document.body.contains(toolTip)) {
        toolTip.style.top = null;
        toolTip.style.left = null;
        toolTipTail.style.top = null;
        toolTipTail.style.left = null;
        document.body.removeChild(toolTip);
        document.body.removeChild(toolTipTail);
    }
}

let selectionQueued = false;

function displayTooltip() {
    const selection = document.getSelection();
    const anchorNode = selection.anchorNode;
    const focusNode = selection.focusNode;


    document.body.appendChild(toolTip);
    document.body.appendChild(toolTipTail);

    const toolTipWidth = toolTip.offsetWidth;
    const toolTipHeight = toolTip.offsetHeight;
    const toolTipTailWidth = toolTipTail.offsetWidth;
    const toolTipTailHeight = toolTipTail.offsetHeight;

    const rangeRects = selection.getRangeAt(0).getClientRects();

    const parentElement = selection.anchorNode.parentElement;
    const y = rangeRects[0].y;
    const x = rangeRects.length > 1 ?
        parentElement.offsetLeft + parentElement.offsetWidth / 2 :
        rangeRects[0].x + rangeRects[0].width / 2;

    toolTip.style.top = `${y - toolTipHeight - toolTipTailHeight / 2}px`;
    toolTip.style.left = `${x - toolTipWidth / 2}px`;

    toolTipTail.style.top = `${y - toolTipTailHeight / 2}px`;
    toolTipTail.style.left = `${x - toolTipTailWidth / 2}px`;

}

document.onmouseup = () => {
    if (selectionQueued) {
        displayTooltip();
    } else {
        setTimeout(function () {
            removeTooltip();
        }, 2000);

    }
    selectionQueued = false;
}

document.addEventListener("selectionchange", function (event) {
    const selection = document.getSelection();
    if (selection.type !== "Range") {
        selectionQueued = false;
        return;
    }

    if (selection.anchorNode != selection.focusNode) {
        // Cross-paragraph selection
        selectionQueued = false;
        return;
    }

    selectionQueued = true;
});