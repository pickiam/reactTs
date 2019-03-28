interface imgList {
    uid: string;
    name?: string;
    status?: string;
    url?: string;
    type?: any;
    size?: any;
}
export interface introductionEntity {
    id?: string;
    Title: string;
    BackGround: string;
    Content: string;
    fileList?: Array<imgList>
}