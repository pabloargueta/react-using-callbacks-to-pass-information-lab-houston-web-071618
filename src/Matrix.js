import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: "#F00"
    }
  }

  setNewColor = (newColor) => {
    this.setState({
      color: newColor
    })
  }

  updatedColor = () => (this.state.color)




  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} updatedColor={this.updatedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setNewColor={this.setNewColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
