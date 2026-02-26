export interface LogCard {
  year: string
  cardClass?: string
  logos?: string[]
  caption: string
  videos?: { src: string; wide?: boolean }[]
  images?: string[]
  imagesClass?: 'horizontal' | 'grid-2x2' | 'no-crop' | 'horizontal'
}

export interface LogYear {
  year: string
  cards: LogCard[]
}

const base = '/assets'

export const buildLogData: LogYear[] = [
  {
    year: '2026',
    cards: [
      {
        year: '2026',
        cardClass: 'jetson',
        logos: [`${base}/images/Jetson.png`],
        caption: 'Set up home server with Jetson Nano. Created a remote to control my Apple TV. Jetson is very good for computer vision and I built a TV ad recognition tool that monitors broadcasts for phone numbers and URLs.',
        videos: [
          { src: `${base}/videos/screenscan2.webm`, wide: true },
          { src: `${base}/videos/screenscan1.webm`, wide: true },
        ],
        images: [`${base}/images/Live Camera OCR1.png`, `${base}/images/Live Camera OCR2.png`],
        imagesClass: 'horizontal',
      },
      {
        year: '2026',
        cardClass: 'jetson',
        logos: [`${base}/images/Jetson.png`],
        caption: 'Created Apple TV remote controller to turn on and launch apps via local network powered by Jetson Nano.',
        videos: [{ src: `${base}/videos/remote.webm` }],
      },
    ],
  },
  {
    year: '2025',
    cards: [
      {
        year: '2025',
        cardClass: 'cmr',
        caption: 'Generated a Cold Call Pipeline that Closed 100K revenue in 3 months',
        images: [`${base}/screenshots/codingstats/cmr1.PNG`, `${base}/screenshots/codingstats/cmr2.PNG`],
      },
      {
        year: '2025',
        cardClass: 'cursor',
        logos: [`${base}/images/cursor.png`],
        caption: '1.14 Billion Tokens and 3,800 agents on Cursor',
        images: [
          `${base}/screenshots/codingstats/cursor_1.jpeg`,
          `${base}/screenshots/codingstats/cursor_2.jpeg`,
          `${base}/screenshots/codingstats/cursor_3.jpeg`,
          `${base}/screenshots/codingstats/cursor_4.jpeg`,
        ],
        imagesClass: 'grid-2x2',
      },
      {
        year: '2025',
        cardClass: 'lovable',
        logos: [`${base}/images/lovable.png`, `${base}/images/supabase.png`],
        caption: 'Generated 2.1M lines of code on Lovable, a top 1% user in United States',
        images: [
          `${base}/screenshots/codingstats/lovable25_1.png`,
          `${base}/screenshots/codingstats/lovable25_2.png`,
          `${base}/screenshots/codingstats/lovable25_3.png`,
          `${base}/screenshots/codingstats/lovable25_4.png`,
          `${base}/screenshots/codingstats/lovable25_5.png`,
          `${base}/screenshots/codingstats/lovable25_6.png`,
        ],
        imagesClass: 'no-crop',
      },
      {
        year: '2025',
        cardClass: 'cursor',
        logos: [`${base}/images/cursor.png`, `${base}/images/lovable.png`, `${base}/images/supabase.png`],
        caption: 'Rebuild segmentation, and sentiment measurement tools to enable social aggregate ranks of images and videos.',
        videos: [
          { src: `${base}/videos/2026 rank.webm` },
          { src: `${base}/videos/pairrank.webm` },
        ],
        images: [
          `${base}/screenshots/tudebuildimages/pairranking.png`,
          `${base}/screenshots/tudebuildimages/secondsentiment.png`,
          `${base}/screenshots/tudebuildimages/segmentation.png`,
        ],
        imagesClass: 'horizontal',
      },
      {
        year: '2025',
        cardClass: 'lovable',
        logos: [`${base}/images/lovable.png`, `${base}/images/supabase.png`],
        caption: 'Created LiveBingo.Fun a multiplayer live bingo platform on Supabase that includes an optional Twitch live streaming integration.',
        videos: [{ src: `${base}/videos/bingo.webm`, wide: true }],
      },
      {
        year: '2025',
        cardClass: 'lovable',
        logos: [`${base}/images/lovable.png`, `${base}/images/supabase.png`],
        caption: 'Introduced to Lovable Platform in the Summer of 2025 by organizing the Hangout.FM Buildathon partnership between Lovable and the Popular Social Streaming service with over 1M users.',
        videos: [
          { src: `${base}/videos/buildathon/bld1.mov` },
          { src: `${base}/videos/buildathon/bld2.mov` },
          { src: `${base}/videos/buildathon/bld3.webm` },
        ],
      },
      {
        year: '2025',
        cardClass: 'jetson',
        logos: [`${base}/images/cursor.png`, `${base}/images/aws.png`],
        caption: 'Rebuild ranking, segmentation, and sentiment measurement tools on a Django database on AWS to allow user authentication.',
        videos: [{ src: `${base}/videos/django.webm` }],
      },
    ],
  },
  {
    year: '2024',
    cards: [
      {
        year: '2024',
        cardClass: 'cmr',
        logos: [`${base}/images/chatgpt.png`, `${base}/images/VisualStudio.webp`],
        caption: 'Used Visual Studio and ChatGPT to create Java front end ranking, sorting and price sensitivity tools copying and pasting file by file.',
        videos: [
          { src: `${base}/videos/24/24Pair.webm` },
          { src: `${base}/videos/24/24comedy.webm` },
          { src: `${base}/videos/24/24likeno.webm` },
          { src: `${base}/videos/24/24price.webm` },
          { src: `${base}/videos/24/24suggested.webm` },
        ],
      },
      {
        year: '2024',
        cardClass: 'jetson',
        logos: [`${base}/images/uspto.png`],
        caption: 'Patent Issued for Novel Video Sentiment measurement tool.',
        images: [`${base}/screenshots/tudebuildimages/patent.png`],
        imagesClass: 'horizontal',
      },
    ],
  },
  { year: '2023', cards: [] },
  { year: '2022', cards: [] },
  { year: '2021', cards: [] },
  { year: '2020', cards: [] },
  {
    year: '2019',
    cards: [
      {
        year: '2019',
        logos: [`${base}/images/upwork.png`, `${base}/images/fiverr.png`, `${base}/images/aws.png`, `${base}/images/js.png`],
        caption: 'Invented a unique sentiment capture tool while rebuilding TubeTude on AWS',
        videos: [
          { src: `${base}/videos/old/1_19test.webm` },
          { src: `${base}/videos/old/1_192origresult.webm` },
        ],
      },
    ],
  },
  {
    year: '2018',
    cards: [
      {
        year: '2018',
        logos: [`${base}/images/upwork.png`, `${base}/images/js.png`],
        caption: 'Frustrated by limited and overpriced dialtest options I started creating my own dial test via the chat on Upwork.',
        videos: [
          { src: `${base}/videos/old/0st18.webm` },
          { src: `${base}/videos/old/1st18.webm`, wide: true },
        ],
      },
    ],
  },
]
