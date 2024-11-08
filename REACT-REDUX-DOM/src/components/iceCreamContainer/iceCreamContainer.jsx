import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../../redux'
function icwCreamContainer(props) {
  return (
    <div>
        <h1>Number of iceCream : {props.numOfIceCream} </h1>
        <button onClick={props.buyIceCream}>Buy</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numOfIceCream: state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (icwCreamContainer) // icwCreamContainer