export type ProjectsProps = {
  id: string
  image: {
    url: string
  }
  name: string
  minDescription: string
  slug: string
}

export type SkillsProps = {
  id: string
  name: string
  icon: {
    url: string
  }
}

export type FormationProps = {
  id: string
  period: string
  formationType: string
  course: string
  college: string
}

export interface ProjectsBySlug {
  projects: {
    id: string
    image: {
      url: string
      height: number
      width: number
    }
    name: string
    minDescription: string
    description: string
    github: string
    storybook?: string
    web?: string
    tecnology: string
    slug: string
  }
}

export type CertificateProps = {
  count: number
  certification: {
    id: string
    url: string
  }
}

export type HomeProps = {
  technicalAbilitie: SkillsProps[]
  formations: FormationProps[]
  certifications: CertificateProps[]
  projects: ProjectsProps[]
}
