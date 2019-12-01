
const objectsToInsert =
  [
    {
      deckName: 'owo',
      cards: [
        {
          title: 'this is a title',
          definition: 'this is the definition side',
        },
        {
          title: 'sample text',
          definition: 'ipsum text is great',
        }
      ],
    },
    {
      deckName: 'anki',
      cards: [
        {
          title: 'anki is great!',
          definition: 'glory to anki!'
        }
      ]
    }
  ]

module.exports = { 
  dbName: 'kioku',
  collName: 'decks',
  sampleDeck: objectsToInsert,
}