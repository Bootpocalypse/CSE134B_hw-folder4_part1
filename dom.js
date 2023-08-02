/* dom.js */

function init() {
    let element = document.getElementById('walkBtn');
    element.addEventListener('click', function () {
        walk();
    });

    element = document.getElementById('walkBtnAd');
    element.addEventListener('click', function () {
        walkAd();
    });

    element = document.getElementById('modifyBtn');
    element.addEventListener('click', function () {
        modify();
    });

    element = document.getElementById('modifyBtnAd');
    element.addEventListener('click', function () {
        modifyAd();
    });

    element = document.getElementById('addBtn');
    element.addEventListener('click', function () {
        add();
    });

    element = document.getElementById('addBtnAd');
    element.addEventListener('click', function () {
        addAd();
    });

    element = document.getElementById('removeBtn');
    element.addEventListener('click', function () {
        remove();
    });
    element = document.getElementById('removeBtnSafe');
    element.addEventListener('click', function () {
        removeSafe();
    });
    element = document.getElementById('removeBtnSel');
    element.addEventListener('click', function () {
        removeSel();
    });
    element = document.getElementById('cloneBtn');
    element.addEventListener('click', function () {
        clone();
    });
    element = document.getElementById('cloneBtnAd');
    element.addEventListener('click', function () {
        cloneAd();
    });
}

function walk() {
   
    let el;
    let txt="";
   el = document.getElementById('p1');
   txt = txt + "Node type: " + el.nodeType +"\n" +  "Node name: " + el.nodeName + "\n" + "Node value: "+ el.nodeValue +"\n\r";
   //showNode(el);
   el = el.firstChild;
   txt = txt + "Node type: " + el.nodeType +"\n" +  "Node name: " + el.nodeName + "\n" + "Node value: "+ el.nodeValue +"\n\r";
   //showNode(el);

   el = el.nextSibling;
   txt = txt + "Node type: " + el.nodeType +"\n" +  "Node name: " + el.nodeName + "\n" + "Node value: "+ el.nodeValue +"\n\r";
   //showNode(el);

   el = el.lastChild;
   txt = txt + "Node type: " + el.nodeType +"\n" +  "Node name: " + el.nodeName + "\n" + "Node value: "+ el.nodeValue +"\n\r";
   //showNode(el);

   el = el.parentNode.parentNode.parentNode;
   txt = txt + "Node type: " + el.nodeType +"\n" +  "Node name: " + el.nodeName + "\n" + "Node value: "+ el.nodeValue +"\n\r";
   //showNode(el);

   el = el.querySelector('section > *');
   txt = txt + "Node type: " + el.nodeType +"\n" +  "Node name: " + el.nodeName + "\n" + "Node value: "+ el.nodeValue;
   //showNode(el);
   document.getElementById("Q1Textarea").value = txt;

}

function walkAd(){
    let rootIterator = document.createNodeIterator(document.documentElement);
    let txt= "";
    let level=0;
    let findparent;
    while(rootIterator.nextNode()) {
        findparent=rootIterator.referenceNode;
        if (findparent.nodeName=="#text" || findparent.nodeName=="#comment"){
        }
        else{
            while(findparent.nodeName!="HTML"){
                level=level+1;
                findparent=findparent.parentNode;
            }
            for (let i = 0; i < level; i++) {
                if (i == level-1){
                    txt=txt+ "|-- ";
                }
                else{
                    txt=txt+ "|   ";
                }
            }
            txt=txt+rootIterator.referenceNode.nodeName +"\n";
        }
        level=0;
    }
    document.getElementById("Q1Textarea").value = txt;
}
function showNode(el) {
    let nodeType = el.nodeType;
    let nodeName = el.nodeName;
    let nodeValue = el.nodeValue;

    alert(`Node type: ${nodeType}\nNode name: ${nodeName}\nNode value: ${nodeValue}`);
}


function modify() {
    let el = document.getElementById('p1');

    // You can do all the properties one by one if you know them in HTML
    el.title = 'I was changed by JS';

    // you can update the style as a string
    // el.style = 'color: blue; font-size: 1em;';

    // you also may prefer to update on the CSS object.  This is the same as above
    // el.style.color = 'blue';
    // el.style.fontSize = '1em';
    // be careful doing many styles bit by bit it isn't efficent, might be easier just to set a class

    // you can also update the class list
    el.classList.add('fancy');

    // you can also update the dataset which change data-* attributes
    el.dataset.cool = 'true';       // data-cool="true"
    el.dataset.coolFactor = '9000'; //data-cool-factor="9000"

}

function modifyAd() {
    let el = document.getElementById('p1');
    el.innerHTML = "DOM Manipulation is Fun!";
    let darkcolors = ['black', 'darkslategrey', 'darkgreen', 'darkgoldenrod', 'darkred', 'darkmagenta'];
    el.style.color = darkcolors[Math.floor(Math.random() * darkcolors.length)];
    if (el.classList.contains('shmancy')){
        el.classList.remove("shmancy");
    }
    else{
        el.classList.add('shmancy');
    }
}
function add() {

    let p, em, txt1, txt2, txt3;

    // first we do things the long old-fashioned standard DOM way
    p = document.createElement('p'); // <p></p>
    em = document.createElement('em'); // <em></em>
    txt1 = document.createTextNode('This is a '); // "This is a"
    txt2 = document.createTextNode('test'); // "test"
    txt3 = document.createTextNode(' of the DOM'); // " of the DOM"

    p.appendChild(txt1); // <p>This is a</p>
    em.appendChild(txt2); // <em>test</em>
    p.appendChild(em); // <p>This is a<em>test</em></p>
    p.appendChild(txt3); // <p>This is a<em>test</em> of the DOM</p>

    // go an insert this new copy below the old one
    let oldP = document.getElementById('p1');
    oldP.parentNode.insertBefore(p, oldP.nextSibling);

    // Alternative method using innerHTML and insertAdjacentHTML
    // let oldP = document.getElementById('p1');
    // oldP.insertAdjacentHTML('afterend', '<p>This is a<em>test</em> of the DOM</p>');
    // clearly short hands are pretty easy!
}

function addAd(){
    let NewNode, p, txt, txt2, empty, ElementNode;
    let NewDomSet = document.getElementById("newDom");
    let NewDomName=NewDomSet.options[NewDomSet.selectedIndex].text;
    txt = document.getElementById("Q3Textarea").value;
    txt2 = document.getElementById("Q3Textarea2").value;
    let dateObject= new Date();
    let CurrDate=dateObject.toLocaleString();
    let pInput = document.getElementById('p2');
    if (txt==""){
        txt="New "+ NewDomName+": "+CurrDate;
    }
    if (txt2==""){
        empty=true;
    }
    if(NewDomName=="Text Node"){
        NewNode=document.createTextNode(txt);
    }
    else if(NewDomName=="Comment"){
        NewNode=document.createComment(txt);
    }
    else if(NewDomName=="Element"){
        ElementNode=document.createTextNode(txt)
        if (empty==true){
            alert("You must imput something for Tag Name");
        }
        else{
            NewNode=document.createElement(txt2);
            NewNode.innerHTML=txt;
        }
    }
    else {
        NewNode=document.createTextNode("Error");
    }
    pInput.appendChild(NewNode);
}
    
function remove() {
  document.body.removeChild(document.body.lastChild);
}

function removeSafe() {
    while (document.body.lastChild.previousSibling!== null){
        if (document.body.lastChild.id == "controls"){
            document.body.removeChild(document.body.lastChild.previousSibling);
        }
        else{
            document.body.removeChild(document.body.lastChild);
        }
    }
    while (document.head.lastChild!== null){
        document.head.removeChild(document.head.lastChild);
    }
    document.documentElement.removeChild(document.head);
}

function removeSel() {
      let txt = document.getElementById("Q4Textarea").value;
      while (document.querySelector(txt) !== null){
        document.querySelector(txt).remove();
      }
}
function clone() {
    let p = document.getElementById("p1");
    let pInput = document.getElementById('p2');
    let pClone = p.cloneNode(true);
    pInput.appendChild(pClone);
}
function cloneAd(){
    let template12 = document.getElementById("template1").content;
    let templateClone = template12.cloneNode(true);
    let paragraph = templateClone.getElementById("number");
    let randnum= Math.random().toString();
    paragraph.textContent += randnum;
    let inputplacing = document.getElementById('controls');
    inputplacing.appendChild(templateClone);
}
window.addEventListener('DOMContentLoaded', init);