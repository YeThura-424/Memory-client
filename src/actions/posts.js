import * as Api from '../api';

//action creators
export const getPosts = () => async(dispatch) => {
    // const actions = { type: 'FETCH_ALL', payload: [] };
    // return actions;

    try {
        const { data } = await Api.fetchPosts(); //{data} => response.data
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}