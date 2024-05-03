// 'use client'

import { getBirds } from "@/api/bird-api"
import { Bird } from "@/type/bird-code";
import { useEffect, useState } from "react";

export default async function List() {
    const birds = await getBirds()

    // const [birds, setBirds] = useState<Bird[]>([]);

    // useEffect(() => {
    //     try {
    //         getBirds().then(res => {
    //             setBirds(res)
    //         })
    //     } catch (e) {
    //         console.log('catch')
    //         throw new Error('Failed to test');
    //     }
    // }, [])

    return (
        <>
            {birds.map((v, i) => {
                return <div key={i}>{v.id} / {v.name}</div>
            })}
        </>
    )
}