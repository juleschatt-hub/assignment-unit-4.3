console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {

    basket.push(item);
    return true;
}

console.log('addItem() returns:', addItem('return true test item')); //test for add item returning true

addItem('pizza');
addItem('car');
addItem('scrambled eggs');
addItem('toothbrush');
//addItem(['firstItem', 'second item', 'third item'])


console.log('items in basket array', basket);


function listItems() {
    console.log('Items of basket array listed:')
    let itemNum = 1;
    for (let item of basket) {
        console.log('Item' + itemNum + ':', item);
        itemNum += 1;
    }
}

listItems(); 
//test for list times is the logging that happens 
//within the loop of the function


// function empty(basket) {
//     for(let item of basket){
//         basket.pop();
//     }
//  }
//end empty

function empty() {
    basket.length = 0;
}
empty();

console.log('after empty', basket) //test for empty()




// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch (e) {
    // Do nothing
}
