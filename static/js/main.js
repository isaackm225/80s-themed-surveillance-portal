//implementation of the intersectionObserver technique to animate on scroll
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        entry.isIntersecting?entry.target.classList.add('show'):entry.target.classList.remove('show')
    })
})

const hiddenElements = domcument.querySelectorAll('.hidden');
