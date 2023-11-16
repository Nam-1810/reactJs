import {HeaderOnly} from '~/components/Layout'

import HomePage from '~/pages/Home'
import FollowingPage from '~/pages/Following'
import Upload from '~/pages/Upload'

export const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/Following', component: FollowingPage },
    { path: '/:nickname', component: FollowingPage },
    { path: '/upload', component: Upload, layout: HeaderOnly}
]

export const privateRoutes = []
