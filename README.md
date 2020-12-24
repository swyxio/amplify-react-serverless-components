# amplify-react-serverless-components

> a trial app to deploy React Server Components inside of a serverless AWS Lambda function, scaffolded using the AWS Amplify CLI


![image](https://user-images.githubusercontent.com/6764957/103055871-65502080-45d6-11eb-82ad-b91931cc02d7.png)

> Context - [What are React Server Components?](https://dev.to/swyx/an-annotated-guide-to-the-react-server-components-demo-2a83)

The main React code and serverless code can be found in `/amplify/backend/function/rsc/src`.

## You can watch the live stream here! https://www.youtube.com/watch?v=VA3TFymZlW4

## Live demo: https://m5x7he153l.execute-api.us-east-1.amazonaws.com/dev/rsc/

The main steps are:

- take https://github.com/pomber/server-components-demo React team demo minus Postgres
- create a new serverless function from scratch
- copy over the dependencies
- copy over the minimal client code
- copy over the minimal server code and  adapt it to a serverless context
- fix the build script
- make sure to set nodejs flags and env variables exactly according to the original React team demo
- Warning: client components dont work in production if you are compiling them on your machine because they use absolute paths (LINK TO DAN ABRAMOV TWEET)0



