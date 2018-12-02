//================================ Jeffery Cen ================================
//
// Purpose: DYNAMICALLY GENERATE THOSE PAGES
//
//=============================================================================

let portfolioContent = {
    megumin: ["Vectorization: Characters", "Graphic Design, Minimalist", 'Set of characters created in a minimalistic style created with the pen tool. Characters are those that I really liked the design or backstory of from shows that I have watched. Started off as just a urge to create but turned into a project to help me master the pen tool. Created and coloured within Adobe Illustrator with the Pen Tool.', "<img class='imgStill imgCent' src='images/char/jpgMeg.png'><img class='imgStill imgCent' src='images/char/jpgGwen.png'><img class='imgStill imgCent' src='images/char/Spider.png'>"],

    roku: ["Brand: The Roku", "Graphic Design, Branding", "An attempt to create an online brand with a focus on graphic shirts. The Roku started off as an attempt with my friend and I to create an e-Commerce clothing brand based on Toronto Asian culture but is going through a revamp. With a new focus more on graphic design with the first 'line' of clothing a focus on characters wearing masks. Designs created with Adobe Photoshop and Illustrator.", "<div><img class='imgCard imgCent' src='../src/images/roku/rokucard.png'></div><div id='carouselExampleIndicators' class='carousel slide' data-ride='carousel'><ol class='carousel-indicators'><li data-target='#carouselExampleIndicators' data-slide-to='0' class='active'></li><li data-target='#carouselExampleIndicators' data-slide-to='1'></li><li data-target='#carouselExampleIndicators' data-slide-to='2'></li><li data-target='#carouselExampleIndicators' data-slide-to='3'></li></ol><div class='carousel-inner'><div class='carousel-item active'><img class='d-block w-100' src='../src/images/roku/mask1.jpg' alt='First slide'></div><div class='carousel-item'><img class='d-block w-100' src='../src/images/roku/Back2.jpg' alt='Second slide'></div><div class='carousel-item'><img class='d-block w-100' src='../src/images/roku/Sweater1.jpg' alt='Third slide'></div><div class='carousel-item'><img class='d-block w-100' src='../src/images/roku/Front3.jpg' alt='Fourth slide'></div></div></div>"],

    camp: ["Vector Art: Shapes", "Illustration, Minimalist", "Similar to the vector character design, these are pieces where I restricted myself to using only the shape tool to create scenery. Of course the unicorn you see is just a vector. Created using Adobe Illustrator.", "<div><img class='imgCard imgCent' src='../src/images/camp.png'><img class='imgCard imgCent' src='../src/images/unicorn.png'></div>"],

    bmj: ["Wallpaper: League of Legends", "Graphic Design, Image Splice", "One of my friend is really into League of Legends and Jhin is his favourite champion. He requested a pair of Jhin wallpaper which can be seen below. By removing the character from the orignal, I spliced it into two different images that related to the skin theme and attempted to create some depth with the square surrounding him. The female character was something I created for myself. Created in Adobe Photoshop.", "<div><img class='imgWall imgCent' src='../src/images/wallpap/bloodmoon.jpg'><img class='imgWall imgCent' src='../src/images/wallpap/HNJhin.jpg'><img class='imgWall imgCent' src='../src/images/wallpap/BMDiana.jpg'></div>"],

    amacss: ["Poster: AMACSS", "Graphic Design, Image Splice", "Working as the Marketing Executive Assistant at the Association of Mathematical and Computer Science Student at the University of Toronto I was usually tasked with creating posters and banners for events that the society held. Below is an example of the type of work I would usually complete for them which consisted of splicing images together. Created using Adobe Photoshop.", "<div><img class='imgStill imgCent' src='../src/images/amacss/amacss.jpg'><img class='imgStill imgCent' src='../src/images/amacss/fb.png'><img class='imgStill imgCent' src='../src/images/amacss/banner.jpg'></div>"],

    unicorn: ["Vector Art: PokeEnvironment", "Illustration, Minimalist", "A new set of pieces that I am planning on doing for each PokeBall, from Pokemon. It has been highly debated and argued over on what the inside of a Pokeball is like for a Pokemon, usually it is represented as a room or environment that relates to the type of Pokemon inside but I wanted to instead show something more complete inside. Created in Adobe Illustrator.", "<div><img class='imgWall imgCent' alt='pokeball' src='../src/images/pokeball/1.jpg'></div>"],

    champ: ["Redesign: champion.gg", "UI/UX, App", "A redesign of a website that I used when playing League of Legends. The mobile version of champion.gg was not created for a mobile layout so I decided to create a mock design of what it potentially could of have. I focused on the important stats/information that a player would need to have and skipped out on the extra information that the desktop site had. Created in Adobe Xd and Photoshop.", "<div class='container'><div class='row'><div class='col-sm-6'><img class='imgWall imgCent' src='../src/images/champ/1.jpg'></div><div class='col-sm-6'><img class='imgWall imgCent' src='../src/images/champ/2.jpg'></div></div></div><div class='container'><div class='row'><div class='col-sm-6'><img class='imgWall imgCent' src='../src/images/champ/Info.jpg'></div><div class='col-sm-6'><img class='imgWall imgCent' src='../src/images/champ/load.jpg'></div></div></div>"],

    r8: ["App Concept: R8", "UI/UX, App", "A new take on an app that combines the social aspects of Facebook and the review function of websites like Yelp.Those hunting for new places to eats can rejoice as this all-in-one app will give them the ability to filter and see reviews of the restaurants around them as well as connect with foodie reviewers to see their top picks. One of the many problems I see with the typical reviews of restaurants is that I can't always trust what some people say so by allowing users to connect with trusted reviewers, they know that they can trust the reviews and recommendations. Created in Adobe Xd, Illustrator and Photoshop.", "<img class='imgWall imgCent' alt='mockup' src='../src/images/r8/mock.png'><div class='container'><div class='row'><div class='col-sm-6'><img class='imgWall imgCent' src='../src/images/r8/1.png'></div><div class='col-sm-6'><img class='imgWall imgCent' src='../src/images/r8/2.jpg'></div></div></div><div class='container'><div class='row'><div class='col-sm-6'><img class='imgWall imgCent' src='../src/images/r8/3.png'></div><div class='col-sm-6'><img class='imgWall imgCent' src='../src/images/r8/4.jpg'></div></div></div>"]

}

/**
 * Dynamically fills the pages with the content in the portfolio content
 */
function FillContent() {
    let portfolioCall = document.location.href.split('?').splice(1);
    let contentId = ["contentTitle", "contentSubtitle", "contentDesc", "contentShowcase"];
    if (portfolioContent[portfolioCall] != undefined) {
        for (i = 0; i < contentId.length; i++) {
            if (contentId[i] != "contentShowcase") {
                document.getElementById(contentId[i]).innerHTML = portfolioContent[portfolioCall][i];
            } else if (contentId[i] === "contentShowcase") {
                let append_str = portfolioContent[portfolioCall][i];
                $('#contentShowcase').append(append_str);
            }
        }
    }
}

function fadePage() {
    document.getElementById('thePage').className += ' thePage';
    $(function() {
        $('#thePage').removeClass('thePageEmpty');
    });
}


/**
 * Initialize these certain set of codes 
 */
function init() {
    FillContent();
    fadePage();

}

init();