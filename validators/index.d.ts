export function required (): ValidateFn;
export function pattern ( reg: RegExp ): ValidateFn;

export function mininum ( min: number ): ValidateFn;
export function maximum ( max: number ): ValidateFn;
export function minLength ( min: number ): ValidateFn;
export function maxLength ( max: number ): ValidateFn;

export function validPhone (): ValidateFn;
export function validEmail (): ValidateFn;
export function validName (): ValidateFn;
export function validText (): ValidateFn;

type ValidateFn = ( ...args: any[] ) => string | null;