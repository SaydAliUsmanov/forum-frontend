type Mods = Record<string, boolean | string>

export const classNames = (
  cls: string,
  mods?: Mods,
  additional?: string[],
): string => [
  cls,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([classNames, value]) => Boolean(value))
    .map(([classNames]) => classNames),
].join(' ');
