
const objectsToInsert =
  [
    {
      deckName: 'Hiragana',
      cards: [
        {
          title: 'あ',
          definition: 'a',
        },
        {
          title: 'い',
          definition: 'i',
        },
        {
          title: 'う',
          definition: 'u',
        },
        {
          title: 'え',
          definition: 'e',
        },        
        {
          title: 'お',
          definition: 'o',
        },        
        {
          title: 'か',
          definition: 'ka',
        },        
        {
          title: 'き',
          definition: 'ki',
        },
        {
          title: 'く',
          definition: 'ku',
        },
        {
          title: 'け',
          definition: 'ke',
        },        
        {
          title: 'こ',
          definition: 'ko',
        },        
        {
          title: 'さ',
          definition: 'sa',
        },        
        {
          title: 'し',
          definition: 'shi',
        },        
        {
          title: 'す',
          definition: 'su',
        },
        {
          title: 'せ',
          definition: 'se',
        },        
        {
          title: 'そ',
          definition: 'so',
        },        
        {
          title: 'た',
          definition: 'ta',
        },        
        {
          title: 'ち',
          definition: 'chi',
        },        
        {
          title: 'つ',
          definition: 'tsu',
        },
        {
          title: 'て',
          definition: 'te',
        },        
        {
          title: 'と',
          definition: 'to',
        },        
        {
          title: 'な',
          definition: 'na',
        },        
        {
          title: 'に',
          definition: 'ni',
        },        
        {
          title: 'ぬ',
          definition: 'nu',
        },
        {
          title: 'ね',
          definition: 'ne',
        },        
        {
          title: 'の',
          definition: 'no',
        },        
        {
          title: 'は',
          definition: 'ha',
        },        
        {
          title: 'ひ',
          definition: 'hi',
        },        
        {
          title: 'ふ',
          definition: 'fu',
        },
        {
          title: 'へ',
          definition: 'he',
        },        
        {
          title: 'ほ',
          definition: 'ho',
        },        
        {
          title: 'ま',
          definition: 'ma',
        },        
        {
          title: 'み',
          definition: 'mi',
        },
        {
          title: 'む',
          definition: 'mu',
        },
        {
          title: 'め',
          definition: 'me',
        },
        {
          title: 'も',
          definition: 'mo',
        },
        {
          title: 'や',
          definition: 'ya',
        },
        {
          title: 'ゆ',
          definition: 'yu',
        },
        {
          title: 'よ',
          definition: 'yo',
        },
        {
          title: 'ら',
          definition: 'ra',
        },
        {
          title: 'り',
          definition: 'ri',
        },
        {
          title: 'る',
          definition: 'ru',
        },
        {
          title: 'れ',
          definition: 're',
        },
        {
          title: 'ろ',
          definition: 'ro',
        },
        {
          title: 'わ',
          definition: 'wa',
        },
        {
          title: 'を',
          definition: 'wo',
        },

        {
          title: 'ん',
          definition: 'n',
        }
      ]
    },
    {
      deckName: 'Katakana',
      cards: [
        {
          title: 'ア',
          definition: 'a',
        },
        {
          title: 'イ',
          definition: 'i',
        },
        {
          title: 'ウ',
          definition: 'u',
        },
        {
          title: 'エ',
          definition: 'e',
        },        
        {
          title: 'オ',
          definition: 'o',
        },        
        {
          title: 'カ',
          definition: 'ka',
        },        
        {
          title: 'キ',
          definition: 'ki',
        },
        {
          title: 'ク',
          definition: 'ku',
        },
        {
          title: 'ケ',
          definition: 'ke',
        },        
        {
          title: 'コ',
          definition: 'ko',
        },        
        {
          title: 'サ',
          definition: 'sa',
        },        
        {
          title: 'シ',
          definition: 'shi',
        },        
        {
          title: 'ス',
          definition: 'su',
        },
        {
          title: 'セ',
          definition: 'se',
        },        
        {
          title: 'ソ',
          definition: 'so',
        },        
        {
          title: 'タ',
          definition: 'ta',
        },        
        {
          title: 'チ',
          definition: 'chi',
        },        
        {
          title: 'ツ',
          definition: 'tsu',
        },
        {
          title: 'テ',
          definition: 'te',
        },        
        {
          title: 'ト',
          definition: 'to',
        },        
        {
          title: 'ナ',
          definition: 'na',
        },        
        {
          title: 'ニ',
          definition: 'ni',
        },        
        {
          title: 'ヌ',
          definition: 'nu',
        },
        {
          title: 'ネ',
          definition: 'ne',
        },        
        {
          title: 'ノ',
          definition: 'no',
        },        
        {
          title: 'ハ',
          definition: 'ha',
        },        
        {
          title: 'ヒ',
          definition: 'hi',
        },        
        {
          title: 'フ',
          definition: 'fu',
        },
        {
          title: 'ヘ',
          definition: 'he',
        },        
        {
          title: 'ホ',
          definition: 'ho',
        },        
        {
          title: 'マ',
          definition: 'ma',
        },        
        {
          title: 'ミ',
          definition: 'mi',
        },
        {
          title: 'ム',
          definition: 'mu',
        },
        {
          title: 'メ',
          definition: 'me',
        },
        {
          title: 'モ',
          definition: 'mo',
        },
        {
          title: 'ヤ',
          definition: 'ya',
        },
        {
          title: 'ユ',
          definition: 'yu',
        },
        {
          title: 'ヨ',
          definition: 'yo',
        },
        {
          title: 'ラ',
          definition: 'ra',
        },
        {
          title: 'リ',
          definition: 'ri',
        },
        {
          title: 'ル',
          definition: 'ru',
        },
        {
          title: 'レ',
          definition: 're',
        },
        {
          title: 'ロ',
          definition: 'ro',
        },
        {
          title: 'ワ',
          definition: 'wa',
        },
        {
          title: 'ヲ',
          definition: 'wo',
        },

        {
          title: 'ン',
          definition: 'n',
        }
      ]
    }
  ]

module.exports = { 
  dbName: 'kioku',
  collName: 'decks',
  sampleDeck: objectsToInsert,
}