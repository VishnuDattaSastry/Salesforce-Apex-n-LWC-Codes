import { LightningElement } from 'lwc';
import VISHNU_VJA_PIC from '@salesforce/resourceUrl/vishnu_vja_pic'
import VISHNU_PP_PIC_VJA from '@salesforce/resourceUrl/vishnu_pp_pic_vja'
export default class StaticImagesDemo extends LightningElement {
    vishnuBlrPic = VISHNU_VJA_PIC
    vishnuvjapic = VISHNU_PP_PIC_VJA
}