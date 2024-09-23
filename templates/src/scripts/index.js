function backAway(){
    //if it was the first page
    if(history.length === 1){
        window.location = "http://localhost:3000"
    } else {
        history.back();
    }
}

backAway();