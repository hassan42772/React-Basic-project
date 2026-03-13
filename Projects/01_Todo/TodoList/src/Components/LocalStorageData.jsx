 let LocalStorageName = "tasks";    
 export const GetLocalStorageData = () => {
    const storedTasks = localStorage.getItem(LocalStorageName);
    return storedTasks ? JSON.parse(storedTasks) : [];
}

export default GetLocalStorageData;

export const SetLocalStorageData = (data) => {
    localStorage.setItem(LocalStorageName , JSON.stringify(data));
}
