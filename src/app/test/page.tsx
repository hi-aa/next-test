'use client'

import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import './styles.css'
import React, { Suspense, useState } from 'react'
import { getBirds } from '@/api/bird-api'

export default function Test2() {
  const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>
    <Test />
  </QueryClientProvider>
}

function Test() {
  const [limit, setLimit] = useState<number>(5)

  return <>
    <div>
      <h2>테이블 만들어요</h2>
      Limit: {limit}
      &nbsp;&nbsp;
      <button onClick={() => setLimit((prev) => ++prev)}>limit+</button>
      <button onClick={() => setLimit((prev) => --prev)}>limit-</button>
    </div>

    <table style={{ height: '200px' }}>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
          <th>Country</th>
          <th>Country</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <Suspense key={limit} fallback={
          <tr>
            <td colSpan={6}>Loading....</td>
          </tr>
        }>
          <Test3 limit={limit} />
        </Suspense>
      </tbody>
    </table>
  </>
}

async function Test3({ limit }: { limit: number }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData22', limit],
    queryFn: () => getBirds(limit).then((res) => res),
  })

  return <>{data?.map((v, i) => <tr key={i}>
    <td>{v.id}</td>
    <td>{v.name}</td>
    <td>{v.species}</td>
    <td>{v.family}</td>
    <td>{v.habitat}</td>
    <td>{v.place_of_found}</td>
  </tr>)}</>
}

