import { create } from 'zustand'

type MessageStoreType = {
    arr: string[]
    push: (msg: string) => void
}

const useSnackbarMessageStore = create<MessageStoreType>()(
    (set) => ({
        arr: [],
        push: (msg: string) => {
            // push arr
            set((state) => ({ arr: [...state.arr, msg] }))

            // pop arr
            setTimeout(() => {
                set((state) => ({ arr: state.arr.slice(1, state.arr.length) }))
            }, 3000);
        },
    })
)

export default useSnackbarMessageStore;