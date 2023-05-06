// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================
var header = {
  name: {
    firstname: 'Oleh ',
    lastname: 'Spynu',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$',
  address: 'Київ,вул.Хорива 28',
}
var footer = {
  social: {
    email: {
      href: 'mailto:sovars@gmail.com',
      text: 'sovars@gmail.com',
    },
    phone: {
      href: 'tel:+380968771020',
      text: '+380968771020',
    },
    linkedin: {
      href: 'www.linkedin.com',
      text: 'LinkedIn',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    page: {
      title: 'Resume/Summary',
    },
    header,
    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project.Good team player, every colleague is a friend to me.',
      },
      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },
    footer,
  })
})
// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    page: {
      title: 'Resume/Skills',
    },
    header,
    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 7,
          isTop: true,
        },
        {
          name: 'VS Code & Git',
          point: 9,
          isTop: false,
        },
        {
          name: 'Terminal & NPM',
          point: 8,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Їсти',
          isMain: true,
        },
        {
          name: 'Спати',
          isMain: true,
        },
        {
          name: 'Читати',
          isMain: false,
        },
      ],
    },
    footer,
  })
})
//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    page: {
      title: 'Resume/Education',
    },
    header,
    main: {
      educations: [
        {
          name: 'KPI',
          isEnd: true,
        },
        {
          name: 'NPU',
          isEnd: true,
        },
        {
          name: 'LPI',
          isEnd: false,
        },
      ],
      certificates: [
        {
          name: 'KPI',
          id: 283284,
        },
        {
          name: 'NPU',
          id: 5859000,
        },
        {
          name: 'LPI',
          id: 868989,
        },
      ],
    },
    footer,
  })
})

// ================================================================
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume/Work',
    },
    header,
    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT-Brains',
            url: 'https://it-brains.com.ua',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmout: 3,
          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua',
              about: 'Airbnb',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              awards: [
                {
                  name: 'Background verification',
                },
                {
                  name: 'SEO optimized',
                },
              ],
              stackAmout: 3,
              awardAmout: 2,
            },
          ],
        },
      ],
    },
    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
