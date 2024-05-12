import { ValidateFn } from "@saiphsoft/validate/validators";

export default function validate ( value: any, validators: ValidatorFn[] ): ValidationResult;

type ValidatorFn = ( ...args: any[] ) => ValidateFn;

interface ValidationResult {
  valid: boolean;
  count: number;
  errors: { [key: string]: string }
}