const DOMAIN_VALUES = ['my-anime-list', 'ani-list'] as const;
export type Domain = (typeof DOMAIN_VALUES)[number];

export function isDomain(value: string): value is Domain {
  return DOMAIN_VALUES.includes(value as never);
}
