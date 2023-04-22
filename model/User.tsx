export class User {
  uid: string;
  cn: string;
  // description: string;
  jwttoken: string;
  voted: number; // -1 0 1

  constructor(result: {
    data: {
      uid: Array<string>;
      cn: Array<string>;
      description: Array<string>;
    };
    jwttoken: string;
  }) {
    this.uid = result.data.uid[0];
    this.cn = result.data.cn[0];
    // this.description = result.data.description[0];
    this.jwttoken = result.jwttoken;
  }
}
