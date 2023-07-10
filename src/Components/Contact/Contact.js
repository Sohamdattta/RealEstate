import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBuubleBottomCenter} from 'react-icons/hi'
const Contact = () => {
  return (
    <div>
        <section id="cu" className='c-wrapper'>
            <div className='paddings innerWidth flexCenter c-container'>
                <div className='flexColStart c-left'>
                  <span className='orangeText'>Our Contacts</span>
                  <span className='primaryText'>Easy to contact us</span>
                  <span className='secondaryText'>We always ready to help by providing the best service</span>
                  <div className='flexColStart contactModes'>
                    <div className='flexColStart row'>
                        <div className='flexColCenter mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Chat</span>
                                    <span className='primaryText'>5698325479</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>Chat Now</div>
                        </div>

                        <div className='flexColCenter mode'>
                            <div className='flexStart'>
                                <div className='flexCenter icon'>
                                <MdCall size={25}/>
                                </div>
                                <div className='flexColStart detail'>
                                    <span className='primaryText'>Call</span>
                                    <span className='primaryText'>3608325479</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>Call Now</div>
                        </div>


                    </div>
                  </div>
                </div>
                <div className='c-right'>
                    <div className='image-container'>
                        <img src='https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg' alt=''/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact