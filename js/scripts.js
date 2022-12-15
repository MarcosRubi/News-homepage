window.onload = ()=>{
    const menuContainer = document.querySelector('.menu')
    const btnToggleMenu = document.querySelectorAll('.toggle-menu')

    btnToggleMenu.forEach(btn => {
        btn.onclick = ()=>{toggleMenu()}
    });
    function toggleMenu (){
        menuContainer.classList.toggle('show')
    }

    // ANIMACIONES CARGA DE PAGINA
    const startAnimation = (entries, observer)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('visible')
            }
        });
    }

    const observer = new IntersectionObserver(startAnimation, {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    })

    const header = document.querySelector('header')

    const bannerImg = document.querySelector('.banner img')
    const bannerTitle = document.querySelector('.banner h1')
    const bannerDescription = document.querySelector('.banner p')
    const bannerBtn = document.querySelector('.banner .btn')

    const newsBadge = document.querySelector('.news .badge')
    const newsArticles = document.querySelectorAll('.news article')

    const topsArticles = document.querySelectorAll('.tops article')

    const footer = document.querySelector('footer p')


    observer.observe(header)

    observer.observe(bannerImg)
    observer.observe(bannerTitle)
    observer.observe(bannerDescription)
    observer.observe(bannerBtn)

    observer.observe(newsBadge)
    newsArticles.forEach(article => {
        observer.observe(article)
    });

    topsArticles.forEach(article => {
        observer.observe(article)
    });

    observer.observe(footer)
}