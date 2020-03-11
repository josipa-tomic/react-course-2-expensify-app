import React from 'react';
import ReactDOM from 'react-dom';


const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>the info is : {props.info}</p>
    </div>
);


const withAdminWarning=(WrappedComponent)=>{
        return (props)=>(
            <div>
            {props.isAdmin && <p>This is private info, please don't share!</p>}
            <WrappedComponent {...props}/>
            </div>
        );
};

const requireAutentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAutheniticated ? <WrappedComponent {...props}/>: <p>Please log in to view info</p>}
        </div>
    );
};

const AdminInfo=withAdminWarning(Info);

const AuthInfo=requireAutentication(Info);
ReactDOM.render(<AdminInfo isAdmin={true} info="fkddlkf"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAutheniticated={false} info="fkddlkf"/>, document.getElementById('app'));
