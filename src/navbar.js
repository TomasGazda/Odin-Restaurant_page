import $ from 'jquery';

function create_navbar() {
    let nav = document.createElement('nav');
    let navbar_cont = document.createElement('div');
    let navbar = document.createElement('div');
    let nav_list = document.createElement('ul');

    nav.classList.add("navbar", "w-100", "m-0","sticky-top", "navbar-dark", "bg-dark" ,"p-0");
    navbar_cont.classList.add("d-flex", "justify-content-end", "container-fluid");
    navbar.classList.add("navbar","p-0");
    nav_list.classList.add("nav",  "nav-tabs",'border-bottom-0');
    nav_list.innerHTML +=` <ul class="nav nav-pills " id="pills_tab" >
    <li class="nav-item" >
      <button class="nav-link fs-5 text-white" id="pills-home-tab"  data-page="1"   >Home</button>
    </li>
    <li class="nav-item" >
      <button class="nav-link fs-5 text-white" id="pills-profile-tab"  data-page="2"  >Profile</button>
    </li>
    <li class="nav-item" >
      <button class="nav-link fs-5 text-white" id="pills-contact-tab"  data-page="3"   >Contact</button>
    </li>
  </ul>
                       `;

    navbar.appendChild(nav_list);
    navbar_cont.appendChild(navbar);
    nav.appendChild(navbar_cont);

    return nav;

    

}


export {create_navbar};