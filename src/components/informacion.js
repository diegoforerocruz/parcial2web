import React, { useState, useEffect } from 'react'
import TableData from './tableData'
import 'bootstrap/dist/css/bootstrap.min.css';

function Informacion(props) {
    const [tableData, setData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const URL = props.urls
            const res = await (await fetch(URL)).json()

            let actualData = []
            res.map(d => {
                let newObj = {
                    "id": d.id,
                    "Name": d.name,
                    "Channel":d.channel,
                    "Description":d.description               
                }
                actualData.push(newObj)
                
                return d
            })
  
            setData(actualData)
        }
        fetchData()
    }, [])


    function render() {
        if (tableData.length > 0) {
            return (
                <TableData
                    data={tableData}
                />
                
            )
            
        } else {
            return (
                <div>
                    <p>Algo pasó</p>
                </div>
            )
        }
        
        
    }

    return render()
}

export default Informacion