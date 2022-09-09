
function bannerChanger(){

    let imgCont = document.getElementById("banner-cont");
    let num = 100;

    let time = setInterval(() => {
        
        imgCont.style.transform = 'translateX(-'+num+'%)';

        num=num+100;

        if(num==500){
            // clearInterval(time);
            num = 0;
        };

        console.log("SOMETHING IS WORKING");

    }, 5000);

}

bannerChanger();