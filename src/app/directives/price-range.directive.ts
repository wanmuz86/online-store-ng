
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// Our validator inherits ValidatorFn
// The keyword Fn means we create a method not a classs
export function priceRangeValidator() : ValidatorFn {
  // control => input 
  // Return type either ValidationErrors or null
  return (control:AbstractControl<number>):ValidationErrors | null =>{
    // Verify the value of control/ input between 1 and 10000
    const inRange = control.value > 1 && control.value < 10000;
    // if ok return null (no issue) if not return a ValidationErrors [key: true/false]
    return inRange ? null : {outOfRange:true}
  }
}