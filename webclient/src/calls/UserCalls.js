import axios from 'axios';

export async function getUserDataCall(token, user, resp, reject) {
  //console.log({userdata:user});
     axios({
      url: process.env.REACT_APP_URL_GRAPHQL_USERS,
      method: 'post',
      headers:{
        "access-token":token
      },
      data: {
        query: `query {user(input:{_id:"${user._id}"}){message, success, user{email,password,name}}}`
      }
    }).then(res => {
      const userResponse = res.data.data.user;
      console.log(userResponse);
      if(userResponse.success===true){
        resp(userResponse);
      }
      //reject(userResponse);
    }).catch((e) =>{
      console.error(e);
      //reject({auth:{success:false, message:e.response.data.errors[0].message,token:null}})
    })
    ;
}