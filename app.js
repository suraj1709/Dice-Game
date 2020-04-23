var score,activeplayer,dice,gameplayed
score=[0,0];
activeplayer=0;
roundscore=0;
initail();

function initail()
{
gameplayed=true;
score=[0,0];
activeplayer=0;
roundscore=0;
document.querySelector('.dice').style.display='none';
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');


}




document.querySelector('.btn-roll').addEventListener('click',function()
{       
  if(gameplayed)
  {

    dice=Math.floor((Math.random()*6)+1);
    var diceDom=document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-'+dice+'.png';
    if(dice!==1)
    {
     roundscore += dice;
     
     document.querySelector('#current-'+activeplayer).textContent=roundscore;
    
     
    }
    else
    {
      nextplayer();
    }
  }

    
});

document.querySelector('.btn-hold').addEventListener('click',function(){
      if(gameplayed)
      {
        score[activeplayer]+=roundscore;
   
        document.getElementById('score-'+activeplayer).textContent=score[activeplayer];
        
        if(score[activeplayer]>=10)
        {
            document.querySelector('#name-'+activeplayer).textContent='Winner !!';
            gameplayed=false;
            document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
            document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
            
    
        }
        else
        {
            nextplayer();
        }

      }  
  
    

    });

    function nextplayer()
    {
    activeplayer===0?activeplayer=1:activeplayer=0;
    roundscore=0;
     document.getElementById('current-0').textContent=0;
     document.getElementById('current-1').textContent=0;
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
     document.querySelector('.dice').style.display='none';
    }
    document.querySelector('.btn-new').addEventListener('click',function()
    {
        initail();
    })





