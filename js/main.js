const PrimaryHeader = document.querySelector('.primary_header');
const scrollWatcher = document.createElement('div');

scrollWatcher.setAttribute('data-scroll-watcher','' );  
PrimaryHeader.before(scrollWatcher);

const navObserver = new IntersectionObserver((entries) => {
    PrimaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
}, {rootMargin:"10px 0px 0px 0px"});

navObserver.observe(scrollWatcher)


