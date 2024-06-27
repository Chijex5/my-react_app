import React from 'react';
import { useNotifications } from './NotificationContext';

const AddNotification = () => {
  const { addNotification } = useNotifications();

  const handleAddNotification = () => {
    const newNotification = {
      id: Date.now(),
      sender: 'UniBook Exchange',
      message: 'New notification message',
      time: 'Just now',
      details: 'This is the details of the new notification.'
    };

    addNotification(newNotification);
  };

  return (
    <button onClick={handleAddNotification}>Add Notification</button>
  );
};

export default AddNotification;
