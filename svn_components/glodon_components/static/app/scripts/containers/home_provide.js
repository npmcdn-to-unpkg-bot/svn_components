import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/home'
import Form from '../components/form'

class Home_provide extends React.Component{
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
                    name: 'provide_range',
                    placeholder: '',
                    label: '领用时间',
                    val: '',
                    invalid: false,
                    invalid_msg: '',
                    type: 'datepicker'
                },
                {
                    name: 'count',
                    placeholder: '',
                    label: '领用个数',
                    val: '',
                    invalid: false,
                    invalid_msg: '',
                    focus: false,
                    type: 'number'
                }
            ];
          return (
              <div className="shortcut_box">
                    <Form inputs = {inputs}/>
              </div>
              )
      }
  }

function mapStateToProps(state) {
  return {
    propsValue: state
  }
}

export default connect(mapStateToProps, action)(Home_provide);