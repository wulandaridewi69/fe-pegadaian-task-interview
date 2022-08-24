import React from 'react'
import { useNavigate } from "react-router-dom"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Row = ({data, index, props }) => {
    
    const navigate = useNavigate()

    return (
        <tr>
            <td>{data.tanggal_pelaksanaan}</td>
            <td>{data.waktu_awal_pelaksanaan} s/d {data.waktu_akhir_pelaksanaan} WIB</td>
            <td>{data.media}</td>
            <td>{data.tempat_pelaksanaan}</td>
            <td>
                <div onClick={() => navigate(`../detail/${data.id}`)}>
                <RemoveRedEyeIcon/>
                </div>
            {data.aksi}
            </td>

        </tr>
    )

}
export default Row;