import { app } from './cdk';
import { cdkAppSnapshotSerializer } from '@pinecodes/cdk';

expect.addSnapshotSerializer(cdkAppSnapshotSerializer);

test('snapshot', () => {
  expect(app).toMatchSnapshot();
});
