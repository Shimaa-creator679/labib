import React, { useEffect, useState } from 'react'

import Resourse_tap from './Resourse_tap'
import Title from '../sharedComponent/Title'
import Watch from './Watch'
import Work from './Work'
import Color from './Color'
import Play from './Play'
import Draw from './Draw'
import Read from '../Read'
const taps_data=[
    {
        id:1,
        content:"Watch",
        icon: "/play.png"
    },
    {
        id:2,
        content:"Worksheets",
        icon: "/pencil.png"
    },
    {
        id:3,
        content:"Play",
        icon: "/science.png"
    },
    {
        id:4,
        content:"Draw",
        icon: "/pencil.png"
    },
    {
        id:5,
        content:"Color",
        icon: "/palette.png"
    },
    {
        id:6,
        content:"Read",
        icon: "/science.png"
    }
]

const Resourses = () => {
    const [state,setstate]=useState("Watch")

    // const[tapData,settapData]=useState([])

    // useEffect(()=>{
    //     const fetchdata= async()=>{
    //         const data=await fetch("/resoursesData.json")
    //         const json=await data.json()
    //         settapData(json[state])
    //     }
    //     fetchdata()
    // },[state])

  return (
    <div className='pb-40'>
        <div className="container">
            <Title title={"Educational resources"}/>
            <div className="taps grid lg:grid-cols-6 grid-cols-2 md:grid-cols-3 gap-5 pt-10 px-5">
                {taps_data.map((tap) => {
                    return <Resourse_tap key={tap.id} content={tap.content} icon={tap.icon} setstate={setstate} state={state} />;
                })}


            </div>




<div className="content px-10">
{state==="Watch"&&<Watch />}

{state==="Worksheets"&&<Work />}
{state==="Play"&&<Play/> }

{state==="Draw"&&<Draw/> }
{state==="Color"&&<Color/> }
{state==="Read"&&<Read/> }

</div>








        </div>
    </div>
  )
}

export default Resourses