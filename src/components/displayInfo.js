import React, { useState } from 'react';

const DisplayInfo = (props) => {
  const blah = process.env.REACT_APP_BACKEND_API;

  const [data, setData] = useState();

  function fetchData() {
    fetch(blah + '/info', {
      method: 'GET',
    })
      .then(responseFromApi => {
        return responseFromApi.json();
      })
      .then(json => setData(json))
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
