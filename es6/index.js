window.addEventListener('DOMContentLoaded',()=>{
    document.querySelectorAll('a').forEach((a)=>{
        a.addEventListener('click', (e)=>{
            e.preventDefault();
        })
    })
});
