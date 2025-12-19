import React from 'react'
import EventBanner from "@/components/sections/EventBanner";
import RecentEvents from '@/components/sections/RecentEvents';
import ImageMarquee from '@/components/sections/ImageMarquee';

const page = () => {
  return (
    <div>
          <EventBanner />
          <RecentEvents />
          <ImageMarquee
            images={["/images/space1.jpg", "/images/space2.jpg", "/images/space3.jpg", "/images/space4.jpg", "/images/space5.jpg"]}
            height={180}
          />
    </div>
  )
}

export default page
