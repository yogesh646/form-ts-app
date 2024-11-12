import React from 'react';

type Fieldstype= 'text'| 'checkbox' | 'dropdown';

interface Basefield<T>{
id:string;
label:string;
type:Fieldstype;   
value:T;
options?: string[];
}
interface TextField extends Basefield<string>{
type:'text';
}
interface CheckBoxField extends Basefield<boolean>{
type:'checkbox';
}
interface DropField extends Basefield<string>{
type:'dropdown';
options:string[];
}
export type FormField=TextField|CheckBoxField|DropField;
