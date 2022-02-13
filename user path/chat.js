console.log('anystring')

// HTML structure for UI Elements
const userOpen = "<div class='left_align'><div class='chat_container user'><!-- top row --><div class='top_left'></div><div class='top_middle'></div><div class='top_right'></div><div class='break'></div><!-- content row --><div class='content_left'></div><div class='content_middle'>"

const userClose = "</div><div class='content_right'></div><div class='break'></div><!--bottom row --><div class='bottom_left'></div><div class='bottom_middle'></div><div class='bottom_right'></div></div></div>"

const botOpen = "<div class='right_align'><div class='chat_container bot'><!-- top row --><div class='top_left'></div><div class='top_middle'></div><div class='top_right'></div><div class='break'></div><!-- content row --><div class='content_left'></div><div class='content_middle'>"

const botClose = "</div><div class='content_right'></div><div class='break'></div><!--bottom row --><div class='bottom_left'></div><div class='bottom_middle'></div><div class='bottom_right'></div></div></div>"

const buttonOpen = "<div class='chat_button'><div class='top_left'></div><div class='top_middle'></div><div class='top_right'></div><div class='break'></div><!-- content row --><div class='content_left'></div>"

const buttonClose = "</div><div class='content_right'></div><div class='break'></div><!--bottom row --><div class='bottom_left'></div><div class='bottom_middle'></div><div class='bottom_right'></div></div>"

// App Script
    // Default opener is hard-coded
    // User responses
const doinOk = "<div class='content_middle' id='doinOK'>Doin okay"

const awesome = "<div class='content_middle' id='awesome'>Awesome!"

const notGreat = "<div class='content_middle' id='notGreat'>Not great"

const hangin = "<div class='content_middle' id='hangin'>It's hangin&hellip;"

    // iHype reply
const word = "Word. Got any plans tonight?"

    // User responses
const excited = "<div class='content_middle' id='excited'>Yeah, I'm excited!"

const yeah = "<div class='content_middle' id='yeah'>Yeah&hellip;"

const notYet = "<div class='content_middle' id='notYet'>Not yet."

const nope = "<div class='content_middle' id='nope'>Nope."

    // iHype reply
const stoked = "You don't sound so stoked. What's up?"

    // User responses
const poopEmoji = "<div class='content_middle' id='poopEmoji'>I'm having a 💩 day"

const notHot = "<div class='content_middle' id='notHot'>I'm not feelin so hot"

    // iHype reply
const sucks = "That sucks. Do you think seeing friends would cheer you up?"

    // User responses
const thinkSo = "<div class='content_middle' id='thinkSo'>Yeah, I think so"

const dontKnow = "<div class='content_middle' id='dontKnow'>I don't know&hellip;"

    // iHype reply
const havePlans = "Do you have plans with your friends?"

    // User responses
const iDo = "<div class='content_middle' id='iDo'>I do, actually"

const iDont = "<div class='content_middle' id='iDont'>I don't"

    // iHype reply
const seeFriends = "Go see your friends. It'll probably cheer you up."

// Functions

// Default opener is hard-coded
    $("#start").on("click", function (){
        $(".chat_button").remove();
        $("footer").append(buttonOpen + doinOk + buttonClose);
        $("footer").append(buttonOpen + awesome + buttonClose);
        $("footer").append(buttonOpen + notGreat + buttonClose);
        $("footer").append(buttonOpen + hangin + buttonClose);
        $(".chat_button").fadeIn("slow", function(){});
    });
// User selects response
$("#hangin").on("click", function (){
    console.log("why!!!");
});

    // $("#hangin").on("click", function (){
    //     console.log('poke');
    //     $("main").append(buttonOpen + hangin + buttonClose);
    //     $("main").scrollTop($("main")[0].scrollHeight);
    // });