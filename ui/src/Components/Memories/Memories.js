import React from 'react'
import memoriesCSS from "./../Memories/Memories.module.css"
import MemoriesImg1 from "./../../Photos/travelport1.jpg"
import MemoriesImg2 from "./../../Photos/travelport2.jpg"
import MemoriesImg3 from "./../../Photos/travelport4.jpg"
import MemoriesImg4 from "./../../Photos/travelport3.jpg"
import MemoriesImg5 from "./../../Photos/travelport5.jpg"
import MemoriesImg6 from "./../../Photos/travelport6.jpg"
import MemoriesImg7 from "./../../Photos/travelport7.jpg"
const Memories = () => {
    return (
        <div className={`${memoriesCSS.Memories_wrapper} section`} id='memories'>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg1} alt='Memories-img'/>

                <div className={memoriesCSS.content}>
                    <h3>Abfahrten für kleine Gruppen</h3>
                    <a href='#'>Touren anzeigen</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg2} alt='Memories-img'/>

                <div className={memoriesCSS.content}>
                    <h3>Erschwingliche Träume</h3>
                    <a href='#'>Touren anzeigen</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg3} alt='Memories-img'/>

                <div className={memoriesCSS.content}>
                    <h3>unentdeckt Tours</h3>
                    <a href='#'>Touren anzeigen</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg4} alt='Memories-img'/>

                <div className={memoriesCSS.content}>
                    <h3>Lassen Sie unsere Experten schwenken <br/> Ihre Reise 2024 </h3>
                    <button>Touren anzeigen</button>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg5} alt='Memories-img'/>

                <div className={memoriesCSS.content}>
                    <h3>Religiöse Touren</h3>
                    <a href='#'>Touren anzeigen</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg6} alt='Memories-img'/>

                <div className={memoriesCSS.content}>
                    <h3>Alleinreisende</h3>
                    <a href='#'>Touren anzeigen</a>
                </div>
            </div>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg7} alt='Memories-img'/>

                <div className={memoriesCSS.content}>
                    <h3>Private Tour</h3>
                    <a href='#'>Touren anzeigen</a>
                </div>
            </div>
        </div>
    )
}

export default Memories
