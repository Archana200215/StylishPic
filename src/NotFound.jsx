import {Link}from "react-router-dom";

function NotFound(){

    return(
        <>
        <h2>Error 404 Page Not Found</h2>
        <Link  to="/" >Home</Link>
        
        </>
    );
}
export default NotFound;