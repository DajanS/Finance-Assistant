export interface ITransaction {
    id: number,
    category_id:number,
    type:String,
    name: String,
    planned: String,
    value:number,
    date:String,
    category_name?:String
}
