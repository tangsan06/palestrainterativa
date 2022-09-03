window.onload = function(e){ 

    console.log('onload');
    loadContent();  
}

window.onhashchange = function() { 
    loadContent();
}

const pages = [
    'login',
    'home'
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
}
