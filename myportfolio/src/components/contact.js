import React, { Component } from 'react';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';
import toastr from 'toastr';
import * as emailjs from 'emailjs-com'; 
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email:'',
      message:'',
      errors:{
        name: '',
        email:'',
        message:''
      }
  };

    
  }
   handleChange(event) {
    event.preventDefault();
    const target= event.target;
    const name=target.name;
    const value= target.value;
    this.setState({[name]:value});
  }

  validateMail(){
    let errors={}
    let formisValid=true
    if(!this.state.name||this.state.name.length<3){
      errors.name='Minimum 3 words'
      formisValid=false
    }
    if(!this.state.message||this.state.message.length<3){
      errors.name='Minimum 10 words'
      formisValid=false
    }
    if(!this.state.email||this.state.email.length<3){
      errors.name='Minimum 3 words'
      formisValid=false
    }
    let pattern =/^\w+([.-]?\w+)*@([.-]?\w+)*(\.\w{2,3})+$/
    if(!pattern.test(this.state.email)){
    errors.email="This is not a valid email"
    formisValid=false
    }
    this.setState({
      errors:errors
    })
    return formisValid
  }
  
  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.name  +' Your email is:' + this.state.email+" Your message is:"+ this.state.message);
    event.preventDefault();
    if(!this.validateMail()){
      return
    }
    var templateParams={
      from_name:this.state.name+'('+this.state.email+')',
      to_name:'agrawalvaibhav12@gmail.com',
      message_html:this.state.message
    }
    emailjs.send('gmail', 'template_JziQyPy5', templateParams, 'user_AWz63hRA6boJqti86unAg').then(function(response){
      toastr.success('Message sent successfully')
      console.log('SUCCESS!', response.status, response.text)
    },function(err){
      toastr.error(err)
      console.log(err)
    })

    this.setState({
      name:'',
      email:'',
      message:''
    })
  }

  
  

  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'RobotoSlab'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    +91 87709-25518
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'RobotoSlab'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    +91 81038-12021
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px',  fontFamily: 'RobotoSlab'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    agrawalvaibhav12@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '20px', fontFamily: 'RobotoSlab'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    My skypeID
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
          <Cell col={6}>
              <h2>Let's work together</h2>
              <hr/>
              <div className="contact-workt">
              {/* <form onSubmit={this.handleSubmit.bind(this)}>
              <label>
                <input className="form" type="text" placeholder={"Enter your name"} value={this.state.value} error={this.state.errors.name} onChange={this.handleChange.bind(this)} /><br/>
                <input className="form" type="text"  placeholder={"Enter your Email ID"} value={this.state.value} error={this.state.errors.email} onChange={this.handleChange.bind(this)} /><br/>  
                <textarea cols="39" rows="6" name="message" placeholder={"Enter your message"} class="form" style={{fontSize:"14px"}} value={this.state.value} error={this.state.errors.message}  onChange={this.handleChange.bind(this)}></textarea></label><br/><br/>
                <input className="button" type="submit" value="Send message" required='required' />
            </form> */}
            <form id={this.props.id} className={this.props.className} name={this.props.name} method={this.props.method} action={this.props.action}>
              <Input type='text' name='name' placeholder={"Enter your name"} className='form' required='required' onChange={this.handleChange.bind(this)} value={this.state.name} error={this.state.errors.name}  />
              <Input type='text' name='email' placeholder={"Enter your Email ID"} className='form' required='required' onChange={this.handleChange.bind(this)} value={this.state.email} error={this.state.errors.email}  />
              <TextArea type='text' name='message' cols="39" rows="6" placeholder={"Enter your message"} className='form' style={{fontSize:"14px"}} required='required' onChange={this.handleChange.bind(this)} value={this.state.message} error={this.state.errors.message}  />
              <Button onClick={this.handleSubmit.bind(this)} type='button' name='submit' className='button' required='required'/>
            </form>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
