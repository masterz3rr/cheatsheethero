import React from 'react'
import './fields.css'

const fieldslist = [
    { name: 'FrontEnd Development', description: 'sample' },
    { name: 'Full Stack Development', description: 'sample' },
    { name: 'Mobile Development', description: 'sample' },
]

const Fields = () => {
    return (
        <>
            <div className="bg-color">
                <div className='border-t border-dashed border-amber-400' />
                <div className="container grid place-content-center mx-auto px-40 text-center py-12">
                    <h2 className='text-center font-medium text-slate-200 text-xl text-font px-3 py-2  tracking-wide'>
                       Specialization
                    </h2>
                </div>
                <div className="container mx-auto grid px-40 grid-cols-3  gap-8 pb-24">

                    {fieldslist.map((item) => (
                        
                        <a key={item.name} href="#_" className="relative inline-flex items-center justify-center p-4 px-9 py-6 overflow-hidden font-medium text-slate-200 transition duration-300 ease-out border-2 border-slate-200 shadow-md group">
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-slate-200 group-hover:translate-x-0 ease">
                            <svg className="w-6 h-6" fill="none" stroke="#00164d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                                </path></svg>
                                <p className='ml-2 text-color'>Open</p>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-slate-200 transition-all duration-300 transform group-hover:translate-x-full ease">{item.name}</span>
                        <span className="relative invisible">{item.name}</span>
                    </a>
                    ))}

                </div>
            </div>
        </>
    )
}

export default Fields