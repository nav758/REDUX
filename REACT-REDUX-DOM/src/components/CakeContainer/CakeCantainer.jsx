import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../../redux'
function CakeCantainer(props) {
  return (
    <div>
        <h1>Number of cakes : {props.numOfCakes} </h1>
        <button onClick={props.buyCake}>Buy</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeCantainer) // CakeCantainer