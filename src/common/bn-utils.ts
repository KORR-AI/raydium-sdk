import BN from 'bn.js'

// Create a replacement for the missing isBN function
export function isBN(obj: any): obj is BN {
  return obj !== null && 
         typeof obj === 'object' && 
         obj.constructor && 
         obj.constructor.name === 'BN' &&
         typeof obj.toString === 'function' &&
         typeof obj.toNumber === 'function'
}
