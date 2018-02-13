import React from 'react';




export default class Work extends React.Component{
    constructor(props){
        super(props)
        this.state={}

    }

    componentDidMount() {

    }
    render(){
        return(
            <div id='work-section'>
                <h1 className='white-font' style={{textAlign:'center'}}>My Work So Far</h1>
                <div className = "wrapper" > <img className="box a" src='./imagebunker.png'/>
                    <div className='box-text imagebunker'>This is imagebunker</div>
                        <img className="mid-box b" src='./trackshare2.png'/>
                    <div className='box-text trackshare'>This is trackshare</div>
                        <img className="big-box c" src='./dubbing.png'/>
                    <div className='box-text dubbing'>This is dubbing</div>
                        <img className="big-box d" src='./spotifyui.png'/>
                    <div className='box-text spotifyui'>This is spotifyui</div>
                        <img className="box e" src='./petition.png'/>
                    <div className='box-text petition'>This is petition</div>
                        <img className="big-box f" src='./gitsearch.png'/>
                    <div className='box-text gitsearch'>This is gitsearch</div>

                </div>
            </div>
        )
    }
}
