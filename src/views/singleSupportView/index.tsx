import React, { useState } from 'react'
import s from './style.module.scss';
import ChatListItem from './components/chatListItem';
import { useQuery } from 'react-query';
import { getMessageAll, postMessageCreate } from '../../api/services/messages';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Spinner } from 'reactstrap';

const SingleSupportView = () => {
    const params = useParams()
    const user = useSelector((state: any) => state?.auth?.data?.user);
    const { data, isLoading, refetch } = useQuery("single-tickets-list", () => getMessageAll(`ticket_id=${params?.chatId}`));
    const [messageValue, setMessageValue] = useState('');
    const [loading, setLoading] = useState(false)

    const hanldeSendMessage = async () => {
        setLoading(true)
        const formData = new FormData()
        formData.append("content", messageValue)
        formData.append("sender", user?.user_id)
        formData.append("ticket_id", `${params?.chatId}`)
        formData.append("type", "t")

        postMessageCreate(formData).then(() => {
            refetch();
            setMessageValue("")
            setLoading(false)

        })?.catch(err => console.log(err))

    }

    return (
        <div className={s.container}>
            <div className={s.chatNumber}>
                تیکت شماره {params?.chatId}
            </div>
            <div className={s.subTitle}>
                این سابقه گفتگوی شما با نت پورت می باشد
            </div>

            <div className={s.chatList}>
                {isLoading ? <div className={s.spinnerBox}><Spinner color='primary' /></div> : data?.data?.length > 0 ? data?.data?.map((item: any) => <ChatListItem {...item} userFullName={data?.info?.user_name} />) : <div className={s.notFound}>
                    موردی یافت نشد.
                </div>}
            </div>
            <div className={s.sendInputBox}>
                <textarea
                    value={messageValue} onChange={(e) => setMessageValue(e.target.value)}
                    className={s.textArea} rows={1} placeholder='متن پیام خود را وارد کنید.'
                    disabled={loading}
                />

                {
                    loading ?
                        <Spinner color='info' /> :
                        <img alt='send' className={s.sendbtn} src="/images/icons/send.svg" onClick={loading ? () => { } : () => hanldeSendMessage()} />
                }
            </div>
        </div>
    )
}

export default SingleSupportView