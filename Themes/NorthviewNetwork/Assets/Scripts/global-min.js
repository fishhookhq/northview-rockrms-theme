$((function(){let o=document.getElementById("site-header"),t=document.getElementById("zone-feature");o.style.position="fixed",t.style.paddingTop=o.offsetHeight+"px",$(".rock-text-box input.form-control").each((function(){$(this).is(":focus")?$(this).closest(".form-group").addClass("focused"):""===$(this).val()&&$(this).closest(".form-group").addClass("blurred")})),$(".rock-text-box input.form-control").on("focus",(function(){$(this).closest(".form-group").removeClass("blurred"),$(this).closest(".form-group").addClass("focused")})),$(".rock-text-box input.form-control").on("blur",(function(){""===$(this).val()&&($(this).closest(".form-group").addClass("blurred"),$(this).closest(".form-group").removeClass("focused"))})),$('.address-control .form-control[type="text"]:not(.js-street1)').each((function(){$(this).closest(".form-group").prepend("<label class='control-label' for='"+$(this).attr("id")+"'>"+$(this).attr("placeholder")+"</label>"),$(this).wrap("<div class='control-wrapper'></div>").attr("placeholder",""),$(this).closest(".form-group").addClass("blurred")})),$('.address-control .form-control[type="text"]').on("focus",(function(){$(this).closest(".form-group").removeClass("blurred"),$(this).closest(".form-group").addClass("focused")})),$('.address-control .form-control[type="text"]').on("blur",(function(){""===$(this).val()&&($(this).closest(".form-group").addClass("blurred"),$(this).closest(".form-group").removeClass("focused"))}));var e=!1,s=document.querySelectorAll(".nav-toggle-menu"),r=document.querySelector(".c-offcanvas-menu");function l(o,t,e){t&&(o(),setTimeout((()=>{l(o,t-1,e)}),e))}s.forEach((function(o){o.addEventListener("click",(function(o){o.preventDefault(),!1===e?(e=!0,r.classList.add("c-offcanvas-menu--is-active"),s.forEach((function(o){o.classList.add("nav-toggle-menu--is-active")}))):(e=!1,r.classList.remove("c-offcanvas-menu--is-active"),s.forEach((function(o){o.classList.remove("nav-toggle-menu--is-active")})))}))}));var n=!0,c=0;function a(){var o=document.querySelectorAll(".c-block-hero__background-video"),t=o.length,e=0;t>1&&l((function(){o[e++].firstElementChild.play()}),t,600)}$(window).scroll((function(){n=!0})),setInterval((function(){n&&(!function(){var o=$(this).scrollTop();if(Math.abs(c-o)<=5)return;o>10?$("header").addClass("opaque"):$("header").removeClass("opaque");c=o}(),n=!1)}),250),window.onload=function(){a()},$('[data-toggle="popover"]').popover({container:"body",html:"true"}),(new WOW).init()}));