import React, { useEffect, useState } from 'react'

const Work = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("Resourses/resoursesData.json")
      .then(res => res.json())
      .then(data => setdata(data.Worksheets));
  }, []);

  console.log(data);
  
  return (
    <div>
 <div className="tapdata grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4  items-center gap-10 pt-20 px-5">
 {data.map(item => (
        <img key={item.id} src={item.img} alt="Work" />
      ))}

      </div>
     
    </div>
  )
}

export default Work