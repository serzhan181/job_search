import { Card } from './card'

export const Cards = ({ jobs, setSelectedJob }) => {
  return (
    jobs && (
      <>
        {jobs.map((j) => {
          return (
            <Card
              onClick={() =>
                setSelectedJob({ jobSlug: j.slug, companySlug: j.company.slug })
              }
              key={j.id}
              {...{ title: j.title, tags: j.tags }}
            />
          )
        })}
      </>
    )
  )
}
