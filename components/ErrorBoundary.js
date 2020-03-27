import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             hasError : false
        };
    }

    static getDerivedStateFromError(error){
        return {hasError: true};
    }
    
    render() {
        if(this.state.error){
            return(
                <div>
                    <p>
                        An unknown error has occured...
                        It will be fixed soon.
                    </p>
                </div>
            )
        }
        return this.props.children;
    }
}
