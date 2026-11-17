import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { WorkshopHeader } from "../WorkshopHeader"
import { isProjectSlug, projects } from "../entries"

// The entries themselves are rendered by the Workshop layout, filtered to this project

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(projects).map((project) => ({ project }))
}

export async function generateMetadata({
  params
}: PageProps<"/workshop/[project]">): Promise<Metadata> {
  const { project } = await params
  if (!isProjectSlug(project)) return {}
  const { name, description } = projects[project]
  return {
    title: `${name} · Workshop`,
    description,
    openGraph: {
      siteName: "Edward Shturman's personal website"
    }
  }
}

export default async function WorkshopProject({
  params
}: PageProps<"/workshop/[project]">) {
  const { project } = await params
  if (!isProjectSlug(project)) notFound()
  const { name, description } = projects[project]

  return <WorkshopHeader title={name} description={description} back />
}
