/* eslint-disable no-console */
// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  return teams.reduce((winner, team) =>
    team.score > winner?.score ? team : winner
  ).name;
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
  return (
    "?" +
    Object.keys(qsObj)
      .map((k: string) => `${k}=${qsObj[k]}`)
      .join("&")
  );
};

// Задание 3

export const parseQs = (qs: string): QsObj =>
  qs
    .substring(1)
    .split("&")
    .map((x) => x.split("="))
    .reduce((a, x) => ({ ...a, [x[0]]: x[1] }), {});
