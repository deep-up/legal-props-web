
import ApiService from '../../utils/ApiService'
import StorageService from '../../utils/StorageService'

const requestUsers = () => ({
    type: 'USERS_REQUEST',
})

const receiveUsers = (data) => ({
    type: 'USERS_RECEIVE',
    data,
})

const failureUsers = () => ({
    type: 'USERS_FAILURE',
})

export const getUsers = (params) => async (dispatch, getState) => {
    try {
        dispatch(requestUsers())
        const params = getState().form
        const data = await ApiService.getUsers(params)
        if (Object.keys(params).length && data) {
            //save successful request
            StorageService.setSearchData(params)
        }
        dispatch(receiveUsers(data))
    } catch (e) {
        dispatch(failureUsers())
    }
}