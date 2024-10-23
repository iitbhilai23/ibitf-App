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
                    <div className="thematic-card-desc">{d.desc}</div>
                </div>)
                }
            </div>
           <div className='thematic-head'> Scope of Projects</div>
            <div className='thematic-desciption-wrapper'>
             {
                description.map((d)=>
                <div className="thematic-desciption">
                  <div className="thematic-desciption-img"><img src={d.descImg}/></div>
                  <div className="thematic-desciption-content">
                    <div className='thematic-desciption-card-img'><img  src={d.img}/></div>
                    <div className='thematic-desciption-title'>{d.title}</div>
                    <ul>
                        {
                            d.desc?.map((a)=><li>{a}</li>)
                        }
                    </ul>
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