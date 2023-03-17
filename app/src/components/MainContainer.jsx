import Header from './Header';
import SectionMessages from './SectionMessages';
import { MainContainerStyled } from './styles/MainContainer.styled';
import { data } from "../data"
import { useState, useMemo } from 'react';


export default function MainContainer() {
    const [notifications, setNotifications] = useState(data)
    const unReadCount = useMemo(() => {
        return notifications.filter(item => {
            return (
                item.read === false
            )
        }).length
    }, [notifications])
    const markAllAsRead = () => {
        setNotifications((notifications) => {
            return notifications.map(item => {
                item.read = true
                return item
            })
        })
    }
    return (
        <MainContainerStyled>
            <Header markAllAsRead={markAllAsRead} unReadCount={unReadCount} />
            <SectionMessages notifications={notifications} />
        </MainContainerStyled>
    )
}