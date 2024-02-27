import React, { useContext } from 'react'
import { contextCard } from '../context/CardContext'
import ProductCard from '../components/ProductCard'
import {motion} from 'framer-motion'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'

function Card() {
    const {card,dispatchCard}=useContext(contextCard)
console.log(card);
  return (
    <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} style={{display:"flex",flexWrap:'wrap',gap:'40px'}}>

   

        {card.map((product)=>{
            return <ProductCard product={product}/>
        })}

          <Link to='/order'> <Button>orderNow</Button></Link> 
    </motion.div>
  )
}

export default Card