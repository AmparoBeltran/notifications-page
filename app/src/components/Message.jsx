import { MessageStyled } from "./styles/Message.styled";

export default function Message({ children, read }) {
    return (
        <MessageStyled read={read}>
            {children}

        </MessageStyled>
    )
}