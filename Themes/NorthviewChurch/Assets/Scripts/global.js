    //Global Scripts
    var navActive = false,
        navOpen = document.querySelector('.nav-toggle-menu'),
        navListOpen = document.querySelector('.c-primary-nav');
    
    navOpen.addEventListener("click", function(event){
    	event.preventDefault();
    
      if (navActive === false) {
    	    navActive = true;
    	    navListOpen.classList.add("c-primary-nav--is-active");
    	    navOpen.classList.add("nav-toggle-menu--is-active");
    	} 
    	else {
    		 navActive = false;
    		 navListOpen.classList.remove("c-primary-nav--is-active");
    	   navOpen.classList.remove("nav-toggle-menu--is-active");
    	}
    });
    function randPercentRange(range){
      return Math.floor(Math.random() * (range[1]-range[0])) + range[0] + '%';
    }
    // Function to execute X function, Y number of times with Z of interval delay 
    function recursiveDelay(functionToCall, executionsNumber, timeoutInMilliseconds) {
        if (executionsNumber) { //exit condition
    
            functionToCall();  // external function execution
    
            setTimeout(
                () => { recursiveDelay(functionToCall, executionsNumber - 1, timeoutInMilliseconds); //recursive call
                }, timeoutInMilliseconds);
        }
    }

    //hero scripts
    function addOrnamentalElem(appendObject,appendIconClass,numIcons,delayMs) { 
      // create a new element 
      var newSpan = document.createElement("span");
      // add the text node to the newly created div
      newSpan.classList.add("ornamental");  
      // add the newly created element and its content into the DOM 
      appendObject.appendChild(newSpan);
      
      // External function to call
      let appendIcon = function() {
        var newIcon = document.createElement("i");
        newIcon.classList.add("nv-icon");
        newIcon.classList.add(appendIconClass);
        newSpan.appendChild(newIcon);
      }
      
      // Initial call
      recursiveDelay(appendIcon, numIcons, delayMs);

    }
    function playHeroVideos(){
      var heroVideos = document.querySelectorAll('.c-block-hero__background-video');
      var numVids = heroVideos.length;
      var n = 0;

      // play [n]th video and increment [n]
      let playVideo = function() {
        //console.log(heroVideos[loop]);
        heroVideos[n++].firstElementChild.play();
      }
      
      // Initial call
      recursiveDelay(playVideo, numVids, 600);
    }
    
    function addOrnament(appendObject,appendIconClass,rangeTop,rangeLeft) {      
      // create a new element 
      var newSpan = document.createElement("span");
      // add the text node to the newly created div
      newSpan.classList.add("ornament");  
      // add the newly created element and its content into the DOM 
      appendObject.appendChild(newSpan);
      var newIcon = document.createElement("i");
      newIcon.classList.add("nv-icon");
      newIcon.classList.add(appendIconClass);
      newSpan.style.top = randPercentRange(rangeTop);
      newSpan.style.left = randPercentRange(rangeLeft);
      newSpan.appendChild(newIcon);
    }
    function addSlashes(){
      var heroVideo = document.querySelector('.c-block-hero__background-video');
      addOrnamentalElem(heroVideo,"nv-icon--ornament_backslash",15,40);
      var heroHeadline = document.querySelector('.c-block-hero__headline');
      addOrnamentalElem(heroHeadline,"nv-icon--ornament_backslash",15,40);
      var heroContainer = document.querySelector('.c-block-hero__container');
      addOrnamentalElem(heroContainer,"nv-icon--ornament_plus",3,180);
      var calloutPrimary = document.querySelectorAll('.c-card--title-highlight');
      calloutPrimary.forEach(item => { 
        addOrnamentalElem(item,"nv-icon--ornament_backslash",35,40)
      });
    };

    $('.has-ornaments').each(function(){
      var hasOrnaments = this;
      rangeTop = [5,33]; rangeLeft = [5,33];
      addOrnament(hasOrnaments,"nv-icon--ornament_circle",rangeTop,rangeLeft);
      rangeTop = [5,33]; rangeLeft = [34,66];
      addOrnament(hasOrnaments,"nv-icon--ornament_triangle",rangeTop,rangeLeft);
      rangeTop = [5,33]; rangeLeft = [67,95];
      addOrnament(hasOrnaments,"nv-icon--ornament_square",rangeTop,rangeLeft);
      rangeTop = [34,66]; rangeLeft = [5,33];
      addOrnament(hasOrnaments,"nv-icon--ornament_triangle",rangeTop,rangeLeft);
      rangeTop = [34,66]; rangeLeft = [34,66];
      addOrnament(hasOrnaments,"nv-icon--ornament_square",rangeTop,rangeLeft);
      rangeTop = [34,66]; rangeLeft = [67,95];
      addOrnament(hasOrnaments,"nv-icon--ornament_circle",rangeTop,rangeLeft);
      rangeTop = [67,95]; rangeLeft = [5,33];
      addOrnament(hasOrnaments,"nv-icon--ornament_square",rangeTop,rangeLeft);
      rangeTop = [67,95]; rangeLeft = [34,66];
      addOrnament(hasOrnaments,"nv-icon--ornament_circle",rangeTop,rangeLeft);
      rangeTop = [67,95]; rangeLeft = [67,95];
      addOrnament(hasOrnaments,"nv-icon--ornament_triangle",rangeTop,rangeLeft);
    });

    window.onload = setTimeout(() => {addSlashes()}, 500);
    window.onload = function(){
      playHeroVideos()
    };
        