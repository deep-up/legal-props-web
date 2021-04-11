import axios from 'axios';

export async function authCall(username, password, resp) {
     await axios({
      url: process.env.REACT_APP_URL_GRAPHQL_USERS,
      method: 'post',
      data: {
        query: `mutation {
                    auth(input: {username: "${username}", password: "${password}"}) {
                      success
                      message
                      token
                    }
                  }`
      }
    }).then(res => {
      /*console.log(res.data);*/
      resp( res.data);
    });
  }