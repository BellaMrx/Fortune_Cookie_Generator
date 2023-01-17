//in HTML this.onclick=null => means only click once possible
function openVC() {
	
	// change start image to image with quote by clicking on it
	var body = document.querySelector("img.closeCookie");
	body.style.animation = "shake 0.8s";			//animation
	//delay of display when clicked by button with timeout
	setTimeout (() => {
	body.src = "../images/fortune-cookie-text1.png";
	body.style.width = "800px";
	body.style.height = "425px";
	body.style.text_align = "center";
	body.style.margin = "0px", "auto";
	body.style.padding = "0px";
	body.style.position = "relative";
	body.style.borderRadius = "100px";


// selection of quotes listed with array
var quote = new Array();
quote[0] = "Don’t hold onto thingsthat require a tight grip.";
quote[1] = "Look how far you've come.";
quote[2] = "Sitting in silence with you is all the noise I need.";
quote[3] = "Every good and perfect gift is from above.";
quote[4] = "Be careful who you trust. Salt and sugar look the same.";
quote[5] = "She lives the poetry she cannot write. (Oscar Wilde)";
quote[6] = "If you want the rainbow, you gotta put up with the rain! (Dolly Parton)";
quote[7] = "All we have to decide is what to do with the time that is given to us. (J.R.R. Tolkien)";
quote[8] = "One bad chapter doesn't mean your story is over.";
quote[9] = "You must expect great things of yourself before you can do them. (Michael Jordan)";
quote[10] = "Graduation is the first step of the next chapter of your life.";
quote[11] = "Graduation isn't the end of a tough journey. It is the beginning of a beautiful one.";
quote[12] = "Live as if you were to die tomorrow. Learn as if you were to live forever. (Gandhi)";
quote[13] = "No matter what people tell you, words and ideas can change the world. (Robin Williams)";
quote[14] = "The best way to predict your future is to create it. (Abraham Lincoln)";
quote[15] = "Stay hungry. Stay foolish. (Steve Jobs)";
quote[16] = "Get busy living or get busy dying. (Stephen King)",
quote[17] = "The beautiful thing about learning is that no one can take it away from you. (B.B. King)";
quote[18] = "Be bold, be courageous, be your best. (Gabrielle Giffords)";
quote[19] = "I gave you life, but really, you gave me mine.";
quote[20] = "What makes you different or weird, that is your strength. (Meryl Steep)";
quote[21] = "Your life doesn't get better by chance it gets better by change. (Jim Rhon)";
quote[22] = "Today is the opportunity to build the tomorrow you want. (Ken Poirot)";
quote[23] = "A fresh start is not a new place it is a new mindset. (Rachel Vince)";
quote[24] = "When someone leaves, its because someone else is about to arrive. (Paulo Coelho)";
quote[25] = "Be yourself, everyone else is already taken. (Oscar Wilde)";
quote[26] = "With you, I am home.";
quote[27] = "You make it look easy. The fact is it's really hard and you do it anyway.";
quote[28] = "Faith consists in believing what reason cannot. (Voltaire)";
quote[29] = "No one is you and that is your superpower.";
quote[30] = "Normal is nothing more than a cycle on a washing machine. (Whoopi Goldberg)";
quote[31] = "Our words have power, but our actions shape our lives. (Rachel Hollis)";
quote[32] = "In life there is no real safety except for self-belief. (Madonna)";
quote[33] = "My courage always rises at every attempt to intimidate me. (Jane Fonda)";
quote[34] = "Love yourself first and then everything falls into line. (Lucille Ball)";
quote[35] = "We loved with a love that was more than love. (Edgar Allan Poe)";
quote[36] = "Real love stories never have endings. (Richard Bach)";
quote[37] = "The only impossible journey is the one you never begin. (Anthony Robbins)";
quote[38] = "What we learn with pleasure we never forget. (Alfred Mercier)";
quote[39] = "Happiness is not something ready made. It comes from your own actions (Dalai Lama)";
quote[40] = "Bravery is to stand up for what you believe in. (Sophie Turner)";
quote[41] = "Don't be afraid to set boundaries for your own sanity. (Maren Morris)";
quote[42] = "Adjust, chill out, and be happy. (Milla Jovovich)";
quote[43] = "The most important thing you wear is your personality. (America Ferrera)";
quote[44] = "You will not determine my story. I will. (Amy Schumer)";
quote[45] = "Living in the constant unexpected. (Blake Lively)";
quote[46] = "Positive mindset always. (Danielle Panabaker)";
quote[47] = "Make more time for things that matter. (Anne Hathaway)";
quote[48] = "In case you ever foolishly forget: I am never not thinking of you. (Virginia Woolf)";
quote[49] = "Forever is a long time, but I wouldn't mind spending it by your side.";
quote[50] = "When you are content to be simply yourself and don't compare or compete, everyone will respect you. (Lao Tzu)";
quote[51] = "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring. (Marilyn Monroe)";
quote[52] = "Today you are you! That is truer than true! There is no one alive who is you-er than you! (Dr. Suess)";
quote[53] = "A party without cake is just a meeting. (Julia Child)";
quote[54] = "Life should not only be lived, it should be celebrated (Osho)";
quote[55] = "It is never too late to be what you might have been. (George Eliot)";
quote[56] = "The past is your lesson, the present is your gift, and the future is your motivation.";
quote[57] = "Inhale the future, exhale the past.";
quote[58] = "Look forward, not behind. Your best days are still right in front of you. (Adedayo Olabamiji)";
quote[59] = "Do something today that your future will thank you for.";
quote[60] = "You're never too old to set another goal or to dream a new dream. (C.S. Lewis)";
quote[61] = "There are far better things ahead than any we leave behind. (C.S. Lewis)";
quote[62] = "Every year on your birthday you get a chance to start new. (Sammy Hager)";
quote[63] = "In the end, it's not the years in your life that count. It's the life in your years. (Abraham Lincoln)";
quote[64] = "Be the heroine of your life, not the victim. (Nora Ephron)";
quote[65] = "The challenge is not to be perfect. It's to be whole. (Jane Fonda)";
quote[66] = "If you don't like the road you're walking, start paving another one. (Dolly Parton)";
quote[67] = "When the whole world is silent, even one voice becomes powerful. (Malala Yousafzai)";
quote[68] = "The most beautiful thing you can wear is confidence. (Blake Lively)";
quote[69] = "I'm not going to become anybody I don't want to become (Kristen Bell)";
quote[70] = "Stop comparing yourself to others. (Halsey)";
quote[71] = "Owning up to your vulnerabilities is a form of strength. (Lizzo)";
quote[72] = "Embrace the glorious mess that you are. (Elizabeth Gilbert)";
quote[73] = "Happy people are beautiful. (Drew Barrymore)";
quote[74] = "You have to be where you are to get where you need to go. (Amy Poehler)";
quote[75] = "There is no such thing as ugly. (Zendaya)";
quote[76] = "Let's practice motivation and love, not discrimination and hate. (Zendaya)";
quote[77] = "I only know I want to be wonderful. (Marilyn Monroe)";
quote[78] = "Wanting to be someone else is a waste of the person you are. (Kurt Cobain)";
quote[79] = "Imagination creates reality. (Richard Wagner)";
quote[80] = "Without deviation from the norm, progress is not possible. (Frank Zappa)";
quote[81] = "You are not a problem that needs solving. (Eckhart Tolle)";
quote[82] = "If you are not living this moment, you are not really living. (Eckhart Tolle)";
quote[83] = "I'm grateful for always this moment, the now, no matter what form it takes. (Eckhart Tolle)";
quote[84] = "Whatever the present moment contains, accept it as if you had chosen it. (Eckhart Tolle)";
quote[85] = "To love is to recognize yourself in another. (Eckhart Tolle)";
quote[86] = "Stop letting your head talk your heart out of it. (Rachel Hollis)";
quote[87] = "Embracing chaos might be the journey we take to finding peace. (Rachel Hollis)";
quote[88] = "Never break a promise to yourself. (Rachel Hollis)";
quote[89] = "When it comes to your dreams, no is not an answer. (Rachel Hollis)";
quote[90] = "Nobody gets to tell you how big your dreams can be. (Rachel Hollis)";
quote[91] = "Gratitude turns what we have into enough.";
quote[92] = "I have never met an interesting person who had an easy life. (Robin Arzon)";
quote[93] = "You only live once, but if you do it right, once is enough. (Mae West)";
quote[94] = "Don't just count your years. Make your years count. (Ernest Myers)";
quote[95] = "Forget the past. Look forward to the future. For the best things are yet to come.";
quote[96] = "Today marks one small milestone in the beautiful journey that is your life.";
quote[97] = "The story of love is hello and goodbye. Until we meet again. (Jimi Hendrix)";
quote[98] = "The world is full of suffering. It is also full of overcoming. (Helen Keller)";
quote[99] = "The object is not to forget, but to remember to go on.";
quote[100] = "Happiness is not something ready made. It comes from your own actions. (Dalai Lama)";
quote[101] = "A person who never made a mistake never tried anything new. (Albert Einstein)";
quote[102] = "Everything has beauty, but not everyone can see. (Confucius)";
quote[103] = "The wound is the place where the light enters you (Rumi)";
quote[104] = "Everything in the universe is within you. Ask all from yourself. (Rumi)";
quote[105] = "May the flowers remind us why the rain was so necessary. (Xan Oku)";
quote[106] = "Stay close to people who feel like sunlight. (Xan Oku)";
quote[107] = "There is always some madness in love. But there is also always some reason in madness. (Friedrich Nietzsche)";
quote[108] = "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. (Lao Tzu)";
quote[109] = "Putting yourself fully into what you do is a form of love.";
quote[110] = "When there’s nothing left to lose, there's everything left to gain.";
quote[111] = "Do what you love. The rest will fall into place.";
quote[112] = "Trust the wait. Enjoy not knowing.";
quote[113] = "Let go and let the universe do its thing.";
quote[114] = "Be kind to other human beings.";
quote[115] = "Edit your life.";

//random quote is selected
var options = Math.floor(Math.random()*quote.length);
//reproduces random quote
document.getElementById("cookieText").innerHTML = quote[options];

//final sentence,farewell is generated
document.getElementById("goodbyeText").innerHTML = "Thank you for your visit. You are welcome to visit us again.";
//time of the timeout
}, 1000);
};


