let vh=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${vh}px`),window.addEventListener("resize",()=>{let e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)});var navActive=!1,navOpen=document.querySelector(".nav-toggle-menu"),navListOpen=document.querySelector(".c-primary-nav");function randPercentRange(e){return Math.floor(Math.random()*(e[1]-e[0]))+e[0]+"%"}function recursiveDelay(e,n,a){n&&(e(),setTimeout(()=>{recursiveDelay(e,n-1,a)},a))}function addOrnamentalElem(e,n,a){var t=document.createElement("span");t.classList.add("ornamental");for(i=0;i<a;i++)r=i,o=void 0,(o=document.createElement("i")).classList.add("nv-icon"),o.classList.add("wow"),o.classList.add("fadeIn"),o.setAttribute("data-wow-duration","5ms"),o.setAttribute("data-wow-delay",30*r+"ms"),o.classList.add(n),t.appendChild(o);var r,o;e.appendChild(t)}function playHeroVideos(){var e=document.querySelectorAll(".c-block-hero__background-video"),n=e.length,a=0;recursiveDelay((function(){e[a++].firstElementChild.play()}),n,600)}function addOrnament(e,n,a,t){var r=document.createElement("span");r.classList.add("ornament"),e.appendChild(r);var o=document.createElement("i");o.classList.add("nv-icon"),o.classList.add("wow"),o.classList.add("fadeIn"),o.classList.add(n),r.style.top=randPercentRange(a),r.style.left=randPercentRange(t),r.appendChild(o)}function addSlashes(){var e=document.querySelector(".c-block-hero__background-video");e&&addOrnamentalElem(e,"nv-icon--ornament_backslash",15);var n=document.querySelector(".c-block-hero__headline");n&&addOrnamentalElem(n,"nv-icon--ornament_backslash",15);var a=document.querySelector(".c-block-hero__container");a&&addOrnamentalElem(a,"nv-icon--ornament_plus",3),document.querySelectorAll(".c-card--title-highlight").forEach(e=>{addOrnamentalElem(e,"nv-icon--ornament_backslash",35)}),document.querySelectorAll(".c-card.decorated").forEach(e=>{addOrnamentalElem(e,"nv-icon--ornament_minus",8)})}navOpen.addEventListener("click",(function(e){e.preventDefault(),!1===navActive?(navActive=!0,navListOpen.classList.add("c-primary-nav--is-active"),navOpen.classList.add("nav-toggle-menu--is-active")):(navActive=!1,navListOpen.classList.remove("c-primary-nav--is-active"),navOpen.classList.remove("nav-toggle-menu--is-active"))})),$(".has-ornaments").each((function(){window.innerWidth<768?(rangeTop=[5,45],rangeLeft=[5,45],addOrnament(this,"nv-icon--ornament_circle",rangeTop,rangeLeft),rangeTop=[5,45],rangeLeft=[55,95],addOrnament(this,"nv-icon--ornament_triangle",rangeTop,rangeLeft),rangeTop=[55,95],rangeLeft=[5,45],addOrnament(this,"nv-icon--ornament_square",rangeTop,rangeLeft),rangeTop=[55,95],rangeLeft=[55,95],addOrnament(this,"nv-icon--ornament_triangle",rangeTop,rangeLeft)):(rangeTop=[5,33],rangeLeft=[5,33],addOrnament(this,"nv-icon--ornament_circle",rangeTop,rangeLeft),rangeTop=[5,33],rangeLeft=[34,66],addOrnament(this,"nv-icon--ornament_triangle",rangeTop,rangeLeft),rangeTop=[5,33],rangeLeft=[67,95],addOrnament(this,"nv-icon--ornament_square",rangeTop,rangeLeft),rangeTop=[34,66],rangeLeft=[5,33],addOrnament(this,"nv-icon--ornament_triangle",rangeTop,rangeLeft),rangeTop=[34,66],rangeLeft=[34,66],addOrnament(this,"nv-icon--ornament_square",rangeTop,rangeLeft),rangeTop=[34,66],rangeLeft=[67,95],addOrnament(this,"nv-icon--ornament_circle",rangeTop,rangeLeft),rangeTop=[67,95],rangeLeft=[5,33],addOrnament(this,"nv-icon--ornament_square",rangeTop,rangeLeft),rangeTop=[67,95],rangeLeft=[34,66],addOrnament(this,"nv-icon--ornament_circle",rangeTop,rangeLeft),rangeTop=[67,95],rangeLeft=[67,95],addOrnament(this,"nv-icon--ornament_triangle",rangeTop,rangeLeft))})),addSlashes(),window.onload=function(){playHeroVideos()},$((function(){$('[data-toggle="popover"]').popover({container:"body",html:"true"})})),(new WOW).init();