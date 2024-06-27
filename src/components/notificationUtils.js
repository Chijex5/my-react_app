// notificationUtils.js
export const createNotification = (newNotification, setNotifications) => {
    setNotifications(prevNotifications => [
      ...prevNotifications,
      { id: prevNotifications.length + 1, ...newNotification }
    ]);
  };
  