import React from 'react'
import Navbar from '../../navbar/Navbar'

const Header = () => {
    return (
        <>
            <Navbar />
            <div className="relative bg-color">
                <div className="container mx-auto px-40">
                    <div className="grid place-content-center text-center py-24">
                        <h1 className='text-7xl text-amber-400 font-semibold base-font tracking-wider'>CheatSheet Hero</h1>
                        <p className='text-slate-400 font-light text-font'>Unlock Your Inner Developer: A Learning Adventure Awaits!</p><br />
                        <p className='text-slate-300 text-font'>No more aimless googling! This website will light your path to coding mastery. Choose your programming quest, unearth a goldmine of tutorials and resources, and level up your skills in epic style.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header