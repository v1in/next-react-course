import {useContext} from 'react';
import NotificationContext from '../../store/notification-store';
import Notification from '../ui/Notification';
import MainHeader from './MainHeader';

export default function MainLayout(props) {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <>
      <MainHeader />
      <main style={{paddingBottom: '5rem'}}>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
}
