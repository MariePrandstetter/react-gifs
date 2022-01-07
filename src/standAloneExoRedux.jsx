import React from 'react'
import { connect } from 'react-redux'

const MyComposant = (props) => {
  return (
    <div>
      gfvhnf
      {props.myProps}
      {props.squareRoot(9)}
    </div>
  )
}

class MyClass extends React.Component {
  render() {
    return (
      <MyComposantWithHOCSquareRoot
        myProps={'myProps'}
      />
    )
  }
}

const mapStateToProps = (store) => {
  const user = store.user
  return {
     user: user
  }
}
const connectedMapStateToProps = connect(mapStateToProps)
const ConnectedMyComponent = connectedMapStateToProps(MyComposant)

// syntaxer tracim
// const mapStateToPropsTracim = ({ user }) => ({ user })
// const ConnectedMyComponentTracim = connect(mapStateToPropsTracim)(MyComponent)

function MyHOC (Comp) {
  const squareRoot = number => squareRoot(number)
  return (
    <Comp
      squareRoot={squareRoot}
      {...Comp.props}
    />
  )
}

const MyComposantWithHOCSquareRoot = MyHOC(MyComposant)
