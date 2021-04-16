import React, { useState } from 'react';
import HeartbeatService from '../services/heartbeat.service';

const DisplayInfo = (props) => {
  const service = new HeartbeatService();
  const [data, setData] = useState();

  function fetchData() {
    service.ping()
      .then(jsonResponse => setData(jsonResponse))
      .catch(error => {
        console.error(error);
        setData({ error: error });
      });
  }
  // if anyone fo these items change, recall fetchData
  React.useEffect(fetchData, []);

  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
};

export default DisplayInfo;
