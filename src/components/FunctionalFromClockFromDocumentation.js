import React, {useState, useEffect} from 'react'

export const FunctionalClock = () => {
    const [time, setTime] = useState();
    useEffect(() => {
        const nowTime = setInterval(() => {
            const date = new Date();
             const carentTime = date.toLocaleTimeString();
             setTime(carentTime)
        },
            1000);
                return () => {
                  clearInterval(nowTime)
                }
    }, [])

  return (
      <div>
          <h2>Привіт, світе!</h2>
      Зараз: {time}
    </div>
  )
}
