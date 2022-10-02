import * as cdk from '@pinecodes/cdk';

export const app = new cdk.App();

const stack = new cdk.Stack(app, 'hello-world');

new cdk.DockerfileDeployment(stack, 'hello-world', {
  containerPort: 80,
});
