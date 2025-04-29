import { useEffect, useState } from 'react'
import { Nova_Mono } from "next/font/google";

const fugaz = Nova_Mono({
    variable: "--font-fugaz-sans",
    subsets: ["latin"],
    weight: "400"
  });

export default function Clock() {
  const [time, setTime] = useState<string>()

  useEffect(() => {

    setInterval(() => {

      const dateObject = new Date()

      const hour = dateObject.getHours()
      const minute = dateObject.getMinutes()
      const second = dateObject.getSeconds()

      const hourString = hour < 10 ? `0${hour}` : `${hour}`
      const minuteString = minute < 10 ? `0${minute}` : `${minute}`
      const secondString = second < 10 ? `0${second}` : `${second}`

      const currentTime = hourString + ':' + minuteString + ':' + secondString
      
      setTime(currentTime)
      
    }, 1000)

  }, [])

  return <div className=' w-96 h-40 grid  place-content-center animate-bounce'>
    <div className='w-100 h-32 bg-neutral-500 rounded-full grid  place-content-center rotate-x-25 rotate-z-6 transform-3d'>
        <div className='h-24 grid place-content-center w-92 animate-pulse space-x-1  bg-red-500 rounded-full '>
            <div className={`${fugaz.className} text-7xl   `}>{time}</div>
        </div>
        <span className='h-36 w-3 absolute bg-neutral-500 -top-32 right-24 rounded-full'></span>
    </div>
</div>
}