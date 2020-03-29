let picArray = ["./assets/sheep.png", "./assets/girl.png", "./assets/night.png", "./assets/robotheart.png", "./assets/rabbit.png", "./assets/sdk.png", "./assets/robots.png", "./assets/birds.png", "./assets/greenmoster.png", "./assets/writing.png", "./assets/monster.png", "./assets/broken.png" ]
const button = document.getElementById('btn');
const close_button = document.getElementById('close-btn');
window.onload = function(){
    console.log('hello')

    //Tags
    addTagsClickHandler();
    //Menu
    menuClickChangeHandler();
    //Scroll
    scroll();
    //Send
    send();
    // Pictures
    addTagsClickHandlerColumn();
    
}



const addTagsClickHandler = () => {
    document.querySelector('.port_tags').addEventListener('click', (e) => {
        if(e.target.classList.contains('tag')){
            let clickedTag = e.target;
            removeSelectedTags();
           selectClickedTag(clickedTag);
            if(clickedTag.innerText === 'All'){
                showAllStrategies();
            } else {
                filterStrategyBySelectingTag(clickedTag.innerText);
            }
        } 
    })
}

const addTagsClickHandlerColumn = () => {
    document.querySelector('.port_pics').addEventListener('click', (e) => {
        
        if(e.target.tagName === 'IMG') { console.log('test' + e.target.tagName)
            let clickedColumn = e.target;
            removeSelectedColumn();
            selectClickedColumn(clickedColumn);
        }
        
    })
}

const removeSelectedColumn = () => {
    let columns = document.querySelectorAll('.port_pics .column')
    columns.forEach(columns => { 
        columns.classList.remove('column_selected');
    })
}

const selectClickedColumn = (clickedColumn) => {
    clickedColumn.parentNode.classList.add('column_selected');
}

const removeSelectedTags = () => {
    let tags = document.querySelectorAll('.port_tags span')
    tags.forEach(tags => { 
        tags.classList.remove('tag_selected');
        tags.classList.add('tag');
    })
}

const selectClickedTag = (clickedTag) => { 
    clickedTag.classList.add('tag_selected');
    clickedTag.classList.remove('tag');
}


const showAllStrategies = () => {
    let strategies = document.querySelectorAll('.port_pics .column img');
    let i =0;
    strategies.forEach(img => {
    img.src = picArray[i];
    i++;
    })
}

const filterStrategyBySelectingTag = (SelectedTag) => {    
    let strategies = document.querySelectorAll('.port_pics .column img');
    strategies.forEach(img => {
    img.src = picArray[Math.floor(Math.random() * picArray.length)];
    })
}



const menuClickChangeHandler = () => {
    
    const menu = document.getElementById('menu');
    menu.addEventListener('click', (event) => {
       
        menu.querySelectorAll('ul li').forEach(el => el.classList.remove('active')); 
        if(event.target.nodeName === 'LI'){
            event.target.classList.add('active');
        }
         if(event.target.innerText === 'HOME'){
            window.scrollTo(0,0)    
         }
         if(event.target.innerText === 'SERVICE'){ 
            window.scrollTo(0,600)
         }
         if(event.target.innerText === 'PORTFOLIO'){ 
            window.scrollTo(0,1100)
         }
         if(event.target.innerText === 'ABOUT'){ 
            window.scrollTo(0,2000)
         }
         if(event.target.innerText === 'CONTACT'){ 
            window.scrollTo(0,2800)
         }
    
     })
}


const scroll = () => {  
     
    var top = document.querySelector('.top');
    var scrolled;
    top.addEventListener('click', toTop);
    var timer;
    function toTop() {
      scrolled = window.pageYOffset; // 1000
      if (scrolled > 0) {
        scrolled -= 50;
        timer = setTimeout(toTop, 20);
        window.scrollTo(0, scrolled);
      }
    }
    window.addEventListener('scroll', function () {
      
      if (window.scrollY < 600) {
        let v = document.getElementById("home"); 
            v.classList.add("active");
            top.style.opacity = 0;
      } else if(scrollY > 600 && scrollY < 800){
        let v = document.getElementById("home"); 
        v.classList.remove("active");
        let w = document.getElementById("service");
        w.classList.add("active");
      } else if(scrollY > 1200 && scrollY < 2000){
        let v = document.getElementById("service"); 
        v.classList.remove("active");
        let w = document.getElementById("portfolio");
        w.classList.add("active");
      } else if(scrollY > 2080 && scrollY < 2300){
        let v = document.getElementById("portfolio"); 
        v.classList.remove("active");
        let w = document.getElementById("about");
        w.classList.add("active");
      }  else if(scrollY > 2300){
        top.style.opacity = 1;
        let v = document.getElementById("about"); 
        v.classList.remove("active");
        let w = document.getElementById("contact");
        w.classList.add("active");
      } 
    })
}

const send = () => {
    
button.addEventListener('click', () => {
    event.preventDefault();
    const subject = document.getElementById('subject').value;
    const description = document.getElementById('description').value;
    if(document.forms['frm'].subject.value === "") {
        document.getElementById('result').innerText = "no description"
        document.getElementById('describe').innerText = 'no description';
        document.getElementById('message-block').classList.remove('hidden'); 
    } else {
        document.getElementById('result').innerText = subject;
        document.getElementById('describe').innerText = description;
        document.getElementById('message-block').classList.remove('hidden'); 
    }
    
});

close_button.addEventListener('click', () => {
    
    document.getElementById('result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    document.getElementById('form').reset();
});
}




// document.querySelector('.arrow-right').onclick = arrowRight;
// document.querySelector('.arrow-left').onclick = arrowLeft;
// var inner = document.querySelector('.carousel-inner');
// var left = 0;
// var timer;


// function arrowRight(){
//   left -= 300;
//   if(left < -1200){
//     left = 0;
//   }
//   inner.style.left = left + 'px';
// }

// function arrowLeft(){
//   if(left < 0){
//     left += 300; 
//     inner.style.left = left + 'px';
//   }
// }
    
