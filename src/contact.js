import React from 'react';



export default class Contact extends React.Component{
    constructor(props){
        super(props)
        this.state={}

    }

    componentDidMount() {

    }
    render(){
        return(
            <div id='contact-section'>

                <form className='contact-form-container paint-font-black' target="_blank"  action="mailto:johnnybareket@gmail.com" method="post" enctype="text/plain" >
                <br/><div className='paint-font-black'>Wanna work together? Like what you see? Did I gain some weight? Let me know!</div><br/>
                Full Name: <input type="text" name="FullName" placeholder='Full Name'></input>
                    Email:<input type="text" name="Email" placeholder='Email Address'></input>
                        Subject:<input type="text" name="Subject" placeholder='Subject'></input>
                        <textarea id= 'text-area-contact' placeholder="Let's hear it!"></textarea>
                        <input className='click-btn' type="submit" name="submit" value="Submit"></input>
                </form>

            </div>
        )
    }
}
