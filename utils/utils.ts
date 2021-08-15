export const cx = (...args: (string | false | undefined)[]) => args.filter(Boolean).join(' ');
