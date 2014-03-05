
var quotes=new Array()

//change the quotes if desired. Add/ delete additional quotes as desired.

quotes[0]='\"If you find a job you really love, you’ll never work again.\" </br><div style = "padding-right: 1em; padding-top: 0.5em; font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Winston Churchill</div>'
quotes[1]='\"Whether you think you can or whether you think you can\'t, you\'re right!\"</br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Henry Ford</div>'
quotes[2]='\"I know of no more encouraging fact than the unquestionable ability of man to elevate his life by conscious endeavor.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Henry David Throeau</div>'
quotes[3]='\"The master has failed more times than the beginner has even tried.\"</br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Stephen McCranie</div>'
quotes[4]='\"High achievement always takes place in the framework of high expectation.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Jack Kinder</div>'
quotes[5]='\"I hear and I forget, I see and I remember. I do and I understand.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Chinese Proverb</div>'
quotes[6]='\"One may walk over the highest mountain one step at a time.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">John Wanamaker</div>'
quotes[7]='\"I never did a day\'s work in my life. It was all fun.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Thomas Edison</div>'
quotes[8]='\"The question isn\'t who is going to let me; it\'s who is going to stop me.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Ayn Rand</div>'
quotes[9]='\"People focus on role models; it is more effective to find antimodels - people you don\'t want to resemble when you grow up.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Nassim Nicholas Taleb</div>'
quotes[10]='\"The best time to plant a tree was 20 years ago. The second best time is now.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Chinese Proverb</div>'
quotes[11]='\"The best revenge is massive success.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Frank Sinatra</div>'
quotes[12]='\"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Marie Curie</div>'
quotes[13]='\"Remember that not getting what you want is sometimes a wonderful stroke of luck.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Dalai Lama</div>'
quotes[14]='\"Programming is not easy, but it is essential to multiplying the power of human creativity and effort to meet the needs and realize the goals of our modern world.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Anon</div>'
quotes[15]='\"There is nothing noble in being superior to your fellow man. True nobility is in being superior to your former self.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Ernest Hemingway</div>'
quotes[16]='\"It is not the strongest of the species that survives, nor the most intelligent that survives. It is the one that is the most adaptable to change.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Charles Darwin</div>'
quotes[17]='\"Only two things are infinite, the universe and human stupidity, and I\'m not sure about the universe.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Albert Einstein</div>'
quotes[18]='\"Curiosity, confidence, courage, and constancy. The greatest of all is confidence. When you believe in a thing, believe in it all the way, implicitly and unquestionable.\" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">Walt Disney</div>'
quotes[19]='\"A ship in a harbour is safe, but that is not what ships are for. \" </br><div style = "padding-right: 1em; padding-top: 0.5em;font-weight: bold; font-family: cursive; text-align: right; font-size: 18px; text-decoration: underline">John A. Shedd</div>'

var whichquote=Math.floor(Math.random()*(quotes.length))
document.write(quotes[whichquote])
