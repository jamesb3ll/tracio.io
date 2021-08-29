import { customAlphabet } from 'nanoid';

// The 0OIl characters are not used in the base58 encoding scheme.
const BASE_58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';

export const nanoid = customAlphabet(BASE_58, 16);

export const cx = (...args: (string | false | undefined)[]) =>
  args
    .filter(s => typeof s === 'string')
    .map(s => (s as string).trim())
    .join(' ');
