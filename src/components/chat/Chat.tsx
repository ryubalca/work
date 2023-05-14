import React, { useState } from 'react'
import "./Chat.scss"
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import { useAppSelector } from '../../app/hooks';
import { CollectionReference, DocumentData, DocumentReference, addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { db } from '../../firebase';
import useSubCollection from '../../hooks/useSubCollection';

const Chat = () => {

    const [inputText, setInputText] = useState<string>("");
    const channelId = useAppSelector(state => state.channel.channelId);
    const user = useAppSelector(state => state.user.user);

    const { subDocuments: messages } = useSubCollection("Channels", "messages");

    const sendMessage = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        console.log("send message");
        //Channlesコレクションにメッセージを格納する
        const collectionRef: CollectionReference<DocumentData> = collection(db, "Channels", String(channelId), "messages");

        const docRef: DocumentReference<DocumentData> = await addDoc(collectionRef, {
            message: inputText,
            timestamp: serverTimestamp(),
            user: user,
        });
        console.log(docRef);
        setInputText("");
    }

    const channelName = useAppSelector(state => state.channel.channelName);
    // console.log(channelName);
    return (
        <div className='chat'>
            <ChatHeader channelName={channelName} />

            <div className='chatMessage'>
                {messages.map((message, index) => (
                    <ChatMessage key={index}
                        message={message.message}
                        timestamp={message.timestamp}
                        user={message.user}
                    />
                ))}
            </div>

            <div className='chatInput'>
                <AddCircleOutlineIcon />
                <form action="">
                    <input type="text" placeholder='#udemyへのメッセージ' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} value={inputText} />
                    <button type='submit' className='chatInputButton' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => sendMessage(e)}>送信</button>
                </form>
                <div className='chatInputIcons'>
                    <CardGiftcardIcon />
                    <GifIcon />
                    <EmojiEmotionsIcon />
                </div>
            </div>
        </div>
    )
}

export default Chat;