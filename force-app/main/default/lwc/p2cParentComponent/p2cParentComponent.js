import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    carouselData=[  // In this property we have created array of objects
        {           // Key value pair. 
        src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
        header:"First Card in the Carousel",
        description: "First Card i.e. Eenadu News Paper",
        href: "https://www.eenadu.net/"
        },
        {  
            src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header:"Second Card in the Carousel",
            description: "Second Card for TOI News Paper",
            href: "https://timesofindia.indiatimes.com/"
            },
            {  
                src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
                header:"Third Card in the Carousel",
                description: "Third Card for BBC News Paper",
                href: "https://www.bbc.com/news"
                }
    ]
    percentage=10
    changeHandler(event) {
        this.percentage = event.target.value 
    }
    handleClick() {
        this.template.queryselector('c-p2c-slider-component').resetSlider()
    }
}