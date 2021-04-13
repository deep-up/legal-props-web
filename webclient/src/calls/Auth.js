import axios from 'axios';

export async function authCall(email, password, resp, reject) {
  console.log(process.env.REACT_APP_URL_AUTH_USERS);
     axios({
      url: process.env.REACT_APP_URL_AUTH_USERS,
      method: 'post',
      data: {
        query: `mutation {
                    auth(input: {email: "${email}", password: "${password}"}) {
                      success
                      message
                      token
                      _id
                    }
                  }`
      }
    }).then(res => {
      //console.log(res.data);
      resp( res.data);
    }).catch((e) =>{
      console.error(e.response.data.errors);
      reject({auth:{success:false, message:e.response.data.errors[0].message,token:null}})
    })
    ;
}