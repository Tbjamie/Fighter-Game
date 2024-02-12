// ALLE VARS

var game = document.querySelector('#game')
var heading = document.querySelector('#game h1')
var enemyHealth = document.querySelector('#enemyhealth').value
var ownHealth = document.querySelector('#health').value
var buttonOne = document.querySelector('.attack1')
var buttonTwo = document.querySelector('.attack2')
var buttonThree = document.querySelector('.attack3')
var buttonFour = document.querySelector('.attack4')
var storeButton = document.querySelector('.storebutton')
var nextLevelButton = document.querySelector('.nextlevelbutton')
var playerOne = document.querySelector('#game main section:first-of-type img')
var enemyPlayer = document.querySelector('#game main section:nth-of-type(2) img')
var timer = document.querySelector('#timer')
var chargeBar = document.querySelector('#chargebar').value
var enemyChargebar = document.querySelector('#enemychargebar').value
var damageMultiplierArray = [2, 3, 4, 5, 8]
var nextLevelSection = document.querySelector('#game section:nth-of-type(3)')
var levelOne = document.querySelector('#level1')
var attackButtonUl = document.querySelector('.attackbuttonlist')
var loseAudio = new Audio('soundFX/braam-classic.mp3')
var winAudio = new Audio('soundFX/youwin.mp3')
var punchAudio = new Audio('soundFX/punch-41105.mp3')
var strongPunchAudio = new Audio('soundFX/strongpunch.mp3')
var superPunchAudio = new Audio('soundFX/super_attack_audio.mp3')
var youFinishedTheGameAudio = new Audio('soundFX/endmusic.mp3')
var levelChecker = "levelOne"
var trophy = document.querySelector('.trophy')
var gameHeader = document.querySelector('#game header')

// STORE VAR

var purchaseButton = document.querySelector('.purchasebutton')
var storeSection = document.querySelector('.storesection')
var backgroundFilter = document.querySelector('.backgroundfilter')
var closeStoreButton = document.querySelector('.closestore')
var narutoPurchaseButon = document.querySelector('#game .storesection .buttondiv .purchasebutton:first-of-type')
var kanekiPurchaseButon = document.querySelector('#game .purchasebutton:nth-of-type(2)')
var kanekiPurchaseButonCheck = document.querySelector('#game .purchasebutton:nth-of-type(2) img:last-of-type')
var kanekiPurchaseButonPrice = document.querySelector('#game .purchasebutton:nth-of-type(2) span')
var currentMoney = document.querySelector('#game .storesection .topstorediv p')
var winMoney = 0;
var narutoStoreCard = document.querySelector('#game .storesection article div:first-of-type')
var kanekiStoreCard = document.querySelector('#game .storesection article div:nth-of-type(2)')
var storeBuyAudio = new Audio('soundFX/storebuysound.wav')
var purchaseChecker = false
var characterChecker = 'naruto'

// STORE VAR


// ALLE VARS


buttonFour.disabled = true;
buttonThree.disabled = true;


// TIMER

var sec         = 59,
    countDiv    = document.getElementById("timer"),
    secpass,
    countDown   = setInterval(function() {  
        secpass();
    }, 1000);

function secpass() {
    
    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
    
    if (remSec < 10) {
        
        remSec = '0' + remSec;
    
    }
    countDiv.innerHTML = min + ":" + remSec;
    
    if (sec > 0) {
        
        sec = sec - 1;
    }

    if((timer.textContent <= '0:00') && (enemyHealth > 0)) {
        heading.textContent = 'YOU LOSE';
        heading.style.display = 'block';
        console.log('You lose')
        buttonOne.style.display = 'none';
        buttonTwo.style.display = 'none';
        buttonThree.style.display = 'none';
        buttonFour.style.display = 'none';
        storeButton.style.display = 'block';
        storeButton.style.cursor = 'pointer';
        nextLevelButton.style.display = 'block';
        nextLevelButton.textContent = 'Try Again';
        nextLevelButton.cursor = 'pointer';
        loseAudio.play();
        sec = sec + 0;
        nextLevelButton.addEventListener('click', levelReset)
        storeButton.addEventListener('click', openStore)
        nextLevelSection.style.zIndex = '2';
    }
}

// TIMER


// ATTACK FUNCTIONS

function attack1(){
    enemyHealth = document.getElementById('enemyhealth').value -= 5;
    chargeBar = document.getElementById('chargebar').value += 7.5;
    attackAnimation();
    setTimeout(removeAttackAnimation, 500);
    setTimeout(enemyAttackAnimation, 1500)
    setTimeout(removeEnemyAttackAnimation, 2500);
    if(levelChecker == "levelOne"){
        checkChargebar();
    } else if(levelChecker == "levelTwo") {
        checkChargebarLevelTwo();
    } else if(levelChecker == "levelThree") {
        checkChargebarLevelThree();
    }
    punch();
    setTimeout(enemyDamage, 1500);
    if(levelChecker == "levelOne"){
        setTimeout(checkOwnHealth, 1500);
    } else if(levelChecker == "levelTwo"){
        setTimeout(checkOwnHealthLevelTwo, 1500);
    } else if(levelChecker == "levelThree") {
        setTimeout(checkOwnHealthLevelThree, 1500);
    }
    if(levelChecker == "levelOne"){
        checkHealth();
    } else if(levelChecker == "levelTwo"){
        checkHealthLevelTwo();
    } else if(levelChecker == "levelThree"){
        checkHealthLevelThree();
    }
    hideButtons();
    setTimeout(showButtons, 2500)
}

buttonOne.addEventListener('click', attack1);

buttonTwo.addEventListener('click', attack1);

// function playerAttack(playerDamage, playerChargeBar){
//     enemyHealth = document.getElementById('enemyhealth').value -= playerDamage;
//     chargeBar = document.getElementById('chargebar').value += playerChargeBar;
//     console.log(enemyHealth);
//     attackAnimation();
//     setTimeout(removeAttackAnimation, 500);
//     setTimeout(enemyAttackAnimation, 1500);
//     setTimeout(removeEnemyAttackAnimation, 2500);
//     checkChargebar();
//     punch();
//     setTimeout(enemyDamage, 1500);
//     setTimeout(checkOwnHealth, 1500);
//     checkHealth();
//     hideButtons();
//     setTimeout(showButtons, 2500)
// }

// buttonOne.addEventListener('click', function(){
//     playerAttack(5, 7.5);
// });

// buttonTwo.addEventListener('click', function(){
//     playerAttack(5, 7.5);
// });

// buttonThree.addEventListener('click', function(){
//     playerAttack(25, -25);
// });

// buttonFour.addEventListener('click', function(){
//     playerAttack(50, -50);
// });


function attack3(){
    enemyHealth = document.getElementById('enemyhealth').value -= 25;
    chargeBar = document.getElementById('chargebar').value -= 25;
    attackAnimation();
    setTimeout(removeAttackAnimation, 500);
    setTimeout(enemyAttackAnimation, 1500);
    setTimeout(removeEnemyAttackAnimation, 2500);
    if(levelChecker == "levelOne"){
        checkChargebar();
    } else if(levelChecker == "levelTwo") {
        checkChargebarLevelTwo();
    } else if(levelChecker == "levelThree") {
        checkChargebarLevelThree();
    }
    strongPunch();
    setTimeout(strongEnemyDamage, 1500);
    if(levelChecker == "levelOne"){
        setTimeout(checkOwnHealth, 1500);
    } else if(levelChecker == "levelTwo"){
        setTimeout(checkOwnHealthLevelTwo, 1500);
    } else if(levelChecker == "levelThree") {
        setTimeout(checkOwnHealthLevelThree, 1500);
    }
    if(levelChecker == "levelOne"){
        checkHealth();
    } else if(levelChecker == "levelTwo"){
        checkHealthLevelTwo();
    } else if(levelChecker == "levelThree"){
        checkHealthLevelThree();
    }
    hideButtons();
    setTimeout(showButtons, 2500)
    hideButtons();
    setTimeout(showButtons, 2500)
}

buttonThree.addEventListener('click', attack3);

function attack4(){
    enemyHealth = document.getElementById('enemyhealth').value -= 50;
    chargeBar = document.getElementById('chargebar').value -= 50;
    attackAnimation();
    setTimeout(removeAttackAnimation, 500);
    setTimeout(enemyAttackAnimation, 1500)
    setTimeout(removeEnemyAttackAnimation, 2500);
    if(levelChecker == "levelOne"){
        checkChargebar();
    } else if(levelChecker == "levelTwo") {
        checkChargebarLevelTwo();
    } else if(levelChecker == "levelThree") {
        checkChargebarLevelThree();
    }
    setTimeout(superEnemyDamage, 1500);
    if(levelChecker == "levelOne"){
        setTimeout(checkOwnHealth, 1500);
    } else if(levelChecker == "levelTwo"){
        setTimeout(checkOwnHealthLevelTwo, 1500);
    } else if(levelChecker == "levelThree") {
        setTimeout(checkOwnHealthLevelThree, 1500);
    }
    if(levelChecker == "levelOne"){
        checkHealth();
    } else if(levelChecker == "levelTwo"){
        checkHealthLevelTwo();
    } else if(levelChecker == "levelThree"){
        checkHealthLevelThree();
    }
    hideButtons();
    setTimeout(showButtons, 2500)
    superPunch();
    hideButtons();
    setTimeout(showButtons, 2500)
}

buttonFour.addEventListener('click', attack4)

// ATTACK FUNCTIONS


// STATE CHECKERS

function checkHealth() {
    if((enemyHealth <= 0) && (ownHealth > 0)) {
        heading.textContent = 'YOU WIN';
        heading.style.display = 'block';
        console.log('You win')
        buttonOne.style.display = 'none';
        buttonTwo.style.display = 'none';
        buttonThree.style.display = 'none';
        buttonFour.style.display = 'none';
        storeButton.style.display = 'block';
        storeButton.style.cursor = 'pointer';
        nextLevelButton.style.display = 'block';
        nextLevelButton.style.cursor = 'pointer';
        setTimeout(youWinAudio, 500)
        nextLevelSection.style.zIndex = '2';
        nextLevelButton.addEventListener('click', levelTwo)
        storeButton.addEventListener('click', openStore)
        currentMoney.textContent = winMoney = winMoney + 150
    } else {
        heading.textContent = '';
    }
}

function checkOwnHealth() {
    if((ownHealth <= 0) && (enemyHealth >= 0)) {
        heading.textContent = 'YOU LOSE';
        heading.style.display = 'block';
        console.log('You lose')
        buttonOne.style.display = 'none';
        buttonTwo.style.display = 'none';
        buttonThree.style.display = 'none';
        buttonFour.style.display = 'none';
        storeButton.style.display = 'block';
        storeButton.style.cursor = 'pointer';
        nextLevelButton.style.display = 'block';
        nextLevelButton.textContent = 'Try Again';
        nextLevelButton.style.cursor = 'pointer';
        loseAudio.play();
        nextLevelButton.addEventListener('click', levelReset)
        storeButton.addEventListener('click', openStore)
        nextLevelSection.style.zIndex = '2';
    }
}

function checkChargebar() {
    if((chargeBar >= 0) && (chargeBar <= 24)) {
        buttonThree.disabled = true;
        buttonFour.disabled = true;
        buttonThree.style.cursor = 'auto'
        buttonFour.style.cursor = 'auto'
    } else if((chargeBar >= 25) && (chargeBar <=49)) {
        buttonThree.style.cursor = 'pointer'
        buttonFour.style.cursor = 'auto'
        buttonThree.disabled = false;
        buttonFour.disabled = true;
    } else if(chargeBar >= 50) {
        buttonThree.style.cursor = 'pointer'
        buttonThree.disabled = false;
        buttonFour.style.cursor = 'pointer'
        buttonFour.disabled = false;
    }
}

// STATE CHECKERS


// ENEMY DAMAGE FUNCTIONS

function enemyDamage() {
    if((enemyHealth <= 0) && (ownHealth > 0)) {
        return;
    }
    ownHealth = document.getElementById('health').value -= 5 * mathRandom();
    enemyChargebar = document.getElementById('enemychargebar').value += 7.5;
    punch();
}

function strongEnemyDamage() {
    if((enemyHealth <= 0) && (ownHealth > 0)) {
        return;
    }
    ownHealth = document.getElementById('health').value -= 25 * mathRandom();
    enemyChargebar = document.getElementById('enemychargebar').value -= 25;
    punch();
}

function superEnemyDamage() {
    if((enemyHealth <= 0) && (ownHealth > 0)) {
        return;
    }
    ownHealth = document.getElementById('health').value -= 50 * mathRandom();
    enemyChargebar = document.getElementById('enemychargebar').value -= 50;
    strongPunch();
}

// ENEMY DAMAGE FUNCTIONS


// MATH RANDOM

function mathRandom() {
    if(levelChecker == "levelOne") {
        return Math.random()*damageMultiplierArray[0];
    } else if(levelChecker == "levelTwo") {
        return Math.random()*damageMultiplierArray[1];
    } else if(levelChecker == "levelThree") {
        return Math.random()*damageMultiplierArray[3];
    }
}

// MATH RANDOM


// AUDIO

function punch() {
    punchAudio.play();
}

function strongPunch() {
    strongPunchAudio.play();
}

function superPunch() {
    superPunchAudio.play();
}

function youWinAudio() {
    winAudio.play();
}

function gameFinishedAudio() {
    youFinishedTheGameAudio.play();
}

// AUDIO


// ANIMATIE FUNCTIONS

function attackAnimation() {
    playerOne.classList.add('attackanimation');  
    enemyPlayer.classList.add('damageanimation');
}

function removeAttackAnimation() {
    playerOne.classList.remove('attackanimation');  
    enemyPlayer.classList.remove('damageanimation');
}

function enemyAttackAnimation() {
    if((enemyHealth <= 0) && (ownHealth > 0)) {
        return;
    }
    playerOne.classList.add('owndamageanimation');
    enemyPlayer.classList.add('enemyattackanimation');
}

function removeEnemyAttackAnimation() {
    playerOne.classList.remove('owndamageanimation');
    enemyPlayer.classList.remove('enemyattackanimation');
}

function hideButtons() {
    attackButtonUl.style.display = 'none';
}

function showButtons() {
    attackButtonUl.style.display = 'block';
}

// ANIMATIE FUNCTIONS


// LEVEL 2

function levelReset() {
    location.reload();
}

function levelTwo() {
    ownHealth = document.getElementById('health').value += 100;
    enemyHealth = document.getElementById("enemyhealth").value += 100;
    chargeBar = document.getElementById('chargebar').value -= chargeBar;
    enemyChargebar = document.getElementById('enemychargebar').value = 0;
    heading.style.display = 'none';
    nextLevelSection.style.display = 'none';
    document.body.style.backgroundImage = "url(images/map1.png)";
    enemyPlayer.src = "images/akaza.png";
    enemyPlayer.style.width = "15vw";
    enemyPlayer.style.bottom = "3em";
    timer.textContent = '1:00';
    sec = 59;
    buttonOne.style.display = 'inline-block';
    buttonTwo.style.display = 'inline-block';
    buttonThree.style.display = 'inline-block';
    buttonFour.style.display = 'inline-block';
    buttonOne.style.backgroundColor = '#EB7404';
    buttonTwo.style.backgroundColor = '#EB7404';
    levelChecker = "levelTwo";
    buttonFour.disabled = true;
    buttonThree.disabled = true;
}

// STATE CHECKERS

function checkChargebarLevelTwo() {
    if((chargeBar >= 0) && (chargeBar <= 24)) {
        buttonThree.disabled = true;
        buttonFour.disabled = true;
        buttonThree.style.cursor = 'auto'
        buttonFour.style.cursor = 'auto'
        buttonThree.style.background = 'lightslategray';
        buttonFour.style.background = 'lightslategray';
    } else if((chargeBar >= 25) && (chargeBar <=49)) {
        buttonThree.style.cursor = 'pointer'
        buttonFour.style.cursor = 'auto'
        buttonThree.disabled = false;
        buttonThree.style.background = '#EB7404';
        buttonFour.style.background = 'lightslategray';
        buttonFour.disabled = true;
    } else if(chargeBar >= 50) {
        buttonThree.style.cursor = 'pointer'
        buttonThree.disabled = false;
        buttonThree.style.background = '#EB7404';
        buttonFour.style.cursor = 'pointer'
        buttonFour.disabled = false;
        buttonFour.style.background = '#EB7404';
    }
}

function checkHealthLevelTwo() {
    if((enemyHealth <= 0) && (ownHealth > 0)) {
        heading.textContent = 'YOU WIN';
        heading.style.display = 'block';
        console.log('You win')
        buttonOne.style.display = 'none';
        buttonTwo.style.display = 'none';
        buttonThree.style.display = 'none';
        buttonFour.style.display = 'none';
        storeButton.style.display = 'inline-block';
        storeButton.style.cursor = 'pointer';
        storeButton.style.background = '#EB7404'
        nextLevelButton.style.display = 'inline-block';
        nextLevelButton.style.cursor = 'pointer';
        nextLevelButton.style.background = '#EB7404'
        nextLevelSection.style.display = 'flex';
        nextLevelButton.textContent = 'Next Level';
        setTimeout(youWinAudio, 500)
        nextLevelSection.style.zIndex = '2';
        nextLevelButton.addEventListener('click', levelThree)
        storeButton.addEventListener('click', openStore)
        currentMoney.textContent = winMoney = winMoney + 150
    } else {
        heading.textContent = '';
    }
}

function checkOwnHealthLevelTwo() {
    if((ownHealth <= 0) && (enemyHealth >= 0)) {
        heading.textContent = 'YOU LOSE';
        heading.style.display = 'block';
        console.log('You lose')
        buttonOne.style.display = 'none';
        buttonTwo.style.display = 'none';
        buttonThree.style.display = 'none';
        buttonFour.style.display = 'none';
        storeButton.style.display = 'inline-block';
        storeButton.style.cursor = 'pointer';
        storeButton.style.background = '#EB7404'
        nextLevelButton.style.display = 'inline-block';
        nextLevelButton.textContent = 'Try Again';
        nextLevelButton.style.cursor = 'pointer';
        nextLevelButton.style.background = '#EB7404';
        nextLevelSection.style.display = 'flex';
        loseAudio.play();
        nextLevelButton.addEventListener('click', levelTwo)
        storeButton.addEventListener('click', openStore)
        nextLevelSection.style.zIndex = '2';
    }
}

// STATE CHECKERS


// LEVEL 2


// LEVEL 3

function levelThree() {
    ownHealth = document.getElementById('health').value += 100;
    enemyHealth = document.getElementById("enemyhealth").value += 100;
    chargeBar = document.getElementById('chargebar').value -= chargeBar;
    enemyChargebar = document.getElementById('enemychargebar').value = 0;
    heading.style.display = 'none';
    nextLevelSection.style.display = 'none';
    document.body.style.backgroundImage = "url(images/finalmap.gif)";
    enemyPlayer.src = "images/kaido.png";
    enemyPlayer.style.width = "18vw";
    enemyPlayer.style.bottom = "8em";
    timer.textContent = '1:00';
    sec = 59;
    buttonOne.style.display = 'inline-block';
    buttonTwo.style.display = 'inline-block';
    buttonThree.style.display = 'inline-block';
    buttonFour.style.display = 'inline-block';
    buttonOne.style.backgroundColor = '#C83400';
    buttonTwo.style.backgroundColor = '#C83400';
    levelChecker = "levelThree";
    buttonFour.disabled = true;
    buttonThree.disabled = true;
    buttonThree.style.background = 'lightslategray';
    buttonFour.style.background = 'lightslategray';
    buttonThree.style.cursor = 'auto';

}

// STATE CHECKERS

function checkChargebarLevelThree() {
    if((chargeBar >= 0) && (chargeBar <= 24)) {
        buttonThree.disabled = true;
        buttonFour.disabled = true;
        buttonThree.style.cursor = 'auto'
        buttonFour.style.cursor = 'auto'
        buttonThree.style.background = 'lightslategray';
        buttonFour.style.background = 'lightslategray';
    } else if((chargeBar >= 25) && (chargeBar <=49)) {
        buttonThree.style.cursor = 'pointer'
        buttonFour.style.cursor = 'auto'
        buttonThree.disabled = false;
        buttonThree.style.background = '#C83400';
        buttonFour.style.background = 'lightslategray';
        buttonFour.disabled = true;
    } else if(chargeBar >= 50) {
        buttonThree.style.cursor = 'pointer'
        buttonThree.disabled = false;
        buttonThree.style.background = '#C83400';
        buttonFour.style.cursor = 'pointer'
        buttonFour.disabled = false;
        buttonFour.style.background = '#C83400';
    }
}

function checkHealthLevelThree() {
    if((enemyHealth <= 0) && (ownHealth > 0)) {
        heading.textContent = 'YOU WIN';
        heading.style.display = 'block';
        console.log('You win')
        buttonOne.style.display = 'none';
        buttonTwo.style.display = 'none';
        buttonThree.style.display = 'none';
        buttonFour.style.display = 'none';
        storeButton.style.display = 'none';
        setTimeout(playAgain, 4000)
        storeButton.addEventListener('click', levelReset)
        nextLevelButton.style.display = 'none';
        nextLevelSection.style.display = 'flex';
        setTimeout(gameFinishedAudio, 500)
        nextLevelSection.style.zIndex = '2';
        nextLevelButton.addEventListener('click', levelTwo)
        storeButton.addEventListener('click', openStore)
        trophy.style.display = 'block'
        gameHeader.style.display = 'none'
    } else {
        heading.textContent = '';
    }
}

function checkOwnHealthLevelThree() {
    if((ownHealth <= 0) && (enemyHealth >= 0)) {
        heading.textContent = 'YOU LOSE';
        heading.style.display = 'block';
        console.log('You lose')
        buttonOne.style.display = 'none';
        buttonTwo.style.display = 'none';
        buttonThree.style.display = 'none';
        buttonFour.style.display = 'none';
        storeButton.style.display = 'inline-block';
        storeButton.style.cursor = 'pointer';
        storeButton.style.background = '#C83400';
        storeButton.textContent = 'Start Over';
        nextLevelButton.style.display = 'inline-block';
        nextLevelButton.textContent = 'Try Again';
        nextLevelButton.style.cursor = 'pointer';
        nextLevelButton.style.background = '#C83400';
        nextLevelSection.style.display = 'flex';
        loseAudio.play();
        storeButton.addEventListener('click', levelReset)
        nextLevelButton.addEventListener('click', levelThree)
        nextLevelSection.style.zIndex = '2';
    }
}

// STATE CHECKERS

// PLAY AGAIN

function playAgain() {
    storeButton.style.display = 'inline-block';
    storeButton.style.cursor = 'pointer';
    storeButton.style.background = '#C83400';
    storeButton.textContent = 'Play Again';
    storeButton.style.marginBottom = '-10em';
}

// PLAY AGAIN

// LEVEL 3


// STORE

function openStore() {
    backgroundFilter.style.display = 'block'
    storeSection.style.display = 'flex'
    if(currentMoney.textContent <= '149') {
        kanekiPurchaseButonPrice.style.color = 'red' 
    } else {
        kanekiPurchaseButonPrice.style.color = 'white' 
    }
}

function closeStore() {
    backgroundFilter.style.display = 'none'
    storeSection.style.display = 'none'
}

function purchaseKaneki() {
    if(currentMoney.textContent >= '150'){
        playerOne.src = 'images/kanekifromback.png'
        playerOne.style.width = '40vw'
        playerOne.style.left = '6em'
        narutoStoreCard.style.border = 'none'
        kanekiStoreCard.style.border = 'solid 6px var(--green)'
        kanekiPurchaseButonPrice.textContent = ''
        kanekiPurchaseButonCheck.style.display = 'block'
        if(purchaseChecker === false) {
            currentMoney.textContent = winMoney = winMoney - 150
            storeBuyAudio.play();
            purchaseChecker = true
            characterChecker = 'kaneki'
            narutoPurchaseButon.addEventListener('click', chooseNaruto)
            narutoStoreCard.addEventListener('click', chooseNaruto)
            kanekiPurchaseButon.addEventListener('click', chooseKaneki)
            kanekiStoreCard.addEventListener('click', chooseKaneki)
        } else {
            console.log("Je hebt dit item al gekocht")
        }
    } else {
        console.log('sorry je hebt niet genoeg')
    }
}

function chooseNaruto() {
    narutoStoreCard.style.border = 'solid 6px var(--green)'
    kanekiStoreCard.style.border = 'none'
    playerOne.src = 'images/narutofromback.png'
    playerOne.style.width = '12vw'
    playerOne.style.left = '15em'
    characterChecker = 'naruto'
}

function chooseKaneki() {
    kanekiStoreCard.style.border = 'solid 6px var(--green)'
    narutoStoreCard.style.border = 'none'
    playerOne.src = 'images/kanekifromback.png'
    playerOne.style.width = '40vw'
    playerOne.style.left = '6em'
    characterChecker = 'kaneki'
}


kanekiPurchaseButon.addEventListener('click', purchaseKaneki)

closeStoreButton.addEventListener('click', closeStore)


// STORE