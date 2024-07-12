import { headers } from 'next/headers'

import { Breadcrumbs } from './Breadcrumbs'

export function BreadcrumbsWrapper() {
  const platform = headers().get('Sec-Ch-Ua-Platform')
  return (
    <Breadcrumbs isWindows={platform === 'Windows'} />
  )
}
