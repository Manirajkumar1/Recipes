import React, { useState } from 'react'
import Accordian from '../components/Accordian'

function MealPlanner() {
  const [activeId, setActiveId] = useState(false)
  return (
    <div>
      <Accordian activeId={activeId}  setActiveId={setActiveId}/>
    </div>
  )
}

export default MealPlanner