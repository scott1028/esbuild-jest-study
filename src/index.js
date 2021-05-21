import { testFn } from 'MY_LIB/wrench';

export const main = async () => {
  const output = await testFn();
  console.log('main/output:', output);
  return output;
};

export default {
  main,
};
