import React from 'react'
import mergeRoute from 'components/mergeRoutes'
const Home = React.lazy(() => import('./tmpl/homePage'))
const Agreement = React.lazy(() => import('./tmpl/agreement'))
const Faq = React.lazy(() => import('./tmpl/faq'))
const PlivacyPolicy = React.lazy(() => import('./tmpl/plivacyPolicy'))
export default mergeRoute(
  [
    {
      path: '/index',
      tmpl: Home
    },
    {
      path: '/index/agreement/:type',
      tmpl: Agreement
    },
    {
      path: '/index/plivacy-policy/:type',
      tmpl: PlivacyPolicy
    }, {
      path: '/index/faq/:type',
      tmpl: Faq
    },
  ]
)
