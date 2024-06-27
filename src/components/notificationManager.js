// notificationManager.js
import { useState } from 'react';

let notifications = [
  {
    id: 1,
    sender: 'UniBook Exchange',
    message: 'New book "Introduction to Computer Science" is now available!',
    time: '10:00 AM',
    details: 'We are excited to announce that the new book "Introduction to Computer Science" is now available in our store. Check it out now!'
  },
  {
    id: 2,
    sender: 'UniBook Exchange',
    message: 'Your order #123456 has been shipped and will arrive by Friday.',
    time: 'Yesterday',
    details: 'Your order #123456 has been shipped and will arrive by Friday. You can track your order using the tracking number provided in your order history.'
  },
  {
    id: 3,
    sender: 'UniBook Exchange',
    message: 'Your profile information has been updated successfully.',
    time: '2 days ago',
    details: 'Your profile information has been updated successfully. You can view your updated profile information in the profile section of our app.'
  }
];

export const useNotificationManager = () => {
  const [notificationList, setNotificationList] = useState(notifications);

  const addNotification = (newNotification) => {
    setNotificationList([
      ...notificationList,
      { ...newNotification, id: notificationList.length + 1, time: new Date().toLocaleString() }
    ]);
  };

  const deleteNotification = (id) => {
    setNotificationList(notificationList.filter(notification => notification.id !== id));
  };

  return { notificationList, addNotification, deleteNotification };
};
