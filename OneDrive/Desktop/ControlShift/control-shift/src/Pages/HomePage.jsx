import React from 'react'
import EngeeneringExpertise from '../Components/EngeeneringExpertise'
import AboveFooterScreen from '../Screens/AboveFooterScreen'
import BenefitRenderScreen from '../Screens/BenefitRenderScreen'
import PeopleReviewRenderScreen from '../Screens/PeopleReviewRenderScreen'
import SpecificationRenderScreen from '../Screens/SpecificationRenderScreen'
import TeamMemberScreen from '../Screens/TeamMemberScreen'

const HomePage = () => {
  return (
    <div>
      <BenefitRenderScreen/>
      <EngeeneringExpertise/>
      {/* <PeopleReviewRenderScreen/>
      <SpecificationRenderScreen/>
      <TeamMemberScreen/>
      <AboveFooterScreen/> */}
    </div>
  )
}

export default HomePage
