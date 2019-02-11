var buttonS=document.getElementById('start');
var buttonE=document.getElementById('end');
var  divs=document.getElementsByClassName('mur');
var indicateur=document.getElementById('indication');


buttonS.onclick=function()
{                   
    indicateur.innerHTML="Trouver la sortie !";
    for(var i=0;i<divs.length;i++)
    {
        divs[i].style.backgroundColor='green';
    }
                 
    for(var i=0;i<divs.length;i++)
    {
        divs[i].onmouseover=function()
        {
            buttonE.onclick=function(){};
            indicateur.innerHTML="Désolé, vous avez perdu !";
            for(var i=0;i<divs.length;i++)
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
                for(var i=0;i<divs.length;i++)
                {
                    divs[i].style.backgroundColor='orange';
                }
                for(var i=0;i<divs.length;i++)
                {
                    divs[i].onmouseover=function(){};
                }
                 
            }                 
        }
    });
                 
}