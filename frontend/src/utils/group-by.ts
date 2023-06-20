export function groupBy<T = any>(arr: Array<T>, property: string) {
  return arr.reduce((acc: { [key: string]: Array<T> }, cur: T | any) => {
    acc[cur[property]] = [...(acc[cur[property]] || []), cur];
    return acc;
  }, {});
}

export default groupBy;
