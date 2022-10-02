import { App } from 'aws-cdk-lib';
import { Stack, DockerfileDeployment } from '@pinecodes/cdk';

export const app = new App();

const stack = new Stack(app, 'hello-world');

new DockerfileDeployment(stack, 'hello-world', {
  containerPort: 80,
});
