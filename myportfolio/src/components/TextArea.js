import React,{Component} from 'react';
class TextArea extends Component{
    render(){
        return(
        <div className='form-group'>
            {/* <label htmlFor={this.props.name}>{this.props.name}*</label> */}
            <textarea type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} className={this.props.className} required={this.props.required} rows={this.props.rows} cols={this.props.cols} style={this.props.style}  onChange={this.props.onChange} value={this.props.value}/>
            <span className='error'> {this.props.error}</span>
        </div>
        )
    }
}

export default TextArea;