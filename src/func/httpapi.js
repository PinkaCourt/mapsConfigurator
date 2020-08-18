export class GetOptions {
  constructor(AUTH) {
    this.method = 'GET';
    this.headers = {
      Authorization: AUTH,
      ContentType: 'application/json'
    };
  }
}

export class PostOptions {
  constructor(AUTH, body) {
    this.method = 'POST',
    //this.mode = 'no-cors',
    //this.credentials = 'include',
    this.headers = {
      Authorization: AUTH,
      //ContentType: 'application/javascript'
      ContentType: 'application/json',
      },
    this.body = JSON.stringify(body)
    //console.log('this.headers' , this.headers)
    }
    
}