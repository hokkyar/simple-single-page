import React, { useEffect, useState } from 'react'

export default function Contact(params) {
    const [title, setTitle] = useState('')
    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    
    useEffect(() => {
        params.data.map((e) => {
            setTitle(e.contact.title)
            setNama(e.contact.content.nama)
            setEmail(e.contact.content.email)
        })
        
    }, [])
    return (
        <div className='container'>
            <h2>{title}</h2>
            <p>Nama : {nama}</p>
            <p>Email : {email}</p>
        </div>
    )
}
