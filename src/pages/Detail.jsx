import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../component/Layout'
// import Table from '../component/Table'

const Detail = () => {

    const [loading, setLoading] = useState(true)
    
    const [data, setData] = useState({})
    const params = useParams()
    
    useEffect(() => {
        fetchDateData()
    }, [])
    
    const fetchDateData = () => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        const id = params.id

        fetch(`http://localhost:3000/data/${id}`, requestOptions)
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
            <>
                <Layout>
                    <h4 className='pt-4 pb-4'>Daftar Peserta interview</h4>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-6'>
                                <div>
                                    <h6>Tanggal Pelaksanaan</h6>
                                    <p>{data.tanggal_pelaksanaan}</p>
                                </div>
                                <div>
                                    <h6>Waktu Pelaksanaan</h6>
                                    <p>{data.waktu_awal_pelaksanaan} s/d {data.waktu_akhir_pelaksanaan} WIB</p>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div>
                                    <h6>Media</h6>
                                    <p>{data.media}</p>
                                </div>
                                <div>
                                    <h6>Tempat Pelaksanaan</h6>
                                    <p>{data.tempat_pelaksanaan}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>Nama Peserta</th>
                                <th>Tanggal Lahir</th>
                                <th>Pendidikan Terakhir</th>
                                <th>Link CV</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.peserta.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.nama}</td>
                                    <td>{item.tanggal_lahir}</td>
                                    <td>{item.pendidikan_terakhir}</td>
                                    <td>{item.link_cv}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Layout>
            </>
        )
    }

}

export default Detail;
