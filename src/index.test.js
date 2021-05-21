import { main } from './index';

// NOTE: hoisted automatically, the `jest.moduleNameMapper` also works well.
jest.mock('MY_LIB/wrench', () => ({
  testFn: () => 'mock wrench!',
}));

test('simple test', async () => {
  const output = await main();
  console.log('output:', output);
  expect(true).toBe(true);
});
