import { ICheckoutService } from './../../@types/interface';
import { IDataInteractCustomers } from "../../@types/interface";
import love from "../../assets/main/lovere.png";
import safe from "../../assets/main/safere.png";
import home from "../../assets/main/homere.png";
import star from "../../assets/main/starre.png";

export const dataInteractCustomers: IDataInteractCustomers[] = [
    {
        src: love,
        alt: "favorite customers",
        description: "99% favorite customer ",
    },
    {
        src: safe,
        alt: "guarantee of safe",
        description: "100% guarantee of safety",
    },
    {
        src: home,
        alt: "customers return",
        description: "98% customer return",
    },
    {
        src: star,
        alt: "customers rate",
        description: "97% customer rate 5 stars",
    },
]
export const dataCheckoutService: ICheckoutService[] = [
    {
        procedure: "Deplume - ears cleaning",
        silver: true,
        gold: true,
        platinum: true,
        diamond: true,
    },
    {
        procedure: "Ablutions, sanitary",
        silver: true,
        gold: true,
        platinum: true,
        diamond: true,
    },
    {
        procedure: "Dyring, comb hair out",
        silver: true,
        gold: true,
        platinum: true,
        diamond: true,
    },
    {
        procedure: "Brush dead hair",
        silver: true,
        gold: true,
        platinum: true,
        diamond: true,
    },
    {
        procedure: "Spray perfume ",
        silver: true,
        gold: true,
        platinum: true,
        diamond: true,
    },
    {
        procedure: "Spay hair care ",
        silver: false,
        gold: true,
        platinum: true,
        diamond: true,
    },
    {
        procedure: "Shave legs - abdomen - anus",
        silver: false,
        gold: true,
        platinum: true,
        diamond: true,
    },
    {
        procedure: "Cut nails, sharpen nails",
        silver: false,
        gold: false,
        platinum: true,
        diamond: false,
    },
    {
        procedure: "Full body shave",
        silver: false,
        gold: false,
        platinum: false,
        diamond: true,
    },
    {
        procedure: "Style trimming",
        silver: false,
        gold: false,
        platinum: false,
        diamond: true,
    },
]