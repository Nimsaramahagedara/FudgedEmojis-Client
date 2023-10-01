import React, { useState } from 'react'
import './style.css'
const SpinWheel = ({ segments, spinOutput, chances }) => {
    // const segments = [
    //     {
    //         color: '#db7093',
    //         value: 'Decoration'
    //     },
    //     {
    //         color: '#20b2aa',
    //         value: 'Recharge'
    //     },
    //     {
    //         color: '#d63e92',
    //         value: 'Movie Ticket'
    //     },
    //     {
    //         color: '#daa520',
    //         value: 'Refrigrator'
    //     },
    //     {
    //         color: '#ff340f',
    //         value: 'Air Conditionar'
    //     },
    //     {
    //         color: '#ff7f50',
    //         value: 'Ring'
    //     },
    //     {
    //         color: '#3cb371',
    //         value: 'Watch'
    //     },
    //     {
    //         color: '#4169e1',
    //         value: 'Laptop'
    //     }

    // ];
    const [rotationAngle, setRotationAngle] = useState(0);
    const [curIndex, setCurIndex] = useState()
    const rotateWheel = () => {
        // Update the rotation angle
        setRotationAngle(Math.ceil(Math.random() * 3600));
        const randomIndex = Math.floor(Math.random() * segments.length);
        setCurIndex(randomIndex)
        setTimeout(() => {
            // alert(`${segments[randomIndex].value}`)
            spinOutput(segments[randomIndex].value)
        }, 2500)
    };

    return (
        <>
            <div className='spin_container'>
                <button className='spinBtn' onClick={rotateWheel} disabled={chances === 0 ? true : false}>SPIN</button>
                <div className="wheel" style={{ transform: `rotate(${rotationAngle}deg)` }}>
                    {
                        segments.length == 8 ? (
                            segments.map((item, index) => {
                                return (
                                    <div
                                        className={`number ${index == curIndex ? 'active' : ''}`}
                                        style={{ "--i": index + 1, "--clr": item.color }}
                                    >
                                        <span>{item.value}</span>
                                    </div>
                                )
                            })
                        ) : 'Please provide props(segments) array with 8 item'
                    }
                </div>
            </div >
        </>
    )
}

export default SpinWheel