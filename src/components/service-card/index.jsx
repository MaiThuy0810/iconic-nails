import React from 'react'
import "./style.scss"
const ServiceCard = ({img,list,mainTitle,twoTable,explainText}) => {
  return (
    <>
    {
twoTable?
<div className='service-card'>

<div className="service-card_img">
<img src={img}/>
</div>
<div className="service-card_content">
  <h1>{mainTitle}</h1>
  {explainText && 
  
  <p className='explainText'>({explainText})</p>
  
  }
  <hr style={{width:"50px", display:"inline-block"}}/>
  {
      list?.map((item,idx)=>(
          <>
          <div className="wrapper-table">
              <div className="title-cost">
                  <p className='name' style={{lineHeight:"30px"}}>{item.title} </p>
                  <p className='cost'>{item.cost}</p>
              </div>
              <div className="title-cost">
                  <p className='name'>{item.title} </p>
                  <p className='cost'>{item.cost}</p>
              </div>
          </div>
          </>
      ))
  }
 
</div>
</div>:

<div className='service-card'>
       

              
<div className="service-card_img">
     <img src={img}/>
</div>
    <div className="service-card_content">
       <h1>{mainTitle}</h1>
       <hr style={{width:"50px", display:"inline-block"}}/>
       {
           list?.map((item,idx)=>(
               <>
                <div className="title-cost">
                       <p className='name'>{item.title}
                       </p>
                       {
                           !!item?.costSecond ? <div style={{display:"flex", alignItems:"center", justifyContent:"end", gap:"50px"}}>
                                   <p className='cost' style={{width:"100px", whiteSpace:"nowrap"}}>{item.cost}</p>
                                   <p className='cost' style={{width:"100px", whiteSpace:"nowrap"}}>{item.costSecond}</p>

                           </div>:
                          <p className='cost'>{item.cost}</p>

                       }
          

                </div>
                   <p className='description'>
                   {item?.desc}
                   </p>
               </>
           ))
       }
      
     </div>

      

</div>

    }
    </>
 
  )
}

export default ServiceCard
