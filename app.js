document.getElementById("menu").addEventListener("click",()=>{

    document.querySelector('.left-body').style.left = '0px';
    document.querySelector('.left-body').style.width = '200px';
})
document.getElementById("cross").addEventListener("click",()=>{

    document.querySelector('.left-body').style.left = '-200px';
    // document.querySelector('.left-body').style.width = '0px';
})
