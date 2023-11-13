import Ad from "./Ad";
import { useState } from "react"

function AdPage(){

    const [Show , SetShow] = useState(true);

    function HandToggleClick(){
        SetShow(!Show);
    }
    console.log(Show);

    return(
        <>
         <Ad Show={Show} />
         <button onClick={HandToggleClick}>{Show ? '광고안보기' : '광고보기'}</button>
      </>
    )
}

export default AdPage;
