import "./assets/style.css";

import { create_homepage } from "./home.js";
import { create_history } from "./history";
import { create_contact } from "./contact";
import $ from 'jquery';

let active_page;


$( document ).ready(function() {
    
    $("#content").append(create_homepage); 
    active_page = "1";
     


    $("button[id^=pills-]").click(function (e) { 
        e.preventDefault();
        
   
        if($(this).data("page") == "1" && active_page != "1"){
            active_page = "1";
            $("#content").html('');
            
            $("#content").append(create_homepage); 
        }
        if($(this).data("page") == "2" && active_page != "2"){
            $("#content").html('');
            
            $("#content").append(create_history); 
            active_page = "2";
        }
        if($(this).data("page") == "3" && active_page != "3"){
            $("#content").html('');
            
            $("#content").append(create_contact); 
            active_page = "3";
        }
    
        
    });
});




