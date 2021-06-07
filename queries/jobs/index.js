import { gql } from '@apollo/client'

/**
 * NAME CONVENTION:
 *
 * query, that is capitalized doesn't need arguments being parsed
 *
 * query, that isn't capitalized are function, does require arguments.
 */

export const GET_ALL_JOBS = gql`
  query {
    jobs {
      id
      title
      slug
      company {
        slug
      }
      tags {
        name
      }

      createdAt
    }
  }
`

export const GET_REMOTE_JOBS = gql`
  query {
    remotes {
      jobs {
        id
        title
        slug
        company {
          slug
        }
        tags {
          name
        }

        createdAt
      }
    }
  }
`

export const get_job_data = ({ jobSlug, companySlug }) => {
  return gql`
  query {
    job(input: { jobSlug: "${jobSlug}", companySlug: "${companySlug}" }) {
      title,
      description,
      company {
        name
        websiteUrl
      }
      commitment {
        title
      }
      tags {
        id,
        name
      }
      applyUrl,
      createdAt
    }
  }
  `
}

// commitment {
//   title
// }
