export interface IDataPetCategory {
    src: string,
    alt: string,
    title: string,
}
export interface IDataFeaturedPet{
    src: string,
    alt?: string,
    namePet: string,
    pricePet: number,
}
export interface ISelectColor{
    colorCode: string,
    colorName: string,
}
export interface ISelectAge{
    checked: boolean,
    age: string,
    description: string,
}
export interface IDataInteractCustomers{
    src: string,
    alt: string,
    description: string,
}
export interface IDataYourStory{
    src: string,
    alt: string,
    name: string
}
export interface dataStoryProps {
    dataStory: IDataYourStory
}
export interface DataPetProp {
    dataPet: IDataFeaturedPet;
  
}
export interface ICheckoutService{
    procedure: string,
    silver: boolean,
    gold: boolean,
    platinum: boolean,
    diamond: boolean,
}