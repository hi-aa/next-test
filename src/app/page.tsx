'use client'
import { getBirds } from "@/api/bird-api";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  // export default function Home() {
  // const test = ['product', 'magazine', 'test']
  // let test;
  const [test2, setTest2] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      // test = '23233'
      setTest2(false)
      console.log('완료  test', test2)
      // console.log('완료', test && '23')
    }, 2000);
  }, [])

  return (
    <main>
      <button onClick={() => { setTest2((prev) => !prev) }}>toggle</button>
      <br />
      {test2 ? `여기는 메인11` : '22'}
    </main>
  );
}

export default Home;