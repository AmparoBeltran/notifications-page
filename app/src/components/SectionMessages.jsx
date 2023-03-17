import { SectionMessagesStyled } from "./styles/SectionMessages.styled"
import Message from "./Message"
import MessageInfo from './MessageInfo';

export default function SectionMessages({ notifications }) {
    return (
        <SectionMessagesStyled>
            {notifications.map((item, index) => (
                <Message key={index} read={item.read}>
                    <img src={`${item.avatar}`} alt="avatar" />

                    <MessageInfo item={item} />
                    {item.image && <img src={item.image} alt="chess image" />}
                </Message>

            ))}

        </SectionMessagesStyled>
    )
}

