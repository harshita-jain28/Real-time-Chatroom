const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newName = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-msg');
const rooms = document.querySelector('.chatRoom');

//add chat
newChatForm.addEventListener('submit', fun =>{
    fun.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message).then(() =>{
        newChatForm.reset()
    }).catch(err => console.log(err));
});

//update name
newName.addEventListener('submit', fun =>{
    fun.preventDefault();
    const name = newName.name.value.trim();
    chatroom.updateName(name);
    newName.reset();
    updateMsg.innerText = `your name was updated to ${name}`;
    setTimeout(() => updateMsg.innerText='',2000);
});

rooms.addEventListener('click' , fun=>{
    if(fun.target.tagName === 'BUTTON'){
        chat_disp.clear();
        chatroom.updateRoom(fun.target.getAttribute('id'));
        chatroom.getchat(chat => chat_disp.render(chat));
    }

})
const username = localStorage.username ? localStorage.username : 'anonymous';
const chat_disp = new Chat_dis(chatList);
const chatroom = new Chatroom('music',username);

chatroom.getchat( data =>chat_disp.render(data));