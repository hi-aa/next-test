// 'use client'

import { getBirds } from "@/api/bird-api"
import { Bird } from "@/type/bird-code";
import { Suspense, useEffect, useState } from "react"
import List from "./list";

export default function Page({ params }: { params: { test2: string } }) {
  // const [birds, setBirds] = useState<Bird[]>([]);

  // useEffect(() => {
  //   try {
  //     getBirds().then(res => {
  //       setBirds(res)
  //     })
  //   } catch (e) {
  //     console.log('catch')
  //     throw new Error('Failed to test');
  //   }
  // }, [])
  // const birds = await getBirds()

  return <div>
    My Post
    <br />
    params: {params.test2}
    <br /><br />
    {/* api test: {
      birds.map((v, i) => {
        return <div key={i}>{v.id} / {v.name}</div>
      })
    } */}
    <Suspense fallback={<div>Loading...</div>}>
      <List />
    </Suspense>
  </div>
}