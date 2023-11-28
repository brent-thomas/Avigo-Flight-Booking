//Need to  install: npm i amazon-cognito-identity-js
import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_D2UsWNsqJ",
  ClientId: "64i3602c5g6oqeqm69mi0hv0n7",
};
export default new CognitoUserPool(poolData);
