import React from 'react';
// import classes from './mainContent.module.css';

const main = (props) => {
    const cardStyle = {
        width: '18rem',
        height: '200px',
        margin: '10px'
    }

    return (
        <div className="row">
            <div>
                <div className="card" style={cardStyle}  onClick={() => props.click('Action Figure')}>
                    <div className="card-body">
                        <h5 className="card-title">
                            Action Figures
                            </h5>
                        
                    </div>
                </div>
            </div>
            <div >
                <div className="card" style={cardStyle}  onClick={() => props.click('Statues')}>
                    <div className="card-body">
                        <h5 className="card-title">Statues</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card" style={cardStyle}  onClick={() => props.click('Busts')}>
                    <div className="card-body">
                        <h5 className="card-title">Busts</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card" style={cardStyle}  onClick={() => props.click('Dioramas')}>
                    <div className="card-body">
                        <h5 className="card-title">Dioramas</h5>
                    </div>
                </div>
            </div>
            <div>
                <div className="card" style={cardStyle}  onClick={() => props.click('Misc')}>
                    <div className="card-body">
                        <h5 className="card-title">Misc</h5>
                    </div>
                </div>
            </div>
        </div>
        
   )
}

export default main;