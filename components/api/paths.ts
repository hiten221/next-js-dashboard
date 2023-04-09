const getHost = () => {
  return process.env.NEXT_PUBLIC_WORKFLOW_URL
}

const paths =  {
  login: () => `${getHost()}/api/admin/login`
}

export default paths;