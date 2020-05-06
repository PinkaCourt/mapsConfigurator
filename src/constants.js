export default const getOptions = {
  method: 'GET',
  headers: {
    Authorization: 'Basic ' + btoa(USER + ':' + PASS),
    ContentType: 'application/json'
  }
}

