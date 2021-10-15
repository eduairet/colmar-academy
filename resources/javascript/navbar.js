const imagesDir = './resources/images'
const oncampusIcon = `${imagesDir}/ic-on-campus.svg`;
const onlineIcon = `${imagesDir}/ic-online.svg`;
const signinIcon = `${imagesDir}/ic-login.svg`;

const menuitems = {
    oncampus: {href: '#', id: 'oncampus', text: 'On campus'},
    online: {href: '#', id: 'online', text: 'Online'},
    companies: {href: '#', id: 'companies', text: 'For companies'},
    signin: {href: '#', id: 'signin', text: 'Sign in'},
}

const navBar = document.getElementById('nav-menu');

for (const menuitem of Object.values(menuitems)) {
    const menuitemAnchor = document.createElement('a');
    menuitemAnchor.className = 'menu-link';
    menuitemAnchor.href = menuitem.href;
    const menuitemElement = document.createElement('div');
    menuitemElement.className = 'menu-item';
    menuitemElement.id = menuitem.id;
    menuitemElement.innerHTML = menuitem.text;
    menuitemAnchor.appendChild(menuitemElement);
    navBar.appendChild(menuitemAnchor)
}

const oncampus = document.getElementById("oncampus");
const online = document.getElementById("online");
const signin = document.getElementById("signin");
const menus = [oncampus, online, signin];

const changeMenu = () => {
    if (window.innerWidth < 600) {
        for (const item of menus) {
            item.innerHTML = "";
        }
        oncampus.style.backgroundImage = `url(${oncampusIcon})`;
        online.style.backgroundImage = `url(${onlineIcon})`;
        signin.style.backgroundImage = `url(${signinIcon})`;
        if (document.getElementById('companies') !== null) {
            document.getElementById('companies').parentElement.remove();
            document.getElementById('companies').remove();
        }
    } else {
        oncampus.innerHTML = 'On campus';
        online.innerHTML = 'Online';
        signin.innerHTML = 'Sign in';
        oncampus.style.backgroundImage = 'none';
        online.style.backgroundImage = 'none';
        signin.style.backgroundImage = 'none';
        if (document.getElementById('companies') === null) {
            const companiesLink = document.createElement('a'); 
            companiesLink.className = 'menu-link';
            companiesLink.href = '#';
            const companies = document.createElement('div');
            companies.id = 'companies';
            companies.className = 'menu-item';
            companies.innerHTML = 'For companies';
            companiesLink.appendChild(companies);
            document.getElementById("nav-menu").insertBefore(companiesLink, signin.parentElement);
        }
    }
}

window.onload = changeMenu();
window.addEventListener('resize', changeMenu);