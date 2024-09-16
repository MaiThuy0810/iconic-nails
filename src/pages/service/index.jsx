import React from 'react'
import banner from "../../assets/img/banner-02.jpg"
import BannerBook from "../../components/banner-book"
import ServiceCard from "../../components/service-card"
import "./style.scss"
import Banner from '../../components/banner'
import service from "../../assets/img/service-01.jpg"

const Service = () => {
const listPedicures=[
  {
    title:"Classic Pedicure",
    cost:"$35",
    desc:"Show your feet some love. Start with nail trimming, shaping, and cuticle grooming, then enjoy our sugar scrub and a gentle lotion massage, followed by a hot towel wrap and finish with your choice of regular polish."
  },
  {
    title:"Deluxe Pedicure",
    cost:"$45",
    desc:"Our treatment features organic ingredients and natural extracts for effective foot care. It includes Callus Treatment to soften calluses, Sea Salt Soak to detoxify and deodorize, Sugar Scrub to gently exfoliate, Mud Masque to deeply cleanse, Paraffin Wax for conditioned skin, and Massage Butter for hydration. Enjoy an extra layer of moisture with Massage Butter."
  },
  {
    title:"Volcano Hot Stone Pedicure",
    cost:"$60",
    desc:<>
    <p>Indulge in a rejuvenating pedicure experience. Start by soaking your feet in warm spa water with Detox Volcano Crystals for a fun bubble explosion. A gentle callus treatment follows. Detox Volcano Activator detoxifies and softens the skin, while a Sugar Scrub renews texture. Enjoy the Collagen Cream Mask, wrapped in a warm towel, to rejuvenate your skin's appearance. Moisturize with Collagen Massage Lotion for silky soft skin. Complete with Hot Stone & Hot Paraffin Wax, perfect for healing dry and cracked skin.<br/>
    Your choice of scent:<br/>
    • Lavender Eruption <br/>
    • Tropical Citrus
    <br/>
    • Green Tea & Aloe Vera
    <br/>
    • Honey Pearl
    <br/>
    • No.5 Orange
    <br/>
    • Rose Old CBD <br/>
    • Romance <br/>
    • Lemon Splash
    <br/>
    • Perfume #5
    <br/>
    • Crystal Water
        </p>
        </>
  },
  {
    title:"Add Gel",
    cost:"$45",
    desc:""
  },
]
const listManicures=[
  {
    title:"Classic Pedicure",
    cost:"$18",
    desc:"Our Classic Manicure starts off with nail trimming, shaping, cuticle grooming, and hand massage. Lastly, the polish of your choice is applied to your freshly clean nails."
  },
  {
    title:"Deluxe Manicure",
    cost:"$28",
    desc:"Enhancement of the Classic Manicure! It comes with additional sugar scrub exfoliation to remove dead skin and a relaxing hand massage with lotion. Finished with the polish of your choice."
  },
  {
    title:"Gel Manicure",
    cost:"$38",
    desc:"Same services as the Classic Manicure, but your choice of long-lasting gel color instead. The gel polish is light and dries instantly! It feels virtually weightless and stays flawless and shiny for up to two weeks."
  },
]
const listNails=[
  {
    title:"",
    cost:"Full-in",
    costSecond:"Full-set",
    desc:""
  },
  {
    title:"Acrylic With Gel",
    cost:"$45+",
    costSecond:"$55+",
    desc:""
  },
  {
    title:"Powder Color",
    cost:"$45+",
    costSecond:"$55+",
    desc:""
  },
  {
    title:"On Toes",
    cost:"$50+",
    costSecond:"$60+",
    desc:""
  },
  {
    title:"Ombré",
    cost:"$50+ (1 color)",
    costSecond:"$65+",
    desc:""
  },
  {
    title:"",
    cost:"$60+ (2 colors)",
    costSecond:" ",
    desc:""
  },
]

  return (
    <div className='service'>
            <Banner haveCardContact routes="Service" image={banner} title="Service"/>
            <div className="service-content container">
              <ServiceCard mainTitle="PEDICURES" img={service} title="PEDICURES" list={listPedicures}/>
              <ServiceCard mainTitle="PEDICURES" img={service} title="PEDICURES" list={listManicures}/>
              <ServiceCard mainTitle="NAIL ENHANCEMENTS" img={service}  title="PEDICURES" list={listNails}/>
              <ServiceCard mainTitle="DIPPING POWDER" img={service} title="PEDICURES" twoTable list={listNails}/>
              <ServiceCard mainTitle="KID'S SERVICES" img={service} explainText="For children who are 9 years old & under" title="PEDICURES" twoTable list={listNails}/>
              <ServiceCard mainTitle="WAXING" img={service} title="PEDICURES" twoTable list={listNails}/>
              <ServiceCard mainTitle="EYELASHES" img={service} explainText="Appointment Only" title="PEDICURES" twoTable list={listNails}/>
              <ServiceCard mainTitle="ADDITIONAL SERVICES" img={service} title="PEDICURES" twoTable list={listNails}/>
            </div>
            <BannerBook/>
      
    </div>
  )
}

export default Service
