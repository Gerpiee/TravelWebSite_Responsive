import React from 'react'
import destinationCSS from "../Destinations/Destination.module.css"
import destination01 from "../../Photos/Destination01.jpg"
import destination02 from "../../Photos/Destination02.jpg"
import destination03 from "../../Photos/Destination03.jpg"
import destination04 from "../../Photos/Destination04.jpg"
import destination05 from "../../Photos/Destination05.jpg"
import destination06 from "../../Photos/Destination06.jpg"


const Destination = () => {
  return (
    <div className={`${destinationCSS.Destination_Wrapper} section`} id='populardestinations'>

      <h2>
        Popular Destinations
      </h2>
      <div className={destinationCSS.DestinationCards}>
      <div className={destinationCSS.DestinationCard}>
        <img src={destination01} alt="img-destination" />
        <div className={destinationCSS.DestinationDetails}>
          <h3>Europe</h3>
          <div className={destinationCSS.btns}>
            <a href="#">
              All Destinations
            </a>
            <a href="#">
              Deals
            </a>
          </div>
        </div>
        </div>
      <div className={destinationCSS.DestinationCard}>
        <img src={destination02} alt="img-destination" />
        <div className={destinationCSS.DestinationDetails}>
          <h3>Africa</h3>
          <div className={destinationCSS.btns}>
            <a href="#">
              All Destinations
            </a>
            <a href="#">
              Deals
            </a>
          </div>
        </div>
        </div>
      <div className={destinationCSS.DestinationCard}>
        <img src={destination03} alt="img-destination" />
        <div className={destinationCSS.DestinationDetails}>
          <h3>Antarktika</h3>
          <div className={destinationCSS.btns}>
            <a href="#">
              All Destinations
            </a>
            <a href="#">
              Deals
            </a>
          </div>
        </div>
        </div>
      <div className={destinationCSS.DestinationCard}>
        <img src={destination04} alt="img-destination" />
        <div className={destinationCSS.DestinationDetails}>
          <h3>Asya</h3>
          <div className={destinationCSS.btns}>
            <a href="#">
              All Destinations
            </a>
            <a href="#">
              Deals
            </a>
          </div>
        </div>
        </div>
      <div className={destinationCSS.DestinationCard}>
        <img src={destination05} alt="img-destination" />
        <div className={destinationCSS.DestinationDetails}>
          <h3>Kuzey Amerika</h3>
          <div className={destinationCSS.btns}>
            <a href="#">
              All Destinations
            </a>
            <a href="#">
              Deals
            </a>
          </div>
        </div>
        </div>
      <div className={destinationCSS.DestinationCard}>
        <img src={destination06} alt="img-destination" />
        <div className={destinationCSS.DestinationDetails}>
          <h3>Güney Amerika</h3>
          <div className={destinationCSS.btns}>
            <a href="#">
              All Destinations
            </a>
            <a href="#">
              Deals
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Destination
