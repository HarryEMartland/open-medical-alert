import React from 'react';

function DataView({data}) {
    return <div className='container'>
        <div className='row'>
            <div className='col pt-3'>
                <form>
                    {data.name && <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control"  value={data.name} disabled/>
                    </div>}
                    {data.address && <div className="form-group">
                        <label >Address</label>
                        <textarea type="text" className="form-control"  value={data.address} disabled/>
                    </div>}
                    {data.postcode && <div className="form-group">
                        <label >Postcode</label>
                        <input type="text" className="form-control"  value={data.postcode} disabled/>
                    </div>}
                </form>
            </div>
        </div>

    </div>
}

export default DataView