import React from 'react'
import s from './style.module.scss';

const ChatListItem = (props: any) => {
    const { id, ticketId, userId, message, userFullName } = props
    return (
        <div className={`${s.chatWrapper} ${userId !== 184 && s.recievedWrapper}`} key={id}>
            <div className={`${s.chatItem} ${userId === 184 ? s.ownMsg : s.recievedMsg}`}>
                {message}
            </div>
            {
                userId === 184 &&
                <div className={s.username}>
                    ارسال شده از طرف {userFullName}
                </div>
            }
        </div>
    )
}

export default ChatListItem