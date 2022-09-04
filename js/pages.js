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
        addScriptElement('js/qr-code.js',true);       
    }
}