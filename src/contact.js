function create_contact(){
    let contact = document.createElement('div');
    contact.classList.add("container-fluid", "d-flex", "justify-content-center", "align-items-center",);
    contact.id="contact";

    contact.innerHTML = `
    <div id="contact-main" class="h-100 w-75 d-flex flex-column align-items-center text-center">
            <div class=" h1 display-3 mb-5 mt-4 name text-white">
              Contact Info
            </div>
            <div class="row w-100 mb-5">
              <div class ="col-md-6">
                <iframe width="90%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=350&amp;height=350&amp;hl=en&amp;q=%20Rome+(Pizzeria)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://mapswebsite.net/'>mapswebsite</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=77f487d7cd8a5172e0256fa20423e070a4c7b881'></script>
              </div>
              <div class ="col-md-6 fs-4 ps-3">
                <p>Via Dulla Meloria, 46, 00137 </p>
                <p>Rome – Italy</p>
                <p>Email: Contattaci@tomassino.it</p>
                <p>Tel: (+39) 07 397555416</p>
 
              </div>

            </div>
            <div class="row w-75 text-start mt-4 mb-4 fs-5" >
              <div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Your email address</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Your message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-12 justify-content-end d-flex">
                  <button id="Send_btn" class="btn btn-primary">Send Message</button>
                </div>
              </div>
            </div>
          </div>
    `;

 return contact;
}
 
export {create_contact};