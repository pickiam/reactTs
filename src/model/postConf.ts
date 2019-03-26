export interface imgList {
    uid: string;
    name?: string;
    status?: string;
    url?: string;
    type?: any;
    size?: any;
}
export interface postConfEntity {
   key: string,
   name: string,
   age: string,
   address: string,
   imgList: Array<imgList>
}