'use client'

import useSnackbarMessageStore from '@/store/snackbarStore'
import { useState } from 'react'
import { useFormState } from 'react-dom'
import { z } from 'zod'

export default function Product() {
  const User = z.object({
    id: z.string().min(3, { message: '아이디는 3자 이상' }),
    pw: z.string().min(1, { message: '패스워드는 1자 이상' })
  })
  type UserType = z.infer<typeof User>

  const test = (formData: FormData) => {
    const validated = User.safeParse({ id: formData?.get('id'), pw: formData?.get('pw') })

    if (validated.success) {
      push('validated success')
      // console.log('validated success')
    } else {
      push('validated fail:: ' + validated.error.issues?.[0].message)
      // console.log('validated fail:: ', validated.error.issues?.[0].message)
    }
  }

  const { push } = useSnackbarMessageStore()
  const [message, setMessage] = useState<string>('')

  const addMessage = () => {
    if (!message) {
      alert('Empty message')
      return
    }

    push(message)
    setMessage('')
  }

  return <>
    Product 페이지
    <div>
      <form action={test}>
        <input name="id" />
        <input name="pw" type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
    <br />

    <hr />
    <input value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => { if (e.key === 'Enter') addMessage() }}
    />
    <button onClick={addMessage}>add snackbar</button>

    <div>

    </div>
  </>
}