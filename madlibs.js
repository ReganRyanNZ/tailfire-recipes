export function madlibs(conclusion) {
  return `When I was ${timeFrame()} I ${realised()} that "${wisdom()}." That's when I knew—I must ${mission()}. For this recipe, we will ${conclusion}`
}

function timeFrame() {
 return random([`a wee little lad`,
                `fighting for my life in the hunger games`,
                `impersonating Elvis in 1962`,
                `born`,
                `fighting sherpas on the slopes of Everest`,
                `navigating the Atlantic for the first time`,
                `star-gazing in the fields with my highschool sweetheart`,
                `down to my last dollar during the Great Depression`,
                `getting coffee last week`
              ])
}

function realised() {
  return random([`suddenly realized, a little too late,`,
                 `suspected, but never quite confirmed,`,
                 `received an encoded message, saying`,
                 `tricked my father into telling me`,
                 `heard of an ancient legend, saying`,
                 `called my grandmother, who told me`,
                 `fell into a coma for two weeks, and woke up knowing`,
                 `got a part-time job with the local circus. A kind old lion-tamer taught me`,
                 `snuck into the forbidden section of the library, and learned`,
                 `found a talking squirrel. Unfortunately he only spoke Spanish, but I think what he tried to tell me was`,
                 `accidentally stole my landord's diary, thinking it was my own. There, on the front page, I read`
  ])
}

function mission() {
  return random([
    `save the Queen before she... Oh dear`,
    `build an even greater wooden horse, with even more soldiers hiding inside`,
    `tell the world that the scientist, not Frankstein, is the real monster`,
    `convince Nicholas Cage to steal the declaration of independence once again`,
    `rewatch the 1999 cinematic masterpiece 'The Mummy' Starring Brendan Fraser and Rachel Weisz`,
    `free all orcas from captivity, no matter the cost to my reputation`,
    `make peace with the past, no amount of preparation or review can change it`,
    `make the most out of every moment, for we never know what tomorrow will bring`,
    `relive the roaring '20s and take up dancing lessons`
  ])
}

function wisdom() {
  return random([
    `Happiness is only real when shared`,
    `Sometimes a hypocrite is nothing more than a man in the process of changing`,
    `A ship is safe in harbor, but that's not what ships are for`,
    `We judge others by their actions and ourselves by our intentions`,
    `We find it strange, that birds choose to stay in the same place, when they can fly anywhere on earth. Then I asked myself the same question`,
    `It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace`,
    `No one can make you feel inferior without your consent`,
    `Pride is not the opposite of shame, but its source. True humility is the only antidote to shame`,
    `A straight line may be the shortest distance between two points, but it is by no means the most interesting`,
    `Wanting to be someone else is a waste of the person you are`,
    `It's okay to look back at the past, just don't stare`,
    `Nobody made a greater mistake than he who did nothing because he could only do a little`,
  ])
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)]
}