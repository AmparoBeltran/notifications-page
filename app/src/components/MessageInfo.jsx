import { MessageInfoStyled, Author, Title, UnRead, Time } from "./styles/MessageInfo.styled";
import { PrivateMessageStyled } from "./styles/PrivateMessage.styled";

export default function MessageInfo({ item: { author, action, title, time, message, read } }) {
    return (
        <MessageInfoStyled>
            <p><Author>{author} </Author> {action} <Title> {title}</Title> {!read && <UnRead />}</p>

            <Time>{time}</Time>

            {message && <PrivateMessageStyled>{message}</PrivateMessageStyled>}


        </MessageInfoStyled>
    )
}