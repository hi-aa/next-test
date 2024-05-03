import { Bird } from "@/type/bird-code"

export const getBirds = async (limit = 50): Promise<Bird[]> => {
  const res = await fetch(`https://freetestapi.com/api/v1/birds?limit=${limit}`)
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
  const data: Bird[] = await res.json()

  return (data || []) as Bird[]
}