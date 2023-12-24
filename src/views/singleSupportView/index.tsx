import React from 'react'
import s from './style.module.scss';
import ChatListItem from './components/chatListItem';
import { useQuery } from 'react-query';
import { getMessageAll } from '../../api/services/messages';
import { useParams } from 'react-router-dom';

const SingleSupportView = () => {
    const params = useParams()
    const { data, isLoading } = useQuery("single-tickets-list", () => getMessageAll(`ticket_id=${params?.id}`));

    const chats = [
        { id: 1, userFullName: "حمیدرضا", ticketId: 65233, userId: 184, message: "سلام این نسخه آزمایشی می باشد ." },
        { id: 2, userFullName: "حمیدرضا", ticketId: 65233, userId: 185, message: "سلام این نسخه جواب آزمایشی می باشد .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
        { id: 3, userFullName: "حمیدرضا", ticketId: 65233, userId: 184, message: "سلام این نسخه آزمایشی می باشد ." },
        { id: 4, userFullName: "حمیدرضا", ticketId: 65233, userId: 185, message: "سلام این نسخه جواب آزمایشی می باشد .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
        { id: 5, userFullName: "حمیدرضا", ticketId: 65233, userId: 184, message: "سلام این نسخه جواب آزمایشی می باشد .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
        { id: 6, userFullName: "حمیدرضا", ticketId: 65233, userId: 185, message: "سلام این نسخه آزمایشی می باشد ." },
        { id: 7, userFullName: "حمیدرضا", ticketId: 65233, userId: 184, message: "سلام این نسخه جواب آزمایشی می باشد .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه د استفاده قرار گیرد." },
    ]

    console.log(data)
    return (
        <div className={s.container}>
            <div className={s.chatNumber}>
                تیکت شماره {params?.id}
            </div>
            <div className={s.subTitle}>
                این سابقه گفتگوی شما با سبیان می باشد - این نسخه تنها جهت اطلاع رسانی است.
            </div>

            <div className={s.chatList}>
                {data?.length > 0 ? data?.map((item: any) => <ChatListItem {...item} />) : <div className={s.notFound}>
                    موردی یافت نشد.
                </div>}
            </div>
        </div>
    )
}

export default SingleSupportView