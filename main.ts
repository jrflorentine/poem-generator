input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (nouns[randint(0, 2)]))
    basic.showString("" + (verbs[randint(0, 2)]))
    basic.showString("" + (adverbs[randint(0, 2)]))
})
let adverbs: string[] = []
let verbs: string[] = []
let nouns: string[] = []
nouns = ["Trix", "dinosaur", "human"]
verbs = ["eats", "programs", "sleeps"]
adverbs = ["happily", "angrily", "quickly"]
