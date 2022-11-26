class ScrollTop{

    // scrolls to the top of the window
    scrollUp(){

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });  
    }

}

export default new ScrollTop(); 