const debounceTime = (milliseconds, fn) => {
    let timer = 0;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(fn, milliseconds);
    }
};

const pipe = (...fns) => value => 
    fns.reduce((previousValue, fn) => 
        fn(previousValue), value);

const partialize = (fn, ...args) => 
    fn.bind(null, ...args);