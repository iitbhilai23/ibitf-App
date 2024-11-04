import React from 'react'
import './Slider.css'
import img1 from '../../assets/logos/Aadhaar_Logo.png'
import img2 from '../../assets/logos/NIC-Logo.png'
import img3 from '../../assets/logos/NPCI-Logo.png'
import img4 from '../../assets/logos/cdac.jpg'
import img5 from '../../assets/logos/ibrta.png'
import img6 from '../../assets/logos/img1.png'
import img7 from '../../assets/logos/pngwing.png'

const Slider = () => {

    const sliderImages = [
        {
            images: img1
        },
        {
            images: img2
        },
        {
            images: img3
        },
        {
            images: img4
        },
        {
            images: img5
        },
        {
            images: img6
        },
        {
            images: img7
        }
    ]

    return (
        <div className='main-slide-cnt'>
            <div className='slider-parent'>
                <h3>Government collaborators</h3>
                <div className='slider-collab'>
                    {sliderImages.map((items, index) => (
                        <div className='slide-track' key={index}>
                            <div className='img-parent'>
                                <img className='slide-img' src={items.images} />
                            </div>
                        </div>
                    ))}
                    {/* <div className='img-parent'>
                        <img className='slide-img' src={img2} />
                    </div>

                    <div className='img-parent'>
                        <img className='slide-img' src={img3} />
                    </div>

                    <div className='img-parent'>
                        <img className='slide-img' src={img4} />
                    </div>

                    <div className='img-parent'>
                        <img className='slide-img' src={img5} />
                    </div>

                    <div className='img-parent'>
                        <img className='slide-img' src={img6} />
                    </div>

                    <div className='img-parent'>
                        <img className='slide-img' src={img7} />
                    </div>

                </div> */}
                    {/* <div className='slide-track'>
                    <div className='img-parent'>
                        <img className='slide-img' src={img1} />
                    </div>
                    <div className='img-parent'>
                        <img className='slide-img' src={img2} />
                    </div>

                    <div className='img-parent'>
                        <img className='slide-img' src={img3} />
                    </div>

                    <div className='img-parent'>
                        <img className='slide-img' src={img4} />
                    </div>

                    <div className='img-parent'>
                        <img className='slide-img' src={img5} />
                    </div>

                    <div className='img-parent'>
                        <img className='slide-img' src={img6} />
                    </div>

                    <div className='img-parent'>
                        <img className='slide-img' src={img7} />
                    </div>

                </div> */}
                </div>
            </div>
        </div>
    )
}

export default Slider