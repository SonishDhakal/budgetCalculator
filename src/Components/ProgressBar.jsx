import React, { useEffect, useState } from 'react'

export const ProgressBar = ({max,amount}) => {
  const [style,setstyle] = useState()
  


useEffect(() =>{
  
  
  let percen = (amount/max)*100
  percen = Math.floor(percen)

  if(percen<20){
    setstyle({
      background:'#CBFFA9',
      width:`${percen}%`,


    })
  }
  else if(percen>20 && percen <50){
    setstyle({
      background:'#9AC5F4',
      width:`${percen}%`,


    })

  }

  else if(percen>50 && percen <90){
    setstyle({
      background:'#F1C93B',
      width:`${percen}%`,


    })

    

  }

  else if(percen>90 && percen <=100){
    setstyle({
      background:'#FF6969',
      width:`${percen}%`,


    })

  }

  else{
    setstyle({
      background:'#FF6969',
      width:`100%`,


    })

  }


  




  

},[max,amount])

  return(
    <div className='bg-black/[0.1] w-full h-[17px] rounded-3xl'>
        <div className={` h-full rounded-3xl`} style={style}>

        </div>
    </div>
  )
}
