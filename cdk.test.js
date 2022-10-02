import { app } from './cdk';

test('snapshot', () => {
  expect(app).toMatchSnapshot();
});
