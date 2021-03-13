import { ProjectsProps } from 'components/Projects'

export const pagination = (
  items: ProjectsProps[],
  pageActual: number,
  limitItems: number
) => {
  const result = []
  const totalPage = Math.ceil(items.length / limitItems)
  let count = pageActual * limitItems - limitItems
  const delimiter = count + limitItems

  if (pageActual <= totalPage) {
    for (let i = count; i < delimiter; i++) {
      if (items[i] != null) {
        result.push(items[i])
      }
      count++
    }
  }

  return { result, totalPage }
}

export default {
  pagination
}
