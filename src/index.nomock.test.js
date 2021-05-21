import { main } from './index';

test('simple test', async () => {
  const output = await main();
  console.log('output:', output);
  expect(true).toBe(true);
});
