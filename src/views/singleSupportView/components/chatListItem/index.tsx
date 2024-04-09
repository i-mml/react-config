import React from 'react'
import s from './style.module.scss';
import { useSelector } from 'react-redux';

const ChatListItem = (props: any) => {
    const auth = useSelector((state: any) => state?.auth?.data?.user)
    const { id, ticketId, sender, content, userFullName, last_name, first_name } = props

    return (
        <div className={`${s.chatWrapper} ${auth?.user_id === sender && s.recievedWrapper}`} key={id}>
            <div className={`${s.chatItem} ${auth?.user_id !== sender ? s.recievedMsg : s.ownMsg}`}>
                {content}
            </div>
            {
                auth?.user_id !== sender &&
                <div className={s.username}>
                    ارسال شده از طرف {last_name} {first_name}
                </div>
            }
        </div>
    )
}

export default ChatListItem