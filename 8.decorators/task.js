// Задача 1
function cachingDecoratorNew(func) {
  let cache = [];
  
  return function(...args) {
    const hash = md5(args);
    
    for (let el of cache) {
      if (el.hash === hash) {
        console.log(`Из кэша: ${el.value}`);
        return `Из кэша: ${el.value}`;
      }
    }
    
    const value = func(...args);
    cache.push({hash, value});
    cache.length > 5 ? cache.shift() : '';
    
    console.log(`Вычисляем: ${value}`);
    return `Вычисляем: ${value}`;
  }
}

// Задача 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;

    if (!timeoutId) {
      func(...args);
      wrapper.count++;
    } else {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay);
  }
  return wrapper;
}