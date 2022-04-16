const navMenu = document.querySelector('.nav-area'),
      navToogle = document.querySelector('.toogle'),
      navClose = document.querySelector('.nav-close');

      menuToogle(navToogle);
      menuToogle(navClose);

      function menuToogle(el) {

        el.addEventListener("click", () => {

            if(el === navToogle) {
                
                navMenu.classList.add('show-menu');

            } else if(el === navClose) {

                navMenu.classList.remove('show-menu');
                
            }

            toogleElement();
    
          });

      }

      function toogleElement() {

        if(navMenu.classList.contains('show-menu')) {
                
            navToogle.classList.add('inactive');
            navClose.classList.remove('inactive');

        } else {
            navToogle.classList.remove('inactive');
            navClose.classList.add('inactive');
        }
     }