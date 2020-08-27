export class GetOptions {
  constructor() {
    this.method = 'GET';
    this.headers = {
      ContentType: 'application/json'
    };
  }
}

export class PostOptions {
  constructor(body) {
    this.method = 'POST',
    this.headers = {
      ContentType: 'application/json',
      },
    this.body = JSON.stringify(body)
    }
    
}