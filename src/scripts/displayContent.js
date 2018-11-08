//================================ Jeffery Cen ================================
//
// Purpose: DYNAMICALLY GENERATE THOSE PAGES
//
//=============================================================================

let portfolioContent = {
    megumin: ["Vector: Megumin", "Graphic Design, Minimalist", 'A detailed "minimalist" design of the character Megumin, from the Anime Konosuba, with shading and more color detail. Created and coloured within Adobe Illustrator with the Pen Tool.', "<img class='imgGif imgCent' src='images/gifMeg.gif'><img class='imgStill imgCent' src='images/jpgMeg.png'>"],

    roku: ["Brand: The Roku", "Graphic Design, Branding", "A business mockup created between my partner and I. The Roku is our attempt at creating an e-Commerce clothing brand on Toronto Asian culture. The general idea is a mixture of Western and Eastern Minimalist design.Includes logo on business card and some initial clothing design. Created with Adobe Photoshop and Illustrator.", "<div><img class='imgCard imgCent' src='../src/images/roku/rokucard.png'></div><div id='carouselExampleIndicators' class='carousel slide' data-ride='carousel'><ol class='carousel-indicators'><li data-target='#carouselExampleIndicators' data-slide-to='0' class='active'></li><li data-target='#carouselExampleIndicators' data-slide-to='1'></li><li data-target='#carouselExampleIndicators' data-slide-to='2'></li><li data-target='#carouselExampleIndicators' data-slide-to='3'></li></ol><div class='carousel-inner'><div class='carousel-item active'><img class='d-block w-100' src='../src/images/roku/Sweater1.jpg' alt='First slide'></div><div class='carousel-item'><img class='d-block w-100' src='../src/images/roku/Back2.jpg' alt='Second slide'></div><div class='carousel-item'><img class='d-block w-100' src='../src/images/roku/Back3.jpg' alt='Third slide'></div><div class='carousel-item'><img class='d-block w-100' src='../src/images/roku/Front3.jpg' alt='Fourth slide'></div></div></div>"],

    camp: ["Vector Art: Campfire", "Illustration, Minimalist", "A 'flat' campfire location design with 5 layers of depth; the lake, tent layer, tree, hills, mountain, and sky.Created as an attempt to create a more environmental design rather than the usually character design. Created using Adobe Illustrator.", "<div><img class='imgCard imgCent' src='../src/images/camp.png'></div>"],

    bmj: ["Wallpaper: Bloodmoon Jhin", "Graphic Design, Image Splice", "Part of the Jhin Wallpaper Series I did for a friend. A request from a friend to create some wallpapers of his favourite League of Legends champion. Taking an image of Blood Moon Jhin, I removed the background in Photoshop and layered two background image that fit the Chinese Theme as well as the atmosphere. Created in Adobe Photoshop.", "<div><img class='imgWall imgCent' src='../src/images/bloodmoon.jpg'></div>"],

    amacss: ["Poster: AMACSS", "Graphic Design, Image Splice", "Working as the Marketing Executive Assistant at the Association of Mathematical and Computer Science Student at the University of Toronto I was usually tasked with creating posters and banners for events that the society held. Below is an example of the type of work I would usually complete for them which consisted of splicing images together. Created using Adobe Photoshop.", "<div><img class='imgStill imgCent' src='../src/images/amacss.jpg'></div>"],

    unicorn: ["Vector Art: Unicorn", "Illustration, Minimalist", "Similar to the Campsite piece in terms of design but I wanted to challenge myself to create something without the use of the Pen Tool, which I heavily depend on. I decided to create a simple wallpaper using only the Shape tools in Adobe Illustrator and placed a Unicorn vector image to round it off. Created in Adobe Illustrator.", "<div><img class='imgWall imgCent' alt='unicorn' src='../src/images/unicorn.png'></div>"],

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