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

/*
  {
        "id": "cjz1ipl9x009a0758hg68h7vy",
        "title": "Senior Fullstack Engineer - Platform",
        "tags": [
          {
            "name": "TypeScript"
          },
          {
            "name": "React"
          },
          {
            "name": "Full Stack"
          },
          {
            "name": "Go"
          },
          {
            "name": "AWS"
          },
          {
            "name": "Docker"
          },
          {
            "name": "Kafka"
          },
          {
            "name": "Senior"
          }
        ]
      }
*/
