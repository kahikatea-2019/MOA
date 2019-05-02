import React from 'react'

export default class AddWidget extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: 'Eteroa',
            surname: ' Lafaele',
            cohort: 'SWOOOOOP 2019'
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


// class Header extends React.Component{
// render(){
//     return(
//         <div className = 'Header'>
//         <h1><p>Name</p></h1>
//         <h2><p>Surname</p></h2>
//         <h3><p>Harakeke2019</p></h3>       
//         </div>
//     )
// }
// }






// export default Header 