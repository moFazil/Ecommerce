import React from 'react'
import { MainCarousel } from '../../components/homeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/homeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/Mens_Kurta'

export const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className=' space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurtha"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoe"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Womens Section"}/>

        </div>
    </div>
  )
}
