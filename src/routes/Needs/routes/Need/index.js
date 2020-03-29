import { loadable } from 'utils/router'

export default {
  path: ':needId',
  component: loadable(() =>
    import(/* webpackChunkName: 'Need' */ './components/NeedPage')
  )
}
