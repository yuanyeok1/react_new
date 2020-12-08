import { useState, useEffect } from 'react';

const useInfiniteScroll = (handleLoadMore) => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        console.log('1...');
        if (!isFetching) return;
        console.log('2...');
        handleLoadMore();
    }, [isFetching]);

    function handleScroll() {
        console.log('window.innerHeight + document.documentElement.scrollTop = ', window.innerHeight + document.documentElement.scrollTop);
        console.log('document.documentElement.offsetHeight = ', document.documentElement.offsetHeight);
        console.log('isFetching = ', isFetching);
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) return;
        setIsFetching(true);
    }

    return [isFetching, setIsFetching];
};

export default useInfiniteScroll;