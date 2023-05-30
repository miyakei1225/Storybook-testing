import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: 'linear-gradient(to top left, #fafcfe, #cfdfe9)',
      100: 'linear-gradient(to top left, #f4f7fd, #c1dae9)',
      200: 'linear-gradient(to top left, #edf3fc, #b2d4e9)',
      300: 'linear-gradient(to top left, #e0ecfa, #99c8e7)',
      400: 'linear-gradient(to top left, #d2e8f9, #80bde6)',
      500: 'linear-gradient(to top left, #b2e3f8, #00a0e9)',
      600: 'linear-gradient(to top left, #add8f6, #007ec1)',
      700: 'linear-gradient(to top left, #8bc3f0, #005c8f)',
      800: 'linear-gradient(to top left, #66aee9, #004570)',
      900: 'linear-gradient(to top left, #3389d6, #002b50)'
    },
    blackAlpha750: 'RGBA(0, 0, 0, 0.72)',
    borderColor: 'RGBA(0, 0, 0, 0.6)',
    logoColor: '#1b1b1b',
    buttonColor: '#4299e1'
  },
  styles: {
    global: {
      'html, body': {
        // background: '#E6F2FF',
        background: '#FFF'
        /* TODO: サービス内で用いるテキストフォント、カラーを決める
        color: 'gray.600',

        lineHeight: '1.4142135623',
        fontSize: 'base',
        letterSpacing: '0.08em',
        textAlign: 'justify',
        textJustify: 'inter-ideograph',
        fontFamily:
          '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "BIZ UDPGothic",Meiryo, sans-serif'
        */
      }
    },
    components: {
      Button: {
        baseStyle: {
          _focus: { boxShadow: 'none' }
        }
      }
    }
  }
})

export default theme
