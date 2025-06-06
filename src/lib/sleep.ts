async function sleep({ seconds = 1 }: { seconds: number }): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
}

export { sleep };
