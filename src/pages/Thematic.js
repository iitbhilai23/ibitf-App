import { siteContent } from '../constants/content';
import "./Thematic.css"
function Thematic() {
    const{card,description}=siteContent.thematic;
    return ( 
        <>
        <div>
            <div className='thematic-head'>Thematic Areas</div>
            <div className="thematic-card-wrapper">
                {
                    card.map((d)=><div className="thematic-card" >
                    <div className="thematic-card-img"><img src={d.img}/></div>
                    <div className="thematic-card-head">{d.head}</div>
                </div>)
                }
            </div>
    
            <div className='thematic-desciption-wrapper'>
             {
                description.map((d,i)=>
                <div className={`thematic-desciption`}>
                  <div className='thematic-desciption-content'>
                    <div className="thematic-desciption-title">{d.title}</div>
                    <div className="thematic-desciption-desc">{d.desc} </div>
                    {
                        d.subdescription.map(desc=>
                            <div className="thematic-desciption-subDesc-wrapper">
                                <div className="thematic-desciption-subTitle">{desc.subTitle} : </div>
                                {
                                    desc.subDesc.map(a=><div className="thematic-desciption-subDesc">- {a}</div>)
                                }
                             </div>
                        )
                    }
                  </div>
                  
                  <div className='thematic-desciption-img'>
                    <img src={d.img}/>
                  </div>
                </div>
            )
             }
            </div>
        </div>
        </>
     );
}

export default Thematic;