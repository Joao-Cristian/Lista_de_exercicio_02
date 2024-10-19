import React from "react";

function DiaNoite({prop}){
    if(prop){
        return <h1>Bom dia</h1>
    }
    else{
        return <h1>Boa noite</h1>
    }
}

export default DiaNoite