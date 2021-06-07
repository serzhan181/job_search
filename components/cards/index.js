import { observer } from 'mobx-react-lite'
import { jobs } from '@/store/jobs'
import { Card } from './card'

export const JobCards = observer(() => {
  return (
    <>
      {jobs.listedJobs.map((j) => {
        return (
          <Card
            onClick={() =>
              jobs.setSelectedJob({
                jobSlug: j.slug,
                companySlug: j.company.slug,
              })
            }
            key={j.id}
            {...{ title: j.title, tags: j.tags }}
          />
        )
      })}
    </>
  )
})
