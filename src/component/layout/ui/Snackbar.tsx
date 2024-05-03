'use client'

import './ui.css'
import useSnackbarMessageStore from '@/store/snackbarStore'

export default function Snackbar() {
    const { arr: message } = useSnackbarMessageStore()

    return <div className="snackbar-container">
        {message.map((v, i) => <div key={i} className="snackbar">{v}</div>)}
    </div>
}
