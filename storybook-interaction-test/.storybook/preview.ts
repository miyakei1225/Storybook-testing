import type { Preview } from '@storybook/react'
import { initialize, mswLoader } from 'msw-storybook-addon'
import { rest } from 'msw'

// Initialize MSW
initialize()

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    msw: {
      handlers: [
        rest.get('/api/current', async (_, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              id: 1,
              bio: '自称寿司職人エンジニア。ヒラメと真鯛を捌くのが得意です。',
              location: 'Tokyo, Japan',
              name: 'Keitaro Miyano',
              profileImageUrl: '/__mocks__/images/img01.png',
              username: '@38ke1',
              website: 'https://github.com/miyakei1225'
            })
          )
        })
      ]
    }
  },
  loaders: [mswLoader]
}

export default preview
