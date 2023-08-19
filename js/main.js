let menu_icon = document.querySelector('.fa-bars') ;
let menu = document.querySelector('header .container .navigations nav');
let timers = document.querySelectorAll('.summaries .container .summary h2');
menu_icon.onclick = () =>{
    if(menu.style.display=="none"){
        menu.style='display:flex';
        menu_icon.classList.remove('fa-bars')
        menu_icon.classList.add('fa-xmark')
    }else{
        menu.style='display:none';
        menu_icon.classList.remove('fa-xmark')
        menu_icon.classList.add('fa-bars')
    }
    }
    window.addEventListener('scroll', () => {
        console.log(scrollY);
        if (scrollY >= 95) {
          document.querySelector('.about-us').style.animation = 'appear 3s';
        }
        if (scrollY >= 690) {
          document.querySelector('.products .container .prodes').style.animation = 'maxSize 3s';
        }
        if (scrollY >= 1840) {
          document.querySelector('.contact').style.animation = 'goAndComeBack 4s';
        }
      });
      
      let x = 0

      let change = function (item, counter) {
      
          if (x < counter) {
      
              item.innerText = `${x++}`
          }
      }

      for (let iterator of timers) {
        let counter = iterator.getAttribute("count")
        setInterval(change, 50, iterator, counter)

    }

