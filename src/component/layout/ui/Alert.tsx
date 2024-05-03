'use client'

import { useState } from 'react'
import './ui.css'

export default function Alert({ message }: { message: React.ReactNode }) {
    const [open, setOpen] = useState(true)

    return open ? <div className="alert">
        <span className="closebtn" onClick={() => setOpen(prev => !prev)}>&times;</span>
        <strong>{message}</strong>
    </div> : <></>

}