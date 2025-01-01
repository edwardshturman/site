'use client'

import { useSearchParams } from 'next/navigation'

import Link from 'next/link'
import { Suspense } from 'react'
import { ExternalLinkIcon } from '@/components/Icon'

import { artifacts } from './artifacts'

import styles from './Artifacts.module.css'

function ArtifactsListContent() {
  const searchParams = useSearchParams()
  const tagString = searchParams.get('tags')
  const tags = tagString?.split(',') || []
  let filteredArtifacts = artifacts
  if (tagString)
    filteredArtifacts = artifacts.filter(artifact => (tags.every(tag => artifact.tags.includes(tag))))

  return (
    <ul>
      {filteredArtifacts.map((artifact, index) => (
        <li key={index}>
          {artifact.link &&
            <Link className={styles.link} href={artifact.link}>
              {artifact.text}
              <ExternalLinkIcon
                style={{ scale: 0.8, marginLeft: '4px', verticalAlign: '-6px' }}
              />
            </Link>
          }
          {!artifact.link && <>{artifact.text}</>}
        </li>
      ))}
    </ul>
  )
}

export function ArtifactsList() {
  return (
    <Suspense>
      <ArtifactsListContent />
    </Suspense>
  )
}
