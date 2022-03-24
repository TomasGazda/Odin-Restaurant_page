function create_history(){
    let history = document.createElement('div');
    history.classList.add("container-fluid", "d-flex", "justify-content-center", "align-items-center");
    history.id="history";
    history.innerHTML = `
                            <div id="history-main" class = "h-100 w-75 d-flex flex-column align-items-center text-center">
                            <div class=" h1 display-3 mb-5 mt-4 name text-white">
                                Our  history
                                </div>
                                <div class ="quick_note lh-sm fs-2 text-center w-50">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                
                                </div>

                            </div>


                        `;
return history;
}

export{create_history};