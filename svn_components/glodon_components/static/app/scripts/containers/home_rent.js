import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/home'
import Form from '../components/form'

class Home_rent extends React.Component{
  render(){
          var update = function(form_data){

          };
          var inputs = [
                {
                    name: 'sno',
                    placeholder: '',
                    label: '配件识别码',
                    val: '',
                    invalid: false,
                    invalid_msg: '',
                    focus: false,
                    type: 'text'
                },
                {
                    name: 'username',
                    placeholder: '',
                    label: '员工域账号',
                    val: '',
                    invalid: false,
                    invalid_msg: '',
                    focus: false,
                    type: 'text'
                },
                {
                    name: 'rent_range',
                    placeholder: '',
                    label: '租用周期',
                    val: '',
                    invalid: false,
                    invalid_msg: '',
                    type: 'rangepicker'
                },
                {
                    name: 'count',
                    placeholder: '',
                    label: '租用个数',
                    val: '',
                    invalid: false,
                    invalid_msg: '',
                    focus: false,
                    type: 'number'
                }
            ];
          return (
              <div className="shortcut_box">
                    <Form inputs = {inputs} update={ update }/>
              </div>
              )
      }
  }

function mapStateToProps(state) {
  return {
    propsValue: state
  }
}

export default connect(mapStateToProps, action)(Home_rent);