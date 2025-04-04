import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
        <div className="flex flex-col justify-center items-center gap-4 mt-40">
          <Image
            src={"Under construction-bro.svg"}
            alt="PAGE UNDER CONSTRUCTION!"
            height={300}
            width={300}
          />
          <h3>🌿 This page is still a seedling—give it some time to bloom!</h3>
        </div>
  )
}

export default AboutPage