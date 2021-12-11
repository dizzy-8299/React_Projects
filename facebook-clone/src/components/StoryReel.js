import React from 'react'
import './StoryReel.css'
import Story from './Story'
import oneImg from '../images/1.jpg'
import twoImg from '../images/2.jpg'
import threeImg from '../images/3.jpg'
import fourImg from '../images/4.jpg'
import fiveImg from '../images/5.jpg'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
            image={oneImg} 
            profileImg={fourImg} 
            title="Rohit Singh"
            />
            <Story 
            image={twoImg} 
            profileImg={threeImg} 
            title="Kamlesh Shinde"
            />            
            <Story 
            image={threeImg} 
            profileImg={fiveImg} 
            title="Ritesh Naik"
            />            
            <Story 
            image={fourImg} 
            profileImg={twoImg} 
            title="Atharva Gole"
            />            
            <Story 
            image={fiveImg} 
            profileImg={oneImg} 
            title="Akshay Naik"
            />
        </div>
    )
}

export default StoryReel
