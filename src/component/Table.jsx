import React from 'react';
import Row from '../component/Row'
import Layout from './Layout';

const titles = ['Tanggal Pelaksanaan', 'Waktu Pelaksanaan', 'Media', 'Tempat Pelaksanaan', 'Aksi']

const Table = (props) => {
    return (
        <Layout>
            <table className='table table-dark mt-4 table-hover '>
                <thead>
                    <tr>
                        {titles.map(title => (
                            <td>{title}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item, index) =>(
                        <Row data={item} key={index}/>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
  }

export default Table;
