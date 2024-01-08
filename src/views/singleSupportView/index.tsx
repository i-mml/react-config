import React from 'react'
import s from './style.module.scss';
import ChatListItem from './components/chatListItem';
import { useQuery } from 'react-query';
import { getMessageAll } from '../../api/services/messages';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';

const SingleSupportView = () => {
    const params = useParams()
    const { data, isLoading } = useQuery("single-tickets-list", () => getMessageAll(`ticket_id=${params?.chatId}`));


    return (
        <div className={s.container}>
            <div className={s.chatNumber}>
                تیکت شماره {params?.id}
            </div>
            <div className={s.subTitle}>
                این سابقه گفتگوی شما با نت پورت می باشد
            </div>

            <div className={s.chatList}>
                {isLoading ? <div className={s.spinnerBox}><Spinner color='primary' /></div> : data?.data?.length > 0 ? data?.data?.map((item: any) => <ChatListItem {...item} userFullName={data?.info?.user_name} />) : <div className={s.notFound}>
                    موردی یافت نشد.
                </div>}
            </div>
        </div>
    )
}

export default SingleSupportView