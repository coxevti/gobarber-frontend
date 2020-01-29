import React from 'react';

import { MdNotifications } from 'react-icons/md';
import {
    Container,
    Badge,
    NotificationList,
    Scroll,
    Notification,
} from './styles';

export default function Notifications() {
    return (
        <Container>
            <Badge hasUnread>
                <MdNotifications color="#7159c1" size={20} />
            </Badge>
            <NotificationList>
                <Scroll>
                    {[1, 2, 3, 4, 5, 6].map(item => (
                        <Notification key={item} unread>
                            <p>Você possui um novo agendamento para amanhã</p>
                            <time>há 2 dias</time>
                            <button type="button">Marcar como lida</button>
                        </Notification>
                    ))}
                </Scroll>
            </NotificationList>
        </Container>
    );
}
