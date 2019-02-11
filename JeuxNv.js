let corps = document.getElementById('corps');
let buttonS=document.getElementById('start');
let buttonE=document.getElementById('end');
let  divs=document.getElementsByClassName('mur');
let indicateur=document.getElementById('indication');
let parag=document.getElementById('parag');
let codeHtml1='<input type="button" value="S" id="start" class="col-xs-1" ></input><span class="col-xs-6"></span>';
let codeHtml2='<a href="Jeux1.html" title="taper encore une fois"><input type="button" value="E" id="end" class="col-xs-1" ></input></a>';
buttonS.onclick=function()
{ 
    indicateur.innerHTML="Trouver la sortie !";
    for(let i=0;i<divs.length;i++)
    {
        divs[i].style.backgroundColor='green';
    }                
    for(let i=0;i<divs.length;i++)
    {
        divs[i].onmouseover=function()
        {
            buttonE.onclick=function(){};
            indicateur.innerHTML="Désolé, vous avez perdu !";
            for(let i=0;i<divs.length;i++)
            {
                divs[i].style.backgroundColor='red';
            }
        }
    }
    buttonS.addEventListener('mousemove', function(event) 
    {
        const x = event.offsetX; // Coordonnée X de la souris dans l'élément
        const y = event.offsetY; // Coordonnée Y de la souris dans l'élément
        if(x<0){
            buttonE.onclick=function(){};
        }else
        {
            buttonE.onclick=function()
            {   
                indicateur.innerHTML="Bravo, vous avez gagné !";
                for(let i=0;i<divs.length;i++)
                {
                    divs[i].style.backgroundColor='orange';
                }
                for(let i=0;i<divs.length;i++)
                {
                    divs[i].onmouseover=function(){};
                }
                parag.innerHTML=codeHtml1+codeHtml2;
                 
            }
        }
    });                              
}
