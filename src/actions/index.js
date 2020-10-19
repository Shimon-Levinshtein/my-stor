const uniqueID = () => {
    const date = new Date().toLocaleDateString();
    const sortByDate = new Date().getTime();
    const randomNum = Math.floor(Math.random() * 10000);
    return date + '-' + sortByDate + '-' + randomNum;
}
export const firstStoreList = () => async dispatch => {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    let data = await response.json();
    data = data.slice(0, 15);
    const newData = data.map(obj => {
        obj.price = Math.floor(Math.random() * 100);
        obj.name = 'Product ' + obj.id;
        obj.UniqueId = uniqueID();
        obj.description = obj.title;
        obj.data = new Date();
        obj.data.setDate(obj.data.getDate() - Math.floor(Math.random() * 10));
        return obj
    })
    dispatch({ type: 'LIST_STORE', payload: newData });
}
