# Binary Search

Implement a binary search function that, given a sorted list and an element to
look for, returns the index of the element in the list or -1 if the element is
not there.

Use the template in `code.js`. The tests in `code.test.js` will be run
automatically every time you push to Github; if they pass you are done.


“I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.”-Andrew Thomas


## My Process
*Written by Andrew Thomas*<br/>
*1/26/2025*

Implementing my function recursivley way turned out to be quite the challange for me and so here I will document my work process and the different code iterations I went through.

### Attempt #1
```Javascript


function binarySearch(list, element) {
    var first = list[0];
    var last = list[list.length - 1];
    var mid = list[Math.floor((list.length) / 2)];
    
    if ((element == mid || first == last)) {
        return mover
    }
    else if (element < mid) {
        return binarySearch(list.slice(0, Math.floor(list.length/2)), element);
    }
    else if (element > mid) {
        mover=list.indexOf(mid)+1
        return  binarySearch((list.slice( Math.floor(list.length/2), list.length-1)), element)+mover
    }
    else {
        return -1;
    }
}


```
Here in My first attempt. I first ran into trouble trying to recover my index, I was able to find any number in an array and print it out but recovering the index was difficult because it would reset every time I hit a recursive call. I also made things harder for myself by making my first last and mid varaibles the actual numbers and not just index's within a given array. I messed around with this for a while but got frustrated enough that I tried again

### Attempt #2

``` Javascript
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

    while(list[mid]===list[mid-1]){
        if(counter!=0){
            counter-=1;
            mid-=1;
        }
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



```
My second attempt began after I learned what a function closure was. My thought process was that I could stop my functions local varaibles from resetting by having a function closure keep the value of the variable I needed. So here I created a tracker function. This actually worked pretty well but when I went to test it on Github my code kept failing on edge cases,which resulted in me addeding a bunch of cases to fix those. However this made my function way too complicated and eventually it just ran an infinite loop for an empty case so I tried simplying and started over again.


### Attempt #3: Success

``` Javascript
function binarySearch(list, element) {

    function _binarySearch(list,element,first,mid,last){
        
        while(list[mid]===list[mid-1]&&list.length!=0){
             mid-=1;

        }
        if((list[first]==list[last]&&list.length!=0)){
            return first;
        }
        else if(element==list[mid]){
            return mid;
        }
        else if(element<list[mid]){
            return _binarySearch(list,element,first,mid-1,last-1);
        }
        else if(element>list[mid]){
            return _binarySearch(list,element,first+1,mid+1,last);
        }
        else{
        return -1;
        }


    }
    return _binarySearch(list,element,0,Math.floor(list.length/2),list.length-1)

}


```
This is my final rendition of the code, I decided it would be easier to just have function closure encapsulate everything the code needed to do because then I could inculde the first middle and last varaibles as parameters in function which would fix my varaibles from being reset. Then I just returned that function in my main function call and I was able to get it working!

## Sources-
no.1 https://www.w3schools.com/js/js_function_closures.asp- Used this to learn about function closures which is the method I used to build my function recursivley.

no.2- Chat GPT quiery-"How can I stop a counter varaible from resetting without adding it as a parameter in the function for a binary search? And do so only conceptually I don't want you to give me code"- This is where I learned about using function closures 

no.3- My roomate helped me implement the function closure because he had done something similar in the functional programming class, specficially he gave me some psudo code to work with that helped develop the process I ended up using 

no.4- Got help with edge case from Noah Vogt after class in the from of psudo code. Specifcally he helped me with the case when you have repeats in your array such as a=[1,1,2,2]
