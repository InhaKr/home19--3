  // "use strict";
  let block = document.querySelector('.block');
  let a = document.querySelector('.miniblock');
  let c = document.querySelector('#event-details');


  let step = 10;
  let jump = 50;
  let animation =500;
  let jumpEnd = 540;
  let isJump = false;

  document.addEventListener('keydown', (event) => {
    console.log(event.keyCode, event.type)

    switch (event.keyCode) {
      case 37:
        a.style.left = `${a.offsetLeft - step}px`;
        break;

      case 38:
        a.style.top = `${a.offsetTop - step}px`;
        break;
      case 39:
        a.style.left = `${a.offsetLeft + step}px`;
        break;
      case 40:
        a.style.top = `${a.offsetTop + step}px`;
        break;

      case 32:
        if (isJump) {
          break;
        }
        let originalTop = a.offsetTop;
        isJump = true;
        a.style.top = `${originalTop - jump}px`;

        setTimeout(() => {
          a.style.top = `${originalTop}px`;
          setTimeout(()=> {
            isJump = false;
          },animation);
        },jumpEnd)
        break;

      case 17:
        let originalWidth = 100;
        let originalHeight = 100;

        a.style.width = `${originalWidth+10}px`;
        a.style.height = `${originalHeight-40}px`;

        setTimeout(() => {
          a.style.width = `${originalWidth}px`;
          a.style.height = `${originalHeight}px`;
        }, 200)
    }
  })
  



    // "use strict";

    const menuActions = [
      // {title: 'Action', id:'a1'},
    {title: 'Jump', id:'a2'},
    ];

  const menuHandlers = {
    // a1:() => console.log("Action"),
    a2:() => console.log("Jump"),
    // a3:() => console.log("Remove")
  }

  


  document.addEventListener('contextmenu', event => {
    event.preventDefault();

    const menu = document.querySelector('.custom-menu');

    menu.style.left = `${event.clientX + 10}px`;
    menu.style.top = `${event.clientY + 10}px`;

    if (menu.children.length != menuActions.length) {
      menu.innerHTML = `${menuActions.map((item) => `<div class="item" data-id = "${item.id}">${item.title}</div>`).join('') }`
    }

    menu.classList.add('active');

  })

  document.addEventListener('click', () => {
    const menu = document.querySelector('.custom-menu');
    menu.classList.remove('active');

    let originalTop = a.offsetTop;
        isJump = true;
        a.style.top = `${originalTop - jump}px`;

        setTimeout(() => {
          a.style.top = `${originalTop}px`;
          setTimeout(()=> {
            isJump = false;
          },animation);
        },jumpEnd)
  })


  // window.addEventListener('load', () => {
  //   const menu = document.querySelector('.custom-menu');

  // menu.addEventListener('click', function (event) {
  //   const id = event.target.dataset.id;
  //   // console.log(id);
  //   if(!menuHandlers[id]) {
  //     return console.warn("danger")
  //   }
  //   menuHandlers[id]();

  // })
  // })