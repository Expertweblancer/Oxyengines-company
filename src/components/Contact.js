import React, {Component} from 'react'
import './Validation.css'
function validate(email, category, name, phone, subject, message){
    return{
        email: email.length === 0,
        category: category.length === 0,
        name: name.length === 0,
        phone: phone.length === 0,
        subject: subject.length === 0,
        message: message.length === 0,
    };
}
class Contact extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            category: '',
            name: '',
            phone: '',
            subject: '',
            message: '',

            everFocusedEmail: false,
            everFocusedCategory: false,
            everFocusedName: false,
            everFocusedPhone: false,
            everFocusedSubject: false,
            everFocusedMessage: false,
            
            
             inFocus: '',

        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        

        this.handleSubmit = this.handleSubmit.bind(this);

    }
      handleEmailChange(evt) {
        this.setState({ email: evt.target.value });
      }
      handleCategoryChange(evt) {
        this.setState({ category: evt.target.value });
      }
      handleNameChange(evt) {
        this.setState({ name: evt.target.value });
      }
      handlePhoneChange(evt) {
        this.setState({ phone: evt.target.value });
      }
      handleSubjectChange(evt) {
        this.setState({ subject: evt.target.value });
      }
      handleMessageChange(evt) {
        this.setState({ message: evt.target.value });
      }
      
      
      handleSubmit(evt) {
        if (!this.canBeSubmitted()) {
          evt.preventDefault();
          return;
        }
        const { email, category,  name, phone, subject, message } = this.state;
        alert(`Contact with email: ${email} category: ${category} name: ${name} phone: ${phone}  subject: ${subject} message: ${message}` );
      }
      canBeSubmitted() {
        const errors = validate(this.state.email, this.state.category, this.state.name,  this.state.phone, this.state.subject,  this.state.message);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
      }
    render(){
        const errors = validate(this.state.email, this.state.category, this.state.name,  this.state.phone , this.state.subject, this.state.message);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return(
      <div className="contact py-5 " id="contact"> 
        <div className="container">
          <div className="contact-area">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <div className="form-group">
                        <label className="label">Name</label>
                        <input className={errors.name ? "error form-control py-3" : "form-control py-3" }  type="text"   placeholder ="
                        Enter Name" value={this.state.name} onChange={this.handleNameChange} />
                      </div>
                      <div className="form-group">
                        <label className="label">Phone</label>
                        <input className={errors.phone ? "error form-control py-3" : "form-control py-3" } placeholder=" Enter Phone Number" type="text" 
                                            value={this.state.phone} onChange={this.handlePhoneChange}/>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-group">
                        <label className="label">Email</label>
                        <input className={errors.email ? "error form-control py-3" : "form-control py-3" } placeholder ="Enter Email" type="email" 
                                            value={this.state.email} onChange={this.handleEmailChange}/>
                      </div>
                      <div className="form-group">
                        <label className="label">Subject</label>
                                            <input className={errors.subject ? "error form-control py-3" : "form-control py-3" } placeholder ="Enter Subject"
                                            value={this.state.subject} onChange={this.handleSubjectChange} type="text" />
                      </div>
                    </div>
                  
                  <div className="col-12">
                    <div className="form-group">
                        <label className="label">Massage</label>
                        <textarea className={errors.message ? "error form-control py-3" : "form-control py-3" } rows="8" placeholder="Enter Message"
                                            value={this.state.message} onChange={this.handleMessageChange} ></textarea>
                      </div>
                  </div>	 
                  <div className="col-6">
                    <div className="form-group">
                        <label className="label">Choose category</label>
                        <select className={errors.category ? "error form-control  " : "form-control " }
                                            value={this.state.category} onChange={this.handleCategoryChange}>
                                                <option></option>
                          <option>APP</option>
                          <option>Design</option>
                          <option>WEB</option>
                        </select>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                        <button disabled={isDisabled} className="btn btn-dark btn-lg send">Send</button>
                    </div>		  			
                </div>
                </div>

              </div>
            
              </div>
            </form>
          </div>
        </div>
		</div>
        )
    }
}

export default Contact