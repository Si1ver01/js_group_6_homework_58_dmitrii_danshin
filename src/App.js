import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Ui/Modal/Modal.jsx";
import Button from './components/Ui/Button/Button.jsx'
import Alert from './components/Ui/Alert/Alert.jsx'

class App extends Component {
  state = {
    showModal: false,
    alertShow: false,
    alertConfig : {
      type: '',
      handler : null
    }
  };

  closeModalHandler = () => {
    this.setState({
      showModal: false,
      alertShow: false
    });
  };

  showModalHandler = () => {
    this.setState({
      showModal: true
    });
  }

  showAlert = (type , bool) => {
    const alertConfig = {
      type : type,
      handlerOn: bool
    }
    this.setState({
      alertShow: true,
      alertConfig
    })
  }

  closeAlert = () => {
    this.setState({
      alertShow: false
    })
  }

  render() {
    const btnConfig = [
      {type: 'warning', label: 'warning', clicked: () => this.showAlert('warning',true)},
      {type: 'info', label: 'info', clicked: () => this.showAlert('info')},
      {type: 'success', label: 'success', clicked: () => this.showAlert('success')},
      {type: 'danger', label: 'close', clicked: () => this.showAlert('danger',true)},
     ]
    return (
      <div className="App">
        {this.state.showModal ? (
          <Modal title="Title" closeHandler={this.closeModalHandler}>
            <p>Something text</p>
            {btnConfig.map((elem,index) => <Button key={index} type={elem.type} label={elem.label} handler={elem.clicked}/>)}
          </Modal>
        ) : <button onClick={this.showModalHandler}>Показать </button>}
        {this.state.alertShow ? <Alert {...this.state.alertConfig} handler={this.closeAlert}>Something</Alert> : null}
      </div>
    );
  }
}

export default App;
