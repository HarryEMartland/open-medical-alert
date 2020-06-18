import React from 'react';
import DataView from "./DataView";
import LoginController from "./LoginController";

class DataController extends React.Component {

    constructor() {
        super();
        this.state = {data: null};
        this.loadData = this.loadData.bind(this);
    }

    loadData(requestData) {
        this.setState({loading:true});
        fetch(process.env.REACT_APP_DATA_URL, {method: 'POST', body: JSON.stringify(requestData)})
            .then(r=>{
                return r.json().then(data=>{

                    if(r.status ===200){
                        this.setState({data, loading: false});
                    }else {
                        this.setState({errorMessage: data.message, loading: false});
                    }
                })
            })
            .catch(e=>{
                console.error(e);
                this.setState({errorMessage: "Unknown error"})
            });
    }

    render() {
        const {data, loading, errorMessage} = this.state;
        return <div>
            {data == null && <LoginController onLogin={this.loadData} loading={loading} errorMessage={errorMessage}/>}
            {data != null && <DataView data={data}/>}
        </div>
    }

}

export default DataController