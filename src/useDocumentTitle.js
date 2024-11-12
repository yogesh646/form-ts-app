import React, { useEffect, useState } from 'react'

function useDocumentTitle(initial) {
const [value,setvalue]=useState(initial);
const reset=()=>{setvalue(initial);}
const bind={value,onChange:e=>{setvalue(e.target.value)}}
return[value,bind,reset];
}
export default useDocumentTitle;
