import $ from 'jquery';



function create_homepage(){
    let landing_page = document.createElement('div');
    landing_page.classList.add("landing-page");
    landing_page.innerHTML = `<div class ="left"></div>
                                <div class ="right d-flex flex-column justify-content-center align-items-center dark">
                                    <div class=" h1 display-2 name text-white">
                                            Pizzeria Tomasino
                                    </div>
                                    <div class ="quick_note fs-2 text-muted w-50">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                    
                                    </div>
                                </div> `;
    return landing_page;
}

export{create_homepage};