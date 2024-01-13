import { useEffect, useMemo, useState } from 'react'

enum Breakpoints {
  $xs = 599,
  $sm = 1023,
  $md = 1439,
  $lg = 1919,
}
export const useWindowDimension = () => {
  const [eventData, setEventData] = useState({ width: 0, height: 0 })

  const bingUIEvent = (event: UIEvent) => {
    setEventData({
      // @ts-ignore
      width: event.currentTarget?.innerWidth || 0,
      // @ts-ignore
      height: event.currentTarget?.innerHeight || 0,
    })
  }
  
  useEffect(() => {
    window.addEventListener('resize', bingUIEvent)
    
    return () => {
      window.removeEventListener('resize', bingUIEvent)
    }
  }, []);

  useEffect(() => {
    setEventData({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  return useMemo(() => {
    return {
      isXs: eventData.width <= Breakpoints.$xs,
      isSm: eventData.width <= Breakpoints.$sm,
    }
  }, [eventData.width])
}
