export default class storeService {
    data = [
        {
            text: 'Learn Redux',
            finished: false,
            id: 0
        },
        {
            text: 'Learn React Native',
            finished: false,
            id: 1
        }
    ]

    getTodos() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data) 
                reject( new Error('something bad happened'))
            }, 700);
        });
    }
}