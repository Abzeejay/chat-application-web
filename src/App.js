import { ChatEngine } from 'react-chat-engine';

import './App.css';
import LoginFrom from './component/LoginForm';
import ChatFeed from './component/ChatFeed';


const App = () => {
    if(!localStorage.getItem('username')) return <LoginFrom/>
    return (
        <ChatEngine
            height="100vh"
            projectID= "3cc2129c-6037-454a-a14a-518fe810a169"
            userName= {localStorage.getItem('username')}
            userSecret= {localStorage.getItem('password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}

export default App;


