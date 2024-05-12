import { ValidateFn } from "@saiphsoft/validate/validators";

export default function validate ( value: any, validators: ValidateFn[], options?: ValidateOptions ): ValidationResult;

interface ValidationResult {
  valid: boolean;
  count: number;
  errors: { [key: string]: string }
}

interface ValidateOptions {
  locale?: string;
}