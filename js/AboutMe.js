const body=document.querySelector('body');
const themeCookieName="theme";
const themeDark="dark";
const themeLight="light";

const setCookie=(cname)=>{
    let d=new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    let expires="expires="+d.toUTCString();
    document.cookie=cname+"="+cvalue+";"+expires+";path=/";
}

const getCookie=(cname)=>{
    let name=cname+"=";
    let ca=document.cookie.split(";");
    for(let i=0;i<ca.length;i++){
        let c=ca[i];
        while(c.charAt(0)==' '){
            c=c.substring(1);
        }
        if(c.indexOf(name)==0){
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

const loadTheme=()=>{
    let theme=getCookie(themeCookieName);
    body.classList.add(theme===""?themeLight:theme);
}
loadTheme();

const switchTheme=()=>{
    if(body.classList.contains(themeLight)){
        body.classList.remove(themeLight);
        body.classList.add(themeDark);
    }
    else{
        body.classList.remove(themeDark);
        body.classList.add(themeLight);
    }
}