//UI
// Start Button
const navButtons = document.querySelector('.navbuttons');
navButtons.addEventListener('click',()=>navButtons.classList.toggle('changes'));
// End Button


// Start Navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    const getScrollY = window.scrollY;
    // console.log(getScrollY);

    if (getScrollY >= 200){
       navbar.classList.add('navmenus');
    }else{
        navbar.classList.remove('navmenus');
    }
});
// End Navbar


// Start Gallery
const galleryLists = document.querySelectorAll('.gallerylists');
const filterNews = document.querySelectorAll('.filters.new'),
    filterFrees = document.querySelectorAll('.filters.free'),
    filterPros = document.querySelectorAll('.filters.pro');

galleryLists.forEach((galleryList)=>{
    // console.log(galleryList);

    galleryList.addEventListener('click',(e)=>{
        let datafilter = galleryList.getAttribute('data-filter');
        // console.log(datafilter);

        removeActiveItems();
        e.target.classList.add('activeitems');

        if (datafilter === "all"){
            // removeActiveItems();
            // e.target.classList.add('activeitems');

            filterNews.forEach(filterNew => {
               filterNew.style.display = "inline-block";
            });

            filterFrees.forEach(filterFree => {
               filterFree.style.display= "inline-block";
            });

            filterPros.forEach(filterPro => {
               filterPro.style.display = "inline-block";
            });

        }else if (datafilter === "new"){
            // removeActiveItems();
            // e.target.classList.add('activeitems');

            filterNews.forEach(filterNew => {
                filterNew.style.display = "inline-block"; //block
            });

            filterFrees.forEach(filterFree => {
                filterFree.style.display= "none";
            });

            filterPros.forEach(filterPro => {
                filterPro.style.display = "none";
            });
        }else if (datafilter === "free"){
            // removeActiveItems();
            // e.target.classList.add('activeitems');

            filterNews.forEach(filterNew => {
                filterNew.style.display = "none";
            });

            filterFrees.forEach(filterFree => {
                filterFree.style.display= "inline-block";
            });

            filterPros.forEach(filterPro => {
                filterPro.style.display = "none";
            });
        }else{
            // removeActiveItems();
            // e.target.classList.add("activeitems");

            filterNews.forEach(filterNew => {
                filterNew.style.display = "none";
            });

            filterFrees.forEach(filterFree => {
                filterFree.style.display= "none";
            });

            filterPros.forEach(filterPro => {
                filterPro.style.display = "inline-block";
            });
        }
   });
});

// remove current active
function removeActiveItems(){
    galleryLists.forEach(galleryList=>{
       galleryList.classList.remove('activeitems');
    });
}
// End Gallery


// Start Footer Section
const showyear = document.getElementById('showyear');
const getFullYear = new Date().getFullYear();
showyear.textContent = getFullYear;
// End Footer Section
