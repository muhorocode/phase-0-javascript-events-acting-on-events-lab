const dodger=document.getElementById('dodger')
dodger.style.background='#FF69B4'
dodger.style.bottom='0px'
dodger.style.left='0px'

function moveDodgerLeft(){
    const leftNumbers=dodger.style.left.replace('px','')
    const left=parseInt(leftNumbers,10)

    if(left>0){
        dodger.style.left=`${left-1}px`
    }
}

document.addEventListener('keydown', function(e){
    if(e.key==='ArrowLeft'){
        moveDodgerLeft()
    }
})

function moveDodgerRight(){
    const rightNumbers=dodger.style.left.replace('px','')
    const left=parseInt(rightNumbers,10)

    if(left<360){
        dodger.style.left=`${left+1}px`
    }
}

document.addEventListener('keydown',function(event){
    if(event.key==='ArrowRight'){
        moveDodgerRight()
    }
})