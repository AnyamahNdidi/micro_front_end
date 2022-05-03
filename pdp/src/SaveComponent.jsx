import React from "react"
import { render } from "react-dom";

export default  class SaveComponent extends React.Component {
  constructor(props){
    super(props);
    this.props = {hasError:false};
  }

  static getDerivedStateFromError(error){
    return {hasError : true}
  }
  componentDidCatch(){ }

  render(){
    if(this.state.hasError){
      return <h1>something wen wrong</h1>
    }

    return this.props.children;

  }
}