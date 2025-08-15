
// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//part 1
const mainEl = document.querySelector("main"); 
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

//part 2 
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

//part 3
menuLinks.forEach((link) => {
  const newLink = document.createElement("a");
  newLink.href = link.href;
  newLink.textContent = link.text;
  topMenuEl.appendChild(newLink);
});

// part 4 (creating sub-menu)

const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");

//part 5 (Adding Menu Interaction)


const topMenuLinks = document.querySelectorAll("#top-menu a");
let activeMenuItem = null;


topMenuEl.addEventListener("click", function(event){
  event.preventDefault();
  if(event.target.tagName !== "A") 
    return;
  const clickedLink = event.target;
  const clickedText = clickedLink.textContent.toLowerCase();
  console.log(clickedText); 

const menuItem = menuLinks.find((item) => item.text === clickedText);
if(activeMenuItem === clickedLink){
    clickedLink.classList.remove("active");
    subMenuEl.style.top = "0";
    activeMenuItem = null;
    return;
  }

// part 6 (Adding Submenu Interaction)

  topMenuLinks.forEach((link) => link.classList.remove("active"));
  clickedLink.classList.add("active");
  activeMenuItem = clickedLink;
  if (!menuItem.subLinks){
    subMenuEl.style.top = "0";
    return;
  }
  subMenuEl.style.top = "100%";
  buildSubmenu(menuItem.subLinks);
});

