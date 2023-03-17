import { HeaderStyled, Notifications } from "./styles/Header.styled"

export default function Header({ markAllAsRead, unReadCount }) {
    return (
        <HeaderStyled>
            <Notifications>
                <h1>Notifications</h1>
                <span><p>{unReadCount}</p></span>
            </Notifications>
            <button onClick={markAllAsRead}>Mark all as read</button>
        </HeaderStyled>
    )
}