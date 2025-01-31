export function fetchItemsApi(): Promise<string[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['Item 1', 'Item 2', 'Item 3']);
    }, 1000);
  });
}
