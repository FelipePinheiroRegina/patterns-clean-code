// import { FirstExample } from "./examples/01/FirstExample";
// import { PureComponent } from "./examples/02/PureComponent";

import { Input } from "./examples/03/input-custom";
import * as InputComposition from './examples/03/input-composition'

export function App() {

  return (
    <>
     {/* <FirstExample/> */}
      {/* <PureComponent/> */}

      {/* Input de customização. Não recomendado */}
      <Input label="teste" icon={<></>} leftIcon={<></>}/>

       {/* Pattern de composição. Recomendado */}
      <InputComposition.Root>
        <InputComposition.Label>Label</InputComposition.Label>
        <InputComposition.Icon> <div></div> </InputComposition.Icon>
        <InputComposition.FormField />
        <InputComposition.Icon> <div></div> </InputComposition.Icon>
      </InputComposition.Root>

    </>
  
  )
}
