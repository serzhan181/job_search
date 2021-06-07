import { makeAutoObservable } from 'mobx'

class Jobs {
  constructor() {
    makeAutoObservable(this)
  }

  isLoadingGlobal = false
  setIsLoadingGlobal = (bool = false) => {
    this.isLoadingGlobal = bool
  }

  listedJobs = []

  setListedJobs(jobs) {
    this.listedJobs = jobs || []
  }

  selectedJob = null
  setSelectedJob = (jobData) => {
    this.selectedJob = jobData || null
  }
}

export const jobs = new Jobs()
