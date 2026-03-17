import type { QuizQuestion } from '@/types/quiz'
import type { Category } from '@/utils/constants'

const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5)

interface WordEntry {
  english: string
  swedish: string
  emoji: string
}

const WORD_BANKS: Record<string, WordEntry[]> = {
  'Body Parts': [
    { english: 'Head', swedish: 'Huvud', emoji: '🗣️' },
    { english: 'Eye', swedish: 'Öga', emoji: '👁️' },
    { english: 'Nose', swedish: 'Näsa', emoji: '👃' },
    { english: 'Ear', swedish: 'Öra', emoji: '👂' },
    { english: 'Hand', swedish: 'Hand', emoji: '✋' },
    { english: 'Foot', swedish: 'Fot', emoji: '🦶' },
    { english: 'Arm', swedish: 'Arm', emoji: '💪' },
    { english: 'Leg', swedish: 'Ben', emoji: '🦵' },
    { english: 'Mouth', swedish: 'Mun', emoji: '👄' },
    { english: 'Finger', swedish: 'Finger', emoji: '☝️' },
  ],
  Fruits: [
    { english: 'Apple', swedish: 'Äpple', emoji: '🍎' },
    { english: 'Banana', swedish: 'Banan', emoji: '🍌' },
    { english: 'Orange', swedish: 'Apelsin', emoji: '🍊' },
    { english: 'Grape', swedish: 'Druva', emoji: '🍇' },
    { english: 'Strawberry', swedish: 'Jordgubbe', emoji: '🍓' },
    { english: 'Mango', swedish: 'Mango', emoji: '🥭' },
    { english: 'Lemon', swedish: 'Citron', emoji: '🍋' },
    { english: 'Pear', swedish: 'Päron', emoji: '🍐' },
    { english: 'Peach', swedish: 'Persika', emoji: '🍑' },
    { english: 'Cherry', swedish: 'Körsbär', emoji: '🍒' },
  ],
  Vegetables: [
    { english: 'Carrot', swedish: 'Morot', emoji: '🥕' },
    { english: 'Potato', swedish: 'Potatis', emoji: '🥔' },
    { english: 'Onion', swedish: 'Lök', emoji: '🧅' },
    { english: 'Tomato', swedish: 'Tomat', emoji: '🍅' },
    { english: 'Cucumber', swedish: 'Gurka', emoji: '🥒' },
    { english: 'Broccoli', swedish: 'Broccoli', emoji: '🥦' },
    { english: 'Spinach', swedish: 'Spenat', emoji: '🌿' },
    { english: 'Pepper', swedish: 'Paprika', emoji: '🫑' },
    { english: 'Garlic', swedish: 'Vitlök', emoji: '🧄' },
    { english: 'Pea', swedish: 'Ärta', emoji: '🫛' },
  ],
  Groceries: [
    { english: 'Bread', swedish: 'Bröd', emoji: '🍞' },
    { english: 'Milk', swedish: 'Mjölk', emoji: '🥛' },
    { english: 'Egg', swedish: 'Ägg', emoji: '🥚' },
    { english: 'Butter', swedish: 'Smör', emoji: '🧈' },
    { english: 'Cheese', swedish: 'Ost', emoji: '🧀' },
    { english: 'Rice', swedish: 'Ris', emoji: '🍚' },
    { english: 'Sugar', swedish: 'Socker', emoji: '🍬' },
    { english: 'Salt', swedish: 'Salt', emoji: '🧂' },
    { english: 'Flour', swedish: 'Mjöl', emoji: '🌾' },
    { english: 'Coffee', swedish: 'Kaffe', emoji: '☕' },
  ],
}

export const generateQuestions = (category: Category, count = 10): QuizQuestion[] => {
  const bank = WORD_BANKS[category]
  const allSwedish = Object.values(WORD_BANKS)
    .flat()
    .map((w) => w.swedish)

  return shuffle(bank)
    .slice(0, count)
    .map((word, i) => {
      const distractors = shuffle(allSwedish.filter((s) => s !== word.swedish)).slice(0, 3)
      const options = shuffle([word.swedish, ...distractors])
      return {
        id: `${category}-${i}`,
        englishWord: word.english,
        swedishWord: word.swedish,
        emoji: word.emoji,
        options,
        correctIndex: options.indexOf(word.swedish),
        pointValue: 50,
      }
    })
}
