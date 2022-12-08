import React from 'react'
import {FaUserGraduate,FaGraduationCap } from 'react-icons/fa';
import {HiOutlineDesktopComputer} from 'react-icons/hi'

import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'

const Timeline = () => {
  return (
    <div className=" w-full md:h-screen bg-[#0a192f] text-gray-300 ">
        <div className="max-w-[1000px]  mx-auto p-6 w-full flex flex-col justify-center h-full">
          <div className="pb-4 ">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Education & Experience
          </p>
          </div>
          <div className='w-full'>
            <VerticalTimeline lineColor='rgb(219 39 119)'>
           
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(29 78 216)', color: 'rgb(209 213 200)' }}
    contentArrowStyle={{ borderRight: '7px solid rgb(29 78 216)' }}
    date="2020 - present"
    iconStyle={{ background: 'rgb(219 39 119)', color: 'rgb(209 213 219)' }}
    icon={<HiOutlineDesktopComputer/>}
  >
    <h3 className="vertical-timeline-element-title font-bold">Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Accenture Solutions Pvt Ltd.</h4>
    <p>
     Software development,Project Management, Team work,User support.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(29 78 216)', color: 'rgb(209 213 219)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(29 78 216)' }}
    date="2016 - 2020"
    iconStyle={{ background: 'rgb(219 39 119)', color: 'rgb(209 213 219)' }}
    icon={<FaUserGraduate/>}>
    <h3 className="vertical-timeline-element-title font-bold">National Institute of Engineering (NIE)</h3>
    <h4 className="vertical-timeline-element-subtitle">Mysore</h4>
    <p>
       Completed Bachelor of Engineering in Electronics and Communication.
    </p>
         </VerticalTimelineElement>
         <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(29 78 216)', color: 'rgb(209 213 219)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(29 78 216)' }}
    date="2014 - 2016"
    iconStyle={{ background: 'rgb(219 39 119)', color: 'rgb(209 213 219)' }}
    icon={<FaGraduationCap/>}>
    <h3 className="vertical-timeline-element-title font-bold">Alva's PU college</h3>
    <h4 className="vertical-timeline-element-subtitle">Mangaluru</h4>
    <p>
      Completed Pre-university education in PCMB.
    </p>
         </VerticalTimelineElement>
             </VerticalTimeline>

        </div>
       </div>
      
    </div>
  )
}

export default Timeline
