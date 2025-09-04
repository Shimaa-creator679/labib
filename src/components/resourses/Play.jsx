import React, { useEffect, useState } from 'react'

const Play = () => {
  const [data, setdata] = useState([]);

      useEffect(() => {
        fetch("/resoursesData.json")
          .then(res => res.json())
          .then(data => setdata(data.Play));
      }, []);

  return (
 <div>
      <div className="grid  place-items-center py-10">
 {data.map(item => (
        <img key={item.id} src={item.img} alt="Work" className='w-1/2' />
      ))}

      </div>
     
    </div>
  )
}

export default Play