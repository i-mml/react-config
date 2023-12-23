import React from 'react'
import s from './style.module.scss';
import ChatListItem from './components/chatListItem';

const SingleSupportView = () => {
    const chats = [
        { id: 1, userFullName: "حمیدرضا", ticketId: 65233, userId: 184, message: "سلام این نسخه آزمایشی می باشد ." },
        { id: 2, userFullName: "حمیدرضا", ticketId: 65233, userId: 185, message: "سلام این نسخه جواب آزمایشی می باشد .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
        { id: 3, userFullName: "حمیدرضا", ticketId: 65233, userId: 184, message: "سلام این نسخه آزمایشی می باشد ." },
        { id: 4, userFullName: "حمیدرضا", ticketId: 65233, userId: 185, message: "سلام این نسخه جواب آزمایشی می باشد .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
        { id: 5, userFullName: "حمیدرضا", ticketId: 65233, userId: 184, message: "سلام این نسخه جواب آزمایشی می باشد .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
        { id: 6, userFullName: "حمیدرضا", ticketId: 65233, userId: 185, message: "سلام این نسخه آزمایشی می باشد ." },
        { id: 7, userFullName: "حمیدرضا", ticketId: 65233, userId: 184, message: "سلام این نسخه جواب آزمایشی می باشد .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
    ]
    return (
        <div className={s.container}>
            <div className={s.chatNumber}>
                تیکت شماره 65233
            </div>
            <div className={s.subTitle}>
                این سابقه گفتگوی شما با سبیان می باشد - این نسخه تنها جهت اطلاع رسانی است.
            </div>

            <div className={s.chatList}>
                {chats?.map(item => <ChatListItem {...item} />)}
            </div>
        </div>
    )
}

export default SingleSupportView