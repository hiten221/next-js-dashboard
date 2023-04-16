const getHost = () => {
  return process.env.NEXT_PUBLIC_WORKFLOW_URL
}

const paths =  {
  login: () => `${getHost()}/api/admin/login`,
  getStates: () => `${getHost()}/api/admin/states`,
  getCity: (stateId: number) => `${getHost()}/api/admin/cities/${stateId}`
}

export default paths;