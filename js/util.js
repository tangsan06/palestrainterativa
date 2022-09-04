function addScriptElement(src, module){
    var scripts = document.getElementsByTagName('script')
    var arr = Array.from(scripts);

    if(arr.filter(e => e.src.includes(src)).length == 0) {
        var scriptElement1=document.createElement('script');

        if(module){
            scriptElement1.type = 'module';
        }
        scriptElement1.src = src;
        document.head.appendChild(scriptElement1);
    }

}