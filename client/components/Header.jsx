import React from 'react'

export default class AddWidget extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            surname: ' ',
            cohort: ''
        }
    }

    render () {
        const { name ,surname , cohort} = this.state
        return(
            <React.Fragment>
            <p><h1>{name}</h1></p>
            <p><h2>{surname}</h2></p>
            <p><h2>{cohort}</h2></p>  
            </React.Fragment>
            ) 
        }
    

}