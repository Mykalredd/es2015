// import React from 'react';


function choice(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
  }
  
function remove(items, item) {
    const index = items.indexOf(item);
    if (index !== -1) {
      return items.filter((_, i) => i !== index);
    }
    return items;
  }
  


export {choice, remove};

// This file should export two array helper functions:

// - *choice(items)*: returns a randomly selected item from array of items
// - *remove(items, item)*: removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.