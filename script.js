
//message input
const textarea=document.querySelector('.chatbox-message-input');
const chatboxform=document.querySelector('.chatbox-message-form')
textarea.addEventListener('input',function(){
    let line=textarea.value.split('\n').length
    if(textarea.rows < 6 || line <6){
        textarea.rows = line
    }
    if(textarea.rows>1){
        chatboxform.style.alignItems= 'flex-end'
    }else{
        chatboxform.style.alignItems= 'center'
    }
  
})

// <!-- chatbox-toggle -->
// const chatboxtoggle=document.querySelector('.chatbox-toggle');
// const chatboxmessage=document.querySelector('.chatbox-message-wrapper');
// chatboxtoggle.addEventListener('click',function(){
//     chatboxmessage.classList.toggle('show')
// })

//dropdown toggle
const dropdowntoggle=document.querySelector('.chatbox-message-dropdown-toggle');
const dropdownmenu=document.querySelector('.chatbox-message-dropdown-menu');
dropdowntoggle.addEventListener('click',function(){
    dropdownmenu.classList.toggle('dropdown');
})
//
document.addEventListener('click',function(e){
    if(!e.target.matches('.chatbox-message-dropdown, .chatbox-message-dropdown *')){
        dropdownmenu.classList.remove('dropdown')
    }
})
const questions = [
    "What is your favorite color?",
    "How do you like to spend your free time?",
    "What's the best book you've read recently?",
    "Do you prefer coffee or tea?",
    "What's your favorite movie genre?",
    "What's your dream travel destination?",
    "Do you have any pets?",
    "What's your favorite food?",
    "What's your favorite season?",
    "Do you enjoy outdoor activities?",
    "What's your favorite music genre?",
    "What's your favorite holiday?",
    "Do you like to cook?",
    "What's your favorite TV show?",
    "Do you prefer summer or winter?",
    "What's your favorite sport?",
    "What's your dream job?",
    "Do you like to exercise?",
    "What's your favorite hobby?",
    "What's your favorite type of cuisine?"
];

//chatbox message
const chatboxmessagewrapper=document.querySelector('.chatbox-message-content');
const chatboxNoMessage = document.querySelector('.chatbox-message-no-message');
chatboxform.addEventListener('submit' , function(e){
    e.preventDefault()
    if(isValid(textarea.value)){
        writeMessage()
      setTimeout(autoReply, 1000)

    }
})
    
function addZero(num){
   return num <10 ? '0'+num :num
}
function writeMessage(){
    const today=new Date();
    
    let message=`
    <div class="chatbox-message-item sent">
        <span class="chatbox-message-item-text">
            ${textarea.value.trim().replace(/\n/g, '<br>\n')}
        </span>
        <span class="chatbox-message-item-time">
           ${addZero(today.getHours())}:${addZero(today.getMinutes())}
        </span>
         
    </div>
    `
    chatboxmessagewrapper.insertAdjacentHTML('beforeend', message)
    chatboxform.style.alignItems='center'
    textarea.rows=1
    textarea.focus()
    textarea.value=''
    chatboxNoMessage.style.display='none'
    scrollbottom()

}
function autoReply(){
    const today=new Date();
    
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    let message=`
    <div class="chatbox-message-item received">
        <span class="chatbox-message-item-text">
        
            ${randomQuestion}
        </span>
        <span class="chatbox-message-item-time">
           ${addZero(today.getHours())}:${addZero(today.getMinutes())}
        </span>
         
    </div>
    `
    chatboxmessagewrapper.insertAdjacentHTML('beforeend', message)  
    scrollbottom()   

}
function scrollbottom(){
    chatboxmessagewrapper.scrollTo(0, chatboxmessagewrapper.scrollHeight)
}
function isValid(value){
    let text=value.replace(/\n/g, '')
    text=text.replace(/\s/g , '')
return text.length > 0
}
