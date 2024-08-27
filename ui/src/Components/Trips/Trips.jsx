import React from 'react'
import TripCSS from "./../Trips/Trips.module.css"
import trip01 from "../../Photos/Trips01.jpg"
import trip02 from "../../Photos/Trips02.jpg"
import trip03 from "../../Photos/Trips03.jpg"
import trip04 from "../../Photos/Trips04.jpg"
import trip05 from "../../Photos/Trips05.jpg"
import trip06 from "../../Photos/Trips06.jpg"
import trip07 from "../../Photos/Trips07.jpg"
import trip08 from "../../Photos/Trips08.jpg"

const Trips = () => {
  return (
    <div className={`${TripCSS.trips_wrapper} section`} id='trips'>    
      <h2>Beliebte Ausflüge</h2>
      <div className={TripCSS.cards}>
        <div className={TripCSS.card}>
        <img src={trip01} alt="" />
        <div className={TripCSS.TripContent}>
          <div className={TripCSS.rating}>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
          </div>
          <h3>Australia Panorma</h3>

          <div className={TripCSS.TripDetails}>
            <span><i className='ri-calendar-line'></i> 7 Tag</span>
            <span><i className='ri-map-pin-line'></i> 5 Platz</span>
            <span><i className='ri-flag-line'></i> Australia</span>
          </div>
          <div className={TripCSS.Pricing}>
            <span className={TripCSS.price}> $1,200</span>
            <button className={TripCSS.book}>Jetzt buchen</button>
          </div>
        </div>
      </div>
        <div className={TripCSS.card}>
        <img src={trip02} alt="" />
        <div className={TripCSS.TripContent}>
          <div className={TripCSS.rating}>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
          </div>
          <h3>Best Of Spain </h3>

          <div className={TripCSS.TripDetails}>
            <span><i className='ri-calendar-line'></i> 5 Tag</span>
            <span><i className='ri-map-pin-line'></i> 15 Platz</span>
            <span><i className='ri-flag-line'></i> Australia</span>
          </div>
          <div className={TripCSS.Pricing}>
            <span className={TripCSS.price}> $1,800</span>
            <button className={TripCSS.book}>Jetzt buchen</button>
          </div>
        </div>
      </div>
        <div className={TripCSS.card}>
        <img src={trip03} alt="" />
        <div className={TripCSS.TripContent}>
          <div className={TripCSS.rating}>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
          </div>
          <h3>Australia Panorma</h3>

          <div className={TripCSS.TripDetails}>
            <span><i className='ri-calendar-line'></i> 7 Tag</span>
            <span><i className='ri-map-pin-line'></i> 5 Platz</span>
            <span><i className='ri-flag-line'></i> Australia</span>
          </div>
          <div className={TripCSS.Pricing}>
            <span className={TripCSS.price}> $1,200</span>
            <button className={TripCSS.book}>Jetzt buchen</button>
          </div>
        </div>
      </div>
        <div className={TripCSS.card}>
        <img src={trip04} alt="" />
        <div className={TripCSS.TripContent}>
          <div className={TripCSS.rating}>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
          </div>
          <h3>Australia Panorma</h3>

          <div className={TripCSS.TripDetails}>
            <span><i className='ri-calendar-line'></i> 7 Tag</span>
            <span><i className='ri-map-pin-line'></i> 5 Platz</span>
            <span><i className='ri-flag-line'></i> Australia</span>
          </div>
          <div className={TripCSS.Pricing}>
            <span className={TripCSS.price}> $1,200</span>
            <button className={TripCSS.book}>Jetzt buchen</button>
          </div>
        </div>
      </div>
        <div className={TripCSS.card}>
        <img src={trip05} alt="" />
        <div className={TripCSS.TripContent}>
          <div className={TripCSS.rating}>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
          </div>
          <h3>Australia Panorma</h3>

          <div className={TripCSS.TripDetails}>
            <span><i className='ri-calendar-line'></i> 7 Tag</span>
            <span><i className='ri-map-pin-line'></i> 5 Platz</span>
            <span><i className='ri-flag-line'></i> Australia</span>
          </div>
          <div className={TripCSS.Pricing}>
            <span className={TripCSS.price}> $1,200</span>
            <button className={TripCSS.book}>Jetzt buchen</button>
          </div>
        </div>
      </div>
        <div className={TripCSS.card}>
        <img src={trip06} alt="" />
        <div className={TripCSS.TripContent}>
          <div className={TripCSS.rating}>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
          </div>
          <h3>Australia Panorma</h3>

          <div className={TripCSS.TripDetails}>
            <span><i className='ri-calendar-line'></i> 7 Tag</span>
            <span><i className='ri-map-pin-line'></i> 5 Platz</span>
            <span><i className='ri-flag-line'></i> Australia</span>
          </div>
          <div className={TripCSS.Pricing}>
            <span className={TripCSS.price}> $1,200</span>
            <button className={TripCSS.book}>Jetzt buchen</button>
          </div>
        </div>
      </div>
        <div className={TripCSS.card}>
        <img src={trip07} alt="" />
        <div className={TripCSS.TripContent}>
          <div className={TripCSS.rating}>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
          </div>
          <h3>Australia Panorma</h3>

          <div className={TripCSS.TripDetails}>
            <span><i className='ri-calendar-line'></i> 7 Tag</span>
            <span><i className='ri-map-pin-line'></i> 5 Platz</span>
            <span><i className='ri-flag-line'></i> Australia</span>
          </div>
          <div className={TripCSS.Pricing}>
            <span className={TripCSS.price}> $1,200</span>
            <button className={TripCSS.book}>Jetzt buchen</button>
          </div>
        </div>
      </div>
        <div className={TripCSS.card}>
        <img src={trip08} alt="" />
        <div className={TripCSS.TripContent}>
          <div className={TripCSS.rating}>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-half-fill"></i>
          </div>
          <h3>Australia Panorma</h3>

          <div className={TripCSS.TripDetails}>
            <span><i className='ri-calendar-line'></i> 7 Tag</span>
            <span><i className='ri-map-pin-line'></i> 5 Platz</span>
            <span><i className='ri-flag-line'></i> Australia</span>
          </div>
          <div className={TripCSS.Pricing}>
            <span className={TripCSS.price}> $1,200</span>
            <button className={TripCSS.book}>Jetzt buchen</button>
          </div>
        </div>
      </div>
       
    </div>
    </div>
  )
}

export default Trips
