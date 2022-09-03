window.onload = function(e){ 

    console.log('onload');
    loadContent();  
}

window.onhashchange = function() { 
    loadContent();
}

const pages = [
    'login',
    'home',
    'qrcode'
];


const loadContent = async() => {
    let url = "home.html";
    if(window.location.hash){
        let unhashedurl = window.location.hash.replace('#','');
        
        if(pages.includes(unhashedurl)){
            url = `${unhashedurl}.html`;
        }
    }

    await getPage(url);
}


const getPage = async (page) => {
    const response = await fetch(`pages/${page}`);
    const html = await response.text();
    document.querySelector('#content').innerHTML = html;
    document.querySelector('#closeOffCanvas').click();


    if(page.includes('qrcode')){
        var scriptElement1=document.createElement('script');
        scriptElement1.type = 'module';
        scriptElement1.src = "js/qr-code.js";
        document.head.appendChild(scriptElement1);
    }



    // if(page.includes('qrcode')){
    //     if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    //         alert('Seu navegador tem suporte');
    //       } else {
    //         alert('Seu navegador não tem suporte');
    //       }
    // }
}
