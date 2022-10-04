import React, { useEffect, useState } from 'react'

export default function Projects(params) {
    const [data, setData] = useState([])

    function getData() {
        params.data.map((values) => {
            setData(values.projects)
        })
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className='container'>
            <h2>{data.title}</h2>
            <p>{data.content}</p>
        </div>
    )
}
