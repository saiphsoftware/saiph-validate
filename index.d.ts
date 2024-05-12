import { ValidateFn } from "@saiphsoft/validate/validators";

export default function validate ( value: any, validators: ValidateFn[] ): ValidationResult;

interface ValidationResult {
  valid: boolean;
  count: number;
  errors: { [key: string]: string }
}