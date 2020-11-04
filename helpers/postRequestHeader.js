export default function postRequestHeader(jsonObj){
    return {
        mode: 'cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonObj)
      }
}