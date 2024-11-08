import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../../redux'
function HookCakeContainer() {

const numofCakes =useSelector(state => state.cake.numOfCakes)    

const dispatch = useDispatch()

  return (
   
    <>
    <div>
    <h2>Num of cakes : {numofCakes} </h2>
    <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
    </>
  )
}

export default HookCakeContainer