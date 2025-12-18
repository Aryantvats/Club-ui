import PodcastOfTheWeek from '@/components/sections/PodcastOfTheWeek'
import Podcasts from '@/components/sections/Podcasts'
import React from 'react'

const page = () => {
  return (
    <div>
        <Podcasts />
        <PodcastOfTheWeek/>  
    </div>
  )
}

export default page
