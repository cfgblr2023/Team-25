import React, { useState }from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import "../styles/chat.css"

const API_KEY ="";
export default function Chat() {
  const [typing,setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: "Hello, How can i Help you today?",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);

  const handleSend = async(message) =>{
    const newMessage={
      message:message,
      sender:"user",
      direction:"outgoing"
    }

    const newMessages=[
      ...messages,
      newMessage
    ]
    setMessages(newMessages);
    // console.log(messages,"here ")
    setTyping(true);
    await processMessageToChatGPT(newMessages);
  }

  async function processMessageToChatGPT(chatMessages){
    let apiMessages = chatMessages.map((messageObject) => {
      let role =" ";
      if(messageObject.sender === "ChatGPT"){
          role="assistant"
      }
      else{
        role="user"
      }
      return {role:role , content:messageObject.message}
    });


    const systemMessage ={
      role:"system",
      content:" Explain all concepts like I am 10 years old."
    }
    const apiRequestBody={
      "model":"gpt-3.5-turbo",
      "messages":[
        systemMessage,
        ...apiMessages
      ]
    }

    

    await fetch("https://api.openai.com/v1/chat/completions",{
      method:"POST",
      headers:{
        "Authorization":"Bearer "+API_KEY,
        "Content-Type" :"application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) =>{
      // console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setTyping(false);
    })

  }

  return (
    <div className='chat'>
      <div className="chat--div" >
        <MainContainer >
          <ChatContainer>
            <MessageList
            scrollBehavior='smooth'
              typingIndicator={typing ? <TypingIndicator content=" Typing"/> : null}
            >
              {
                messages.map((message,i)=>{
                  return <Message key={i} model={message}/>
                })
              }
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend}/>
          </ChatContainer>
        </MainContainer>
      </div>
      
    </div>
  )
}
