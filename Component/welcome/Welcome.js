/*function Welcome(props){
    return(
        <div>
            <p> Welcome,{props.firstName}</p>
        </div>
    );
}*/



function Welcome({ firstName}){
    return(
        <div>
            <p> Welcome, {firstName}</p>
        </div>
    );
}
export default Welcome;