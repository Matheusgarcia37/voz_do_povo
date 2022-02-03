import React from 'react';
import { Input } from './styles'
type Props = {
   handleChange: Function;
   inputName: string;
   labelName: string;
}

export function InputLabelFlutuante({handleChange, inputName, labelName}:Props) {
   return (
      <div className="label-float">
      <Input
        placeholder=" "
        name={inputName}
        type="text"
        onChange={(e) => {
         handleChange(e)
        }}
      />
      <label>{labelName}</label>
    </div>
   )
 
}