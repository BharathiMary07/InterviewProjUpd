export class PurchaseOrder{
  constructor(
  public po: number,
  public podate: string,
  public reqshipdate: string,
  public age: number,
  public so:number,
  public invsup: string,
  public con:number,
  public cusref: string,
  public payterms: string,
  public status:string,
  public purloc: string,
  public shipto: string,
  ){}
}
