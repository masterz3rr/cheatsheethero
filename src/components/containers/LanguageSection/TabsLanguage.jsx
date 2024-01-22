import React from 'react'
import langList from '../../../constants/languagesData'

const TabsLanguage = ({menuItems, filterItems, setItems}) => {
  return (
    <div>
        <button className='bg-slate-200 text-indigo-900 mx-6' onClick={() => {setItems(langList);}}>
            all
        </button>
        {
            menuItems.map(val => (
                <button key={val} className='bg-slate-200 text-indigo-900 mx-6' onClick={() => {filterItems(val);}}>
                    {val}
                </button>
            ))
        }
    </div>
  )
}

export default TabsLanguage