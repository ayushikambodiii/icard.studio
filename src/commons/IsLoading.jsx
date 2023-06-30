import React, { useState, useEffect } from 'react';

function FriendStatus({vala}) {
  const [isOnline, setIsOnline] = useState(vala);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    console.log(">>>>>>>>>>>>>",handleStatusChange);
    return () => {
        console.log("<<<<<<<<<<<<<<<<",handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

export default FriendStatus