
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('I have a big crush on you').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); 
          } else {
           
            const subtitle = document.createElement('p');
            subtitle.innerText = "So, can I be yours in the quiet moments and the loud ones too?";
            subtitle.style.fontSize = '20px'; 
            subtitle.style.marginTop = '2px'; 
            subtitle.style.color = '#fff'; 

            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
