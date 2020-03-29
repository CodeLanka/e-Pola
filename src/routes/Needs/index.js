import { NEEDS_PATH as path } from 'constants/paths'
import { loadable } from 'utils/router'

export default {
  path,
  component: loadable(() =>
    import(/* webpackChunkName: 'Needs' */ './components/NeedsPage')
  )
}
