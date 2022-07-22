import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ImageBackground, TextInput } from 'react-native';
import db from '../config';

export default class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      orderid: "",
      displayid001: "",
      displayid002: "",
      displayid003: "",
      displayid004: "",
      displayid005: "",
      displayid006: ""
    }
  }

  componentDidMount() {

    //Service1 Loading
    db.collection("Services").doc("SERV001").get().then((doc)=>{
  
      var order = doc.data();

      if(order.is_assigned){
        this.setState({
          displayid001: true
        });
      } else {
        this.setState({
          displayid001: false
        })
    }
  }); 

  //Service2 Loading
  db.collection("Services").doc("SERV002").get().then((doc)=>{

    var order = doc.data();

    if(order.is_assigned){
      this.setState({
        displayid002: true
      });
    } else {
      this.setState({
        displayid002: false
      })
    }
  });

  //Service3 Loading
  db.collection("Services").doc("SERV003").get().then((doc)=>{
  
    var order = doc.data();

    if(order.is_assigned){
      this.setState({
        displayid003: true
      });
    } else {
      this.setState({
        displayid003: false
      })
    }
  }); 
  
  //Service4 Loading
  db.collection("Services").doc("SERV004").get().then((doc)=>{
  
    var order = doc.data();
  
    if(order.is_assigned){
      this.setState({
        displayid004: true
      });
    } else {
      this.setState({
        displayid004: false
      })
    }
  });

    //Service5 Loading
      db.collection("Services").doc("SERV005").get().then((doc)=>{
  
          var order = doc.data();
    
          if(order.is_assigned){
            this.setState({
              displayid005: true
            });
          } else {
            this.setState({
              displayid005: false
            })
        }
      }); 
    
      //Service6 Loading
      db.collection("Services").doc("SERV006").get().then((doc)=>{
    
        var order = doc.data();
    
        if(order.is_assigned){
          this.setState({
            displayid006: true
          });
        } else {
          this.setState({
            displayid006: false
          })
        }
      });

  }

  handleOrder = () => {
    const { orderid, displayid001, displayid002, displayid003, displayid004, displayid005, displayid006 } = this.state;

    db.collection("Services").doc(orderid).get().then((doc)=>{
      var order = doc.data();

      db.collection("Services").doc(orderid).update({
        is_assigned: true,
        is_completed: false
      });

      if(order.is_assigned && order.id === "SERV001"){
        this.setState({
          displayid001: true,
          orderid: ""
        })
      } else if(order.is_assigned && order.id === "SERV002"){
        this.setState({
          displayid002: true,
          orderid: ""
        })
      } else if(order.is_assigned && order.id === "SERV003"){
        this.setState({
          displayid003: true,
          orderid: ""
        })
      } else if(order.is_assigned && order.id === "SERV004"){
        this.setState({
          displayid004: true,
          orderid: ""
        })
      } else if(order.is_assigned && order.id === "SERV005"){
        this.setState({
          displayid005: true,
          orderid: ""
        })
      } else if(order.is_assigned && order.id === "SERV006"){
        this.setState({
          displayid006: true,
          orderid: ""
        })
      }
    });
  }

  removeOrder1 = () => {
    const { orderid, displayid001 } = this.state;

    db.collection("Services").doc("SERV001").get().then((doc)=>{
      this.setState({
        displayid001: false
      });
    });
    db.collection("Services").doc("SERV001").update({
      is_assigned: false,
      is_completed: true
    })
  }

  removeOrder2 = () => {
    const { orderid, displayid002 } = this.state;

    db.collection("Services").doc("SERV002").get().then((doc)=>{
      this.setState({
        displayid002: false
      });
    });
    db.collection("Services").doc("SERV002").update({
      is_assigned: false,
      is_completed: true
    })
  }

  removeOrder3 = () => {
    const { orderid, displayid003 } = this.state;

    db.collection("Services").doc("SERV003").get().then((doc)=>{
      this.setState({
        displayid003: false
      });
    });
    db.collection("Services").doc("SERV003").update({
      is_assigned: false,
      is_completed: true
    })
  }

  removeOrder4 = () => {
    const { orderid, displayid004 } = this.state;

    db.collection("Services").doc("SERV004").get().then((doc)=>{
      this.setState({
        displayid004: false
      });
    });
    db.collection("Services").doc("SERV004").update({
      is_assigned: false,
      is_completed: true
    })
  }

  removeOrder5 = () => {
    const { orderid, displayid005 } = this.state;

    db.collection("Services").doc("SERV005").get().then((doc)=>{
      this.setState({
        displayid005: false
      });
    });
    db.collection("Services").doc("SERV005").update({
      is_assigned: false,
      is_completed: true
    })
  }

  removeOrder6 = () => {
    const { orderid, displayid006 } = this.state;

    db.collection("Services").doc("SERV006").get().then((doc)=>{
      this.setState({
        displayid006: false
      });
    });
    db.collection("Services").doc("SERV006").update({
      is_assigned: false,
      is_completed: true
    })
  }

  render(){
    const { orderid, displayid001, displayid002 } = this.state;

    return(
      <View style={styles.transContainer}>
          <TextInput
            placeholder="Service ID" 
            style={styles.textinput}
            onChangeText={(text)=>{
              this.setState({
                orderid: text
              })
            }}
          />
        <TouchableOpacity style={styles.submit} onPress={this.handleOrder}><Text style={styles.textsubmit}>Submit</Text></TouchableOpacity>
        <TouchableOpacity style={this.state.displayid001 === true? styles.display: styles.undisplay} onPress={this.removeOrder1}><Text style={styles.textsubmit}>Vacuuming</Text></TouchableOpacity>
        <TouchableOpacity style={this.state.displayid002 === true? styles.display: styles.undisplay} onPress={this.removeOrder2}><Text style={styles.textsubmit}>Mopping</Text></TouchableOpacity>
        <TouchableOpacity style={this.state.displayid003 === true? styles.display: styles.undisplay} onPress={this.removeOrder3}><Text style={styles.textsubmit}>Deluxe Mopping</Text></TouchableOpacity>
        <TouchableOpacity style={this.state.displayid004 === true? styles.display: styles.undisplay} onPress={this.removeOrder4}><Text style={styles.textsubmit}>Wiping Down Surfaces</Text></TouchableOpacity>
        <TouchableOpacity style={this.state.displayid005 === true? styles.display: styles.undisplay} onPress={this.removeOrder5}><Text style={styles.textsubmit}>Deluxe Room Cleaning</Text></TouchableOpacity>
        <TouchableOpacity style={this.state.displayid006 === true? styles.display: styles.undisplay} onPress={this.removeOrder6}><Text style={styles.textsubmit}>1 hour Clean-For-All</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  transContainer: {
    flex: 1,
    backgroundColor: '#0d6fd1'
  },
  textinput: {
    marginTop: 25,
    borderRadius: 5,
    borderWidth:3,
    height:35,
    width: '75%',
    alignSelf: 'center'
  },
  submit: {
    borderRadius: 5,
    width: 200,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  textsubmit: {
    fontSize: 16,
    color: 'white',
  },
  undisplay: {
    display: "none",
    borderRadius: 5,
    width: 200,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  display: {
    display: "flex",
    borderRadius: 5,
    width: 200,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
  }
});
