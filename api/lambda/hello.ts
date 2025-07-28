export default async () => ({
  message: 'Hello Modern.js',
});

export const post = async (...args: any) => {
  console.log(args);
  return { message: 'Hello Modern.js'};
};
