import React, { useEffect, useState } from 'react';
import Table from '../component/Table';
import Layout from '../component/Layout';

const App = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAllData();
  }, [])

  const fetchAllData = (tanggal_pelaksanaan) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://localhost:3000/data`, requestOptions)
      .then(response => response.json())
      .then((result) => {
        setData(result)
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  }

  if (loading) {
    return (loading)
    } else {
    return (

      <Layout >
        <h4 className='pt-4 pb-4'>List Jadwal Interview Frontend</h4>
        <Table data={data} />
      </Layout>

    )
  }
}

export default App;