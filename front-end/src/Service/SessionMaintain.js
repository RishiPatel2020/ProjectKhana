import React from 'react'


class Session{

    isLoggedIn = ()=>{
        if(localStorage.getItem('userData')){
            return true;
        }
        return false;
    
    };

    getItem=(key)=>{
        if(this.isLoggedIn()){
            return localStorage.getItem(key);
        }else{
            return null; 
        }
    }
    addItem = (key,value)=>{
        localStorage.setItem(key,value); 
    }


    removeItem(key){
        localStorage.removeItem(key); 
    }

}


export default new Session(); 