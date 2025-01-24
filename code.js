function binarySearch(list, element) {
    var first = 0;
    var last = list.length-1;
    var mid = Math.floor((list.length) / 2);
    let counter =0;
    let added=false;
    function tracker(){
        if(added){
            counter=counter+mid+1;
            added=true;
        }
        else{
            counter+=mid;
        }
        
    }

    while(list[mid]===list[mid-1]&&counter!=0){
            counter-=1;
            mid-=1;
    }
    if((list[first]==list[last]&&list.length!=0)){
        return counter;
    }
    else if(element==list[mid]){
        return mid;
    }
    else if(element< list[mid]){
        return binarySearch(list.slice(first,mid), element)
    }
    else if(element > list[mid]){
        tracker();
        return binarySearch(list.slice(mid,last+1), element)+counter;
    }
    else{
        return -1;
    }
}
