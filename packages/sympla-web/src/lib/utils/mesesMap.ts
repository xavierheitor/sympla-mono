export const mesesMap: Record<string, { start: string; end: string }> = {
  JANEIRO: { start: '-01-01', end: '-01-31' },
  FEVEREIRO: { start: '-02-01', end: '-02-28' }, // Corrigir para 29 se bissexto
  MARCO: { start: '-03-01', end: '-03-31' },
  ABRIL: { start: '-04-01', end: '-04-30' },
  MAIO: { start: '-05-01', end: '-05-31' },
  JUNHO: { start: '-06-01', end: '-06-30' },
  JULHO: { start: '-07-01', end: '-07-31' },
  AGOSTO: { start: '-08-01', end: '-08-31' },
  SETEMBRO: { start: '-09-01', end: '-09-30' },
  OUTUBRO: { start: '-10-01', end: '-10-31' },
  NOVEMBRO: { start: '-11-01', end: '-11-30' },
  DEZEMBRO: { start: '-12-01', end: '-12-31' },
};
