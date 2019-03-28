interface imgList {
    uid: string;
    name?: string;
    status?: string;
    url?: string;
    type?: any;
    size?: any;
}
export interface customerEntity {
    id?: string;
    customerName: string;
    customerIcon: string;
    customerEvaluation: string;
    fileList?: Array<imgList>
}