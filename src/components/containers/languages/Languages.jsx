import React, { useState } from 'react'
import langList from '../../../constants/languagesData'
import TabsLanguage from './TabsLanguage';



const Languages = () => {
  const [item, setItems] = useState(langList);

  const menuItems = [...new Set(langList.map((val) => val.category))]

  const filterItems = (cat) => {
    const newItems = langList.filter((newval) => newval.category === cat)
    setItems(newItems)
  }

  return (
    <div className="bg-color">
      <h2 className='text-center font-medium text-slate-200 text-xl text-font px-3 py-2  tracking-wide'>
        Languages and Frameworks
      </h2>
      <div className="container text-center mx-auto">

     
      <TabsLanguage
        filterItems={filterItems}
        menuItems={menuItems}
        setItems={setItems}
      /><br/>
      <div className='grid d-grid grid-cols-3 md:grid-cols-4 gap-4 tech-stack-icons place-content-center justify-items-center md:justify-items-start'>



        {item.map((item) => (

          <a data-aos="fade-right" key={item.name} href="#_" className=" relative inline-flex items-center justify-center p-4 px-9 py-6 overflow-hidden font-medium text-slate-200 border-2 border-slate-200 shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-slate-200 group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="#00164d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
              </path></svg>
              <p className='ml-2 text-color'>{item.name}</p>
            </span>
            <img src={item.image} alt="asd" width="50" height="50"/>
            <span className="relative invisible">{item.name}</span>
          </a>
        ))}
      </div>

      </div>
    </div>
  )
}

export default Languages